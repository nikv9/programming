n=4

# for i in range(1, n+1):
#     line =''
#     for j in range(1,i+1):
#         line += '* '

#     print(line)

# for i in range(n, 0, -1):
#     line=''

#     for j in range(n, 0, -1):
#         line +=str(j)

#     print(line)    


for i in range(1, n+1):
    line =''
    for j in range(1,n+1):
        a = chr(ord('A')+j-1)
        line += a

    print(line)    

