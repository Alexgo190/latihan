// No.1 Find area of rectangle
console.log(
  "------------------------------No 1-----------------------------------------"
)
let panjang = 5
let lebar = 10
let areaRectangle = panjang * lebar
console.log(`Luas persegi panjang adalah ${areaRectangle}`)
console.log(
  "------------------------------No 2-----------------------------------------"
)

//No.2 Find perimeter of rectangle
let perimeterRectangle = 2 * (panjang + lebar)
console.log(`Keliling persegi panjang adalah ${perimeterRectangle}`)

console.log(
  "------------------------------No 3-----------------------------------------"
)

//No.3 Find diameter, circumference , and area of a circle
const PI = 3.14
let sisi = 5
let circumference = 2 * PI * sisi

let diameter = 2 * sisi

let areaCircle = PI * sisi * sisi

console.log(
  `Keliling lingkaran ${circumference.toFixed(
    1
  )} , mencari diameter ${diameter}, cari luas lingkaran ${areaCircle}`
)
console.log(
  "------------------------------No 4-----------------------------------------"
)

//No.4 Find angle of triangle if two angles are given
let a = 30
let b = 90
let c = 180 - (a + b)
console.log(`Sudut terakhir ketika 2 sudut telah diketahui adalah ${c}`)
console.log(
  "------------------------------No 5-----------------------------------------"
)

//No.5 Get difference between dates in days
const date1 = new Date("2023-07-14")
const date2 = new Date("2023-07-24")
const dateDifferenceInMilli = date2 - date1
const dateDifference = dateDifferenceInMilli / Math.floor(1000 * 3600 * 24)
console.log(
  `Perbedaan hari dari hari 1 dan hari 2 adalah ${dateDifference} hari`
)
console.log(
  "------------------------------No 6-----------------------------------------"
)
//No.6 Convert days to years , months, and days
const days = 400
const month = (days / 365) % 30
const year = days / 365
const date = (days % 365) % 30
console.log(
  `${days} hari adalah ${year.toFixed()} tahun , ${month.toFixed()} bulan, dan ${date} hari`
)

const tahun = 2
const bulan = tahun * 12
const hari = tahun * 365
console.log(`${tahun} tahun adalah ${bulan} bulan dan ${hari} hari`)
