function solution(string) {
  let newStr = "";
  string.split("").forEach((s) => {
    if (s === s.toUpperCase()) {
      newStr += " " + s;
    } else {
      newStr += s;
    }
  });
  return newStr;
}

console.log(solution("camelCasingTest"));
console.log(solution("identifier"));
console.log(solution(""));
