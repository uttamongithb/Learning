const express=require("express")
const http=require("http")
const {Server}=require("socket.io")

const app=express()
const server=http.createServer(app)
const io=new Server(server)

let users={}

app.get("/",(req,res)=>res.sendFile(__dirname+"/index.html"))

io.on("connection",(socket)=>{

socket.on("join",(name)=>{
users[socket.id]=name
socket.name=name
io.emit("users",users)
})

socket.on("msg",(data)=>{
for(let id in users){
if(users[id]===data.to){
io.to(id).emit("msg",{from:socket.name,text:data.text})
}
}
})

socket.on("disconnect",()=>{
delete users[socket.id]
io.emit("users",users)
})

})

server.listen(3000,()=>console.log("http://localhost:3000"))