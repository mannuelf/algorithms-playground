# Quick Sort

items = [6, 20, 8, 19, 56, 23, 87, 99, 101, 89, 24, 99]

def quick_sort(dataset, first, last):
    if first < last:
        pivotIdx = partition(dataset, first, last) # calculate the split point
        quick_sort(dataset, first, pivotIdx - 1) # now sort the two partitions
        quick_sort(dataset, pivotIdx+1, last)


def partition(datavalues, first, last):
    pivotvalue = datavalues[first] # choose the first item as the pivot value
    lower = first + 1 # Establish lower index
    upper = last # establish lower index

    done = False # start searching for the crossing point
    while not done:
        while lower <= upper and datavalues[lower] <= pivotvalue: # advance the lower index
            lower += 1

        while datavalues[upper] >= pivotvalue and upper >= lower: # advance the upper index
            upper -= 1

        if upper < lower: # if the two indexes cross, we have found the split point
            done = True
        else:
            temp = datavalues[lower]
            datavalues[lower] = datavalues[upper]
            datavalues[upper] = temp

    # When the split point is found, exchange the pivot value
    temp = datavalues[first]
    datavalues[first] = datavalues[upper]
    datavalues[upper] = temp

    return upper # return split point index

print(items)
quick_sort(items, 0, len(items)-1)
print(items)