import cv2
import time
import math as m
import mediapipe as mp

def findDistance(x1,y1,x2,y2):
    dist=m.sqrt ((x2-x1)**2+(y2-y1)**2)
    return dist

def findAngle(x1,y1,x2,y2):
    theta =m.acos((y2-y1)*(-y1)/(m.sqrt(
        (x2-x1)**2+(y2-y1)**2)*y1))
    degree =int (180/m.pi)*theta
    return degree

good_frames=0
bad_frames=0

font =cv2.FONT_HERSHEY_SIMPLEX



mp_pose=mp.solutions.pose
pose=mp_pose.Pose()

cap=cv2.VideoCapture(0)
fps=int(cap.get(cv2.CAP_PROP_FPS))
width=int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height=int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
frame_size=(width,height)
fourcc=cv2.VideoWriter_fourcc(*'mp4v')
video_output=cv2.VideoWriter('output.mp4',fourcc,fps,frame_size)

# Capture frames.
for i in range(50):
    success, image = cap.read()
    if not success:
        print("Null.Frames")
        break
    fps = cap.get(cv2.CAP_PROP_FPS)
    h, w = image.shape[:2]
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    keypoints = pose.process(image)
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

    norm_coordinate  = pose.process(image).pose_landmarks.landmark[mp.solutions.pose.PoseLandmark.LEFT_SHOULDER].x
    lm = keypoints.pose_landmarks
    lmPose = mp_pose.PoseLandmark
    l_shldr_x = int(lm.landmark[lmPose.LEFT_SHOULDER].x * w)
    l_shldr_y = int(lm.landmark[lmPose.LEFT_SHOULDER].y * h)
    r_shldr_x = int(lm.landmark[lmPose.RIGHT_SHOULDER].x * w)
    r_shldr_y = int(lm.landmark[lmPose.RIGHT_SHOULDER].y * h)
    d = ((r_shldr_x - l_shldr_x) ** 2 + (r_shldr_y - l_shldr_y) ** 2) ** 0.5
    di = (d * 0.5)
    di = di*0.0328084
    print(di)
    cv2.imshow("Task", image)
