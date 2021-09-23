def double_array(array, index = 0):
  # base case:  when index goes out of range of given array
  if index >= len(array):
    return

  array[index] *= 2
  double_array(array, index + 1)
  print(array)

double_array([1,2,3,4,5,6])

# Wengrow, J. (2020). A Common-Sense Guide to Data Structures and Algorithms, Second Edition (2nd ed., Vol. 1). The Pragmatic Programmers.
