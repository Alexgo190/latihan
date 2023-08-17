class Employee {
  constructor() {
    this.name = ""
  }

  set setName(name) {
    this.name = name
  }

  get getName() {
    return this.name
  }
}

class FulltimeEmployee extends Employee {
  constructor(name) {
    super(name)
    this.totalSalary = 0
    this.gaji = []
  }
  workingHour(hour) {
    let salary = 0
    if (hour > 6) {
      salary = 75000 * hour
    } else {
      salary = 100000 * hour
    }
    let working = {
      workingHour: hour,
      salary: salary,
    }
    this.gaji.push(working)
    this.totalSalary += salary
    return salary
  }

  get getSalary() {
    return this.gaji
  }

  get getTotalSalary() {
    return this.totalSalary
  }
}

const employee1 = new FulltimeEmployee()
employee1.setName = "alex"
employee1.workingHour(8)
employee1.workingHour(5)
employee1.workingHour(7)
console.log(employee1.getName)
console.log(employee1.getSalary)
console.log(employee1.getTotalSalary)

const employee2 = new FulltimeEmployee()
employee2.setName = "xela"
employee2.workingHour(10)
employee2.workingHour(4)
employee2.workingHour(6)
console.log(employee2.getName)
console.log(employee2.getSalary)
console.log(employee2.getTotalSalary)

class ParttimeEmployee extends Employee {
  constructor(name) {
    super(name)
    this.totalSalary = 0
    this.gaji = []
  }
  workingHour(hour) {
    let salary = 0
    if (hour > 6) {
      salary = 50000 * hour
    } else {
      salary = 30000 * hour
    }
    let working = {
      workingHour: hour,
      salary: salary,
    }
    this.gaji.push(working)
    this.totalSalary += salary
    return salary
  }

  get getSalary() {
    return this.gaji
  }

  get getTotalSalary() {
    return this.totalSalary
  }
}

const employee3 = new ParttimeEmployee()
employee3.setName = "roni"
employee3.workingHour(8)
employee3.workingHour(5)
employee3.workingHour(7)
console.log(employee3.getName)
console.log(employee3.getSalary)
console.log(employee3.getTotalSalary)

const employee4 = new ParttimeEmployee()
employee4.setName = "inor"
employee4.workingHour(10)
employee4.workingHour(4)
employee4.workingHour(6)
console.log(employee4.getName)
console.log(employee4.getSalary)
console.log(employee4.getTotalSalary)
