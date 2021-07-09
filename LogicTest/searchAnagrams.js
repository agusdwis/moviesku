function sortAnagrams(array) {
  let found = {};
  let res = [];

  for (let i = 0; i < array.length; i++) {
    let substr = array[i].split("").sort().join("");
    if (substr) {
      found[substr] = found[substr] || [];
      found[substr].push(array[i]);
    }
  }

  for (let obj in found) {
    res.push(found[obj]);
  }

  for (var i = 1; i < res.length; i += 1) {
    if (res[i - 1].toString().length < res[i].toString().length) {
      var tmp = res[i - 1];
      res[i - 1] = res[i];
      res[i] = tmp;
    }
  }

  return res;
}

console.log(
  sortAnagrams(["kita", "atik", "tika", "aku", "kia", "makan", "kua"])
);

// Result
// [
//   [ 'kita', 'atik', 'tika' ],
//   [ 'aku', 'kua' ],
//   [ 'makan' ],
//   [ 'kia' ]
// ]
