import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRouter from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./db/conntectToMongoDB.js";
import { app, server } from "./socket/socket.js";
dotenv.config();

const __dirname = path.resolve();


const PORT= process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRouter)
app.use("/api/message", messageRoutes)
app.use("/api/user", userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
})