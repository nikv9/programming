def findLargeNum(arr):
    largeNum=0
    
    for i in range(0, len(arr)):
        if largeNum<arr[i]:
            largeNum=arr[i]

    return largeNum

arr=[3,4,2,5,1]
print(findLargeNum(arr))