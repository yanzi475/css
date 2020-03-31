let x, y;
try {
  throw new Error();
} catch (x) {
  x = 1;
  y = 2;
  console.log("catch", x, y);
}
// console.log(x, y);
