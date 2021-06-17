import express from "express"
import cors from "cors"
import router from "./routers"

const app = express()
app.use(cors())

app.use("/",router)


export default app