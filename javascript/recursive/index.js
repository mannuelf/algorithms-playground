function countDown(number) {
  console.log(number);
  if (number === 0) {
    return;
  } else {
    countDown(number - 1);
  }
}

countDown(100);
// Wengrow, J. (2020). A Common-Sense Guide to Data Structures and Algorithms, Second Edition (2nd ed., Vol. 1). The Pragmatic Programmers.
