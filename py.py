def search(nums,target):
    l,r=0,len(nums)-1
    mid=(l+r)//2
    while l<r:
        if nums[mid]>target:
            l=mid-1
        elif nums[mid]<target:
            r=mid+1
        else:
            return mid  
nums = [4,5,6,7,0,1,2]
search(nums,0)
