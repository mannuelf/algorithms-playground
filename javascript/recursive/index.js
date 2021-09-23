function countDown(number) {
  console.log(number);
  if (number === 0) {
    return;
  } else {
    countDown(number - 1);
  }
}

countDown(100);
