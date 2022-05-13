import cv2 as cv
import mediapipe as mp
import numpy as np
import pyttsx3
import pygame
import time
import math
from numpy.lib import utils
import imutils
from imutils.video import FPS

mpPose = mp.solutions.pose#calculating pose by using media pipes
mpFaceMesh = mp.solutions.face_mesh#detecting face
facemesh = mpFaceMesh.FaceMesh(max_num_faces=2)
mpDraw = mp.solutions.drawing_utils
drawing = mpDraw.DrawingSpec(thickness=1, circle_radius=1)
pose = mpPose.Pose()
capture = cv.VideoCapture(0)#Turning on webcam
lst = []
n = 0
scale = 3
ptime = 0
count = 0
brake = 0
x = 150
y = 195
img_counter = 0

i=0
for i in range(50):
    isTrue, img = capture.read()
    if isTrue:#when camera is on
        img_rgb = cv.cvtColor(img, cv.COLOR_BGR2RGB)#converting RGB to BGR
        result = pose.process(img_rgb)
        if result.pose_landmarks:#if all the points in pose are detected:
            mpDraw.draw_landmarks(img, result.pose_landmarks, mpPose.POSE_CONNECTIONS)#highlighting each point/joint detected by MP
            for id, lm in enumerate(result.pose_landmarks.landmark):#iterating through each point

                lst[n] = lst.append([id, lm.x, lm.y])
                n + 1
                h, w, c = img.shape
                if id == 32:#id 32 is the right toe of the person in image
                    cx1, cy1 = int(lm.x * w), int(lm.y * h)
                    cv.circle(img, (cx1, cy1), 15, (0, 255, 0), cv.FILLED)
                    d = ((cx2 - cx1) ** 2 + (cy2 - cy1) ** 2) ** 0.5#Euclidean distance from head to toe
                    di = (d * 0.5)
                    di = di*0.0328084
                    print(f"Your height: {di} ")

               # if id == 12:# for shoulders
                    #left shoulder
                   # l_shldr_x = int(lm.landmark[lmPose.LEFT_SHOULDER].x * w)
                   # l_shldr_y = int(lm.landmark[lmPose.LEFT_SHOULDER].y * h)
                    # Right shoulder
                  #  r_shldr_x = int(lm.landmark[lmPose.RIGHT_SHOULDER].x * w)
                  #  r_shldr_y = int(lm.landmark[lmPose.RIGHT_SHOULDER].y * h)
                  #  sh_w = ((r_shldr_x - l_shldr_x) ** 2 + (r_shldr_y - l_shldr_y) ** 2) ** 0.5
                  #  sh_w1=sh_w*0.5
                  #  sh_w1=sh_w1*0.0328084
                 #   print(f"Your Shoulders: {sh_w1} ")
                    if ord('q'):
                        cv.destroyAllWindows()


                    #generating the outputs in im.show
                    cv.putText(img, "Height : ", (40, 70), cv.FONT_HERSHEY_COMPLEX, 1, (255, 0, 0), thickness=2)
                    cv.putText(img, str(di), (180, 70), cv.FONT_HERSHEY_DUPLEX, 1, (255, 0, 0), thickness=2)
                    cv.putText(img, "feet", (240, 70), cv.FONT_HERSHEY_PLAIN, 2, (255, 0, 0), thickness=2)



                if id == 6:
                    cx2, cy2 = int(lm.x * w), int(lm.y * h)#highlighting the face
                    cy2=cy2-20
                    cx2=cx2+5
                    cv.circle(img, (cx2, cy2), 15, (0, 255, 0), cv.FILLED)

    img = cv.resize(img, (700, 500))
    ctime = time.time()
    fps = 1 / (ctime - ptime)#fps calculation

    ptime = ctime
    cv.putText(img, "FPS : ", (40, 30), cv.FONT_HERSHEY_PLAIN, 2, (0, 0, 0), thickness=2)
    cv.putText(img, str(int(fps)), (160, 30), cv.FONT_HERSHEY_PLAIN, 2, (0, 0, 0), thickness=2)

    cv.imshow("Task", img)#display output
    cv.waitKey(10)
    if i==20 or i==30:
        img_name = "opencv_frame_{}.png".format(img_counter)
        cv.imwrite(img_name, img)
        print("{} written!".format(img_name))
        img_counter +=1


capture.release()

cv.destroyAllWindows()