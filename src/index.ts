import dotenv from "dotenv"
dotenv.config({ path: "./.env" })
import express from "express"

const port = process.env.PORT || 3000

const app = express()

const myFunction = (name: String) => {
  console.log("hello myname is: ", name)
}

app.get("/", (req, res) => {
  myFunction("Toufique Al Ajay")
  console.log(`${req.method} - ${req.url} - ${req.ip}`)
  res.status(200).json({
    success: true,
    message: "Hello from developer.",
    code: "Successfully run",
  })
})

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
)
