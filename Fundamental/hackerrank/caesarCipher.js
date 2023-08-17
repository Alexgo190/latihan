const caesarCipher = function (s, k) {
  const lower = "abcdefghijklmnopqrstuvwxyz"
  const upper = lower.toUpperCase()

  const string = s.split("").map((h) => {
    console.log(s.indexOf("z"))
    if (lower.includes(h)) {
      return lower[(lower.indexOf(h) + k) % 26]
    } else if (upper.includes(h)) {
      return upper[(upper.indexOf(h) + k) % 26]
    } else {
      return h
    }
  })
  return string.join("")
}

console.log(caesarCipher("middle-Outz", 2))
