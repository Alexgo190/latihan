const queue = require("./queue")

const Queue = new queue()

Queue.enqueue("A")
Queue.enqueue("B")
Queue.enqueue("C")
Queue.enqueue("D")
Queue.enqueue("E")
Queue.enqueue("F")
Queue.enqueue("G")
Queue.enqueue("H")

Queue.run()
