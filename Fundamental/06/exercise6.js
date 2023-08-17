//No.1
const calcStudentData = function (students) {
  let result = {
    score: {
      highest: students[0].score,
      lowest: students[0].score,
      average: 0,
    },
    age: {
      highest: new Date() - students[0].age,
      lowest: new Date() - students[0].age,
      average: 0,
    },
  }

  let totalScore = 0
  let totalAge = 0
  for (let i = 0; i < students.length; i++) {
    let years = (new Date() - students[i].age) / 31536000000
    // console.log(years)
    // Find the highest and lowest score
    if (result.score.highest < students[i].score) {
      result.score.highest = students[i].score
    }
    if (result.score.lowest > students[i].score) {
      result.score.lowest = students[i].score
    }

    //Find the highest and lowest age
    if (result.age.highest < years) {
      result.age.highest = years
    }
    if (result.age.lowest > years) {
      result.age.lowest = years
    }

    totalScore += students[i].score
    totalAge += years
  }
  result.score.average = totalScore / students.length
  result.age.average = totalAge / students.length
  return result
}

const studentsData = [
  {
    name: "Alex",
    email: "alexandergo@gmail.com",
    age: new Date("2001-03-19"),
    score: 90,
  },
  {
    name: "Ahmad",
    email: "ahmad@gmail.com",
    age: new Date("1990-05-23"),
    score: 89,
  },
  {
    name: "Asep",
    email: "asep@gmail.com",
    age: new Date("2005-12-11"),
    score: 92,
  },
]
console.log(calcStudentData(studentsData))

//No.2
class Product {
  static productList = []
  constructor() {
    this.productName = ""
    this.price = 0
  }

  set setProductName(name) {
    this.productName = name
  }

  get getProductName() {
    return this.productName
  }

  set setPrice(price) {
    this.price = price
  }

  get getPrice() {
    return this.price
  }
}

let product1 = new Product()
product1.setProductName = "Laptop MSI"
product1.setPrice = "15000000"

let product2 = new Product()
product2.setProductName = "Laptop ROG"
product2.setPrice = "20000000"
// console.log(product1, product2)

Product.productList.push(product1, product2)
// console.log(Product.productList)

class Transaction {
  constructor() {
    this.cart = []
    this.total = 0
  }

  addToCart(productName, Qty) {
    for (let item of Product.productList) {
      if (item.productName == productName) {
        let priceTotal = item.price * Qty
        let itemOrder = {
          ...item,
          quantity: Qty,
          total: priceTotal,
        }
        this.cart.push(itemOrder)
        this.total += priceTotal
        return
      }
    }
    console.log("Maaf barang tidak tersedia, mohon cari barang yang ada saja")
  }

  get getShowTotal() {
    return this.total
  }

  get getCheckout() {
    Object.freeze(this)
    return this
  }
}

let trans1 = new Transaction()
trans1.addToCart("Laptop ROG", 1)
console.log(trans1)
