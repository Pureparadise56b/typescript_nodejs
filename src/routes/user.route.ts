import express from "express"

const router = express.Router()

router.route("/profile").get((req, res) => {
  res.send("<h1>Hello user. Welcome to your profile</h1>")
})

export default router
