function filterList(arr) {
  const list = arr.filter((items) => typeof items === "number");
  return list;
}

module.exports = filterList;
