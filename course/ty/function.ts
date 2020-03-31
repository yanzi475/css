function add(x: number, y = 0, z: number) {
  return x + y + z;
}
console.log(add(1, null, 2));
