const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const io = require("socket.io")(server)
const body_pase = require("body-parser")
const path = require("path")
const fs = require("fs")
const ejs = require("ejs")
const uuid = require('node-uuid');
const index_page = fs.readFileSync("./views/index.ejs","utf-8")


app.use(express.json())

app.use(body_pase.json());//////////////////////////////   ここ重要
app.use(body_pase.urlencoded({ extended: true }));//////
app.use(express.static(path.join(__dirname, "js")));
app.use("/flont", express.static("flont"))
app.get("/",(req,res)=>{
    let html = ejs.render(index_page,{

    })
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(html)
    res.end()
})

app.get("/game",(req,res)=>{
    let html = ejs.render(index_page,{

    })
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(html)
    res.end()
})
let wait_match = []
let games = []
let players = []
io.on("connection",(socket)=>{
    console.log("ff")
    let userId = uuid.v4()
    let joinRoomList = [{room:""},{user:""}]//このユーザーが入っているsocketのrooomの情報
    socket.join(userId)
    players.push(userId)

    io.to(userId).emit("set_data",{userId:userId})
    joinRoomList[1].user = userId
    socket.on("join_matching",(data)=>{
        if(wait_match.indexOf(userId) == -1){
            console.log(userId)
            wait_match.push(data.userId)
            if(wait_match.length >=2){
                let p1 = wait_match[0]
                let p2 = wait_match[1]
                wait_match.splice(0,2)

                let co1 = ""
                let co2 = ""
                let roomId = uuid.v4()
                socket.join(roomId)

                joinRoomList[0].room =roomId
                //ターン決め
                co1 = Math.floor(Math.random()*2)
                let black = ""
                let white = ""
                if(co1 == 0){
                    black = p1
                    white = p2
                    io.to(p1).emit("join_game_ser",{roomId:roomId,p1:p1,p2:p2,black:p1,white:p2})
                    io.to(roomId).emit("start_game",{roomId:roomId,p1:p1,p2:p2,black:p1,white:p2})
                }else{
                    black = p2
                    white = p1
                    io.to(p1).emit("join_game_ser",{roomId:roomId,p1:p1,p2:p2,black:p1,white:p2})
                    io.to(roomId).emit("start_game",{roomId:roomId,p1:p1,p2:p2,black:p2,white:p1})

                }
                let push_data = {
                    roomId:roomId,
                    stage:[
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,2,1,0,0,0],
                        [0,0,0,1,2,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],

                    ],
                    p1:p1,
                    p2:p2,
                    black:black,
                    white:white
                }
                games.push(push_data)
                console.log(wait_match)
                console.log(games)
                console.log(joinRoomList)
            }
        }
    })

    socket.on("join_match",(data)=>{
        socket.join(data.roomId)
        joinRoomList[0].room = data.roomId
        console.log(players)
    })
    socket.on("end_game",(data)=>{
        joinRoomList[0].room = ""
        socket.leave(data.room)
        console.log(joinRoomList)
    })
    socket.on("disconnect",()=>{
        players.splice(players.indexOf(userId),1)
        if(wait_match.indexOf(userId) != -1){
            wait_match.splice(wait_match.indexOf(userId),1)
        }

        if(joinRoomList[0].room != ""){

            for(let i = 0;games.length>i;i++){
                if(games[i].roomId == joinRoomList[0].room){

                    games.splice(i,1)
                    io.to(joinRoomList[0].room).emit("end_game")
                    break
                }
            }
        }
        console.log(players)
        console.log(wait_match)
        console.log(games)

    })

})
server.listen(3000,()=>{
    console.log("server run")
})