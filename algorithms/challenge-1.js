function countTruthy(arr) {
  let filterarr = arr.filter(function (arItem) {
    return (
      arItem !== 0 && arItem !== "" && arItem !== null && arItem !== undefined
    );
  });
  return filterarr.length;
}

module.exports = countTruthy;
