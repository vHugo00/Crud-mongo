const mongoose = require("mongoose")

const mongoDB = "mongodb+srv://<username>:<password>!@users.ho0a8.mongodb.net/?retryWrites=true&w=majority&appName=Users"

async function main() {
  await mongoose.connect(mongoDB)
}
main()
  .then(() => console.log(""))
  .catch(err => console.log(err))

module.exports = mongoose