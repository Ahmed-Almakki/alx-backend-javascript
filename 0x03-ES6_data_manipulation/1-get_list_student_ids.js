export default function getListStudents(arr) {
  if (arr.constructor !== Array) {
    return [];
  }
  const x = arr.map((num) => num.id);
  return x;
}
