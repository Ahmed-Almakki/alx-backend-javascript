export default function getStudentsByLocation(arr, loc) {
  return arr.filter((x) => x.location === loc);
}
