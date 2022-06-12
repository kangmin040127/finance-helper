from operator import indexOf


li = [1,2,9,10,80,40,33,99,200]
li.sort()
print(li)
print(len(li))
print(len(li)/2)
length = len(li)
print(length)
if length % 2 == 0:
    print(((li[length//2]) + (li[length//2  - 1])) / 2)
else:
    print(li[length//2])