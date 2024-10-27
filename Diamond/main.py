# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

rows=int(input("enter number for rows"));
for i in range(0,rows+1):
    str=""
    for j in range(rows,i,-1):
        str+=" "
    for k in range(0,i):
        str+="*"
    for l in range(1,i):
        str+="*"
    print(str)
for i in range(rows-1,0,-1):
    str=""
    for j in range(rows,i,-1):
        str+=" "
    for k in range(0,i):
        str+="*"
    for l in range(1,i):
        str+="*"
    print(str)