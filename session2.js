//No.1
let x = 4
let y = 3
let z = 2

let w = Math.pow((x + y * z) / (x * y), z)
console.log(w)

//No.2
// const input = prompt("Silahkan masukkan angka berapapun :")
// const result = input
// alert(`Kuadrat dari ${input} adalah ${input ** 2}`)

//No.3
const number = 27
const cubeNumber = Math.cbrt(number)
console.log(cubeNumber)

//No.4
const hari = 400
const month = Math.floor(hari / 30) % 12
const year = Math.floor(hari / 365)
const day = (hari % 365) % 30

console.log(
  `${hari} hari adalah ${year} tahun dan ${month} bulan dan ${day} hari`
)

//No.5
/*
andi + budi = 49
rasio andi dan budi = 0.4 / 4 : 10 = 2 : 5
rasio andi = 2 , rasio budi = 5
total rasio = 7
*/

let totalAge = 49,
  ratioAndi = 2,
  ratioBudi = 5,
  totalRatio = 7
let andi = totalAge * (ratioAndi / totalRatio)
let budi = totalAge * (ratioBudi / totalRatio)
console.log(`Umur Andi saat ini ${andi}`)
console.log(`Umur Budi saat ini ${budi}`)

andi += 2
budi += 2
console.log(`Umur Andi 2 tahun lagi ${andi}`)
console.log(`Umur Budi 2 tahun lagi ${budi}`)

//No.6
var distance = 120
var speedA = 60
var speedB = 40
var startTimeHour = 9
var startTimeMinute = 0
