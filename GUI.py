import tkinter as tk
from tkinter import filedialog,Text
import os
from Body_Detection import Body_mesh
root = tk.Tk()
apps=[]

if os.path.isfile('save.txt'):
    with open('save.txt','r') as f:
        tempApps =f.read()
        tempApps=tempApps.split(',')
        apps =[x for x in tempApps if x.strip()]
def addApp():

    for widget in frame.winfo_children():
        widget.destroy()

    filename=filedialog.askopenfilename(initialdir='/',
                                        title='select file',filetypes=(("executable","*.exe"),
                                                                   ("all files","*.*")))
    apps.append(filename)
    print (filename)
    for app in apps:
        label=tk.Label(frame,text=app, bg ="gray")
        label.pack()

def runApps():
    Body_mesh()
canvas= tk.Canvas(root,height=600,width=600,bg="#263D42")
canvas.pack()

frame= tk.Frame(root, bg="white")
frame.place(relwidth=0.8,relheight=0.8, relx=0.1,rely=0.1)

openFile=tk.Button(root, text="Open file",padx=10,pady=5,
                   fg="white",bg="#263d42", command=addApp)
openFile.pack()

Runapps=tk.Button(root, text="Run apps",padx=10,pady=5,
                  fg="white",bg="#263d42",command=runApps)
Runapps.pack()

for app in apps:
    label=tk.Label(frame,text=app)
    label.pack()

root.mainloop()

with open('save.txt','w') as f:
    for app in apps:
        f.write(app+ ',')