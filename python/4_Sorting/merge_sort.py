# Merge sort with recursion

items = [6, 20, 8, 19, 56, 23, 87, 99, 101, 89, 24, 99]

def mergesort(dataset):
    if len(dataset) > 1:
        mid = len(dataset) // 2
        leftarr = dataset[:mid]
        rightarr = dataset[mid:]

        # recursively break down the arrays
        mergesort(leftarr)
        mergesort(rightarr)
        
        # perform merging
        i = 0 # index into left array
        j = 0 # index into right array
        k = 0 # index into merged array

        # while both arrays have content
        while i < len(leftarr) and j < len(rightarr):
            if leftarr[i] < rightarr[j]:
                dataset[k] = leftarr[i]
                i += 1
            else:
                dataset[k] = rightarr[j]
                j += 1
            k += 1

        # if the left array still has values, add them.
        while i < len(leftarr):
            dataset[k] = leftarr[i]
            i += 1
            k += 1

        # if the right array still has values, add them.
        while j < len(rightarr):
            dataset[k] = rightarr[j]
            j += 1
            k += 1

# test the merge sort data
print(items)
mergesort(items)
print(items)
        