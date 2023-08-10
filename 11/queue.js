class Queue {
  constructor() {
    this.queue = []
  }

  async enqueue(item) {
    this.queue.push(item)
  }

  async dequeue() {
    return this.queue.shift()
  }

  async run() {
    console.log("[LOG] Print all the data in queue")
    while (this.queue.length > 0) {
      const item = await this.dequeue()
      const time = Math.floor(Math.random() * 10) + 1
      setTimeout(() => {
        console.log(`[LOG] queue ${item} in ${time} seconds`)
      }, time * 1000)
    }
  }

  get getSize() {
    return this.queue.length
  }
}

module.exports = Queue
