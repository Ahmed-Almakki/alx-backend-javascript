export default function concatArrays(array1, array2, string) {
  const c = [...array1, ...array2, ...string];
  console.log(c);
}
