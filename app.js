const http =require("http")
const server = http.createServer()

const users =[
    {
        id: 1,
        name: "RebeKah Johnson",
        email: "Glover12345@gmail.com",
        password: "123qwe",
    },
    {
        id: 2,
        name: "RebeKah Johnson",
        email: "Glover12345@gmail.com",
        password: "123qwe",
    }
]

const posts = [
    {
      id: 1,
      title: "간단한 HTTP API 개발 시작!",
      content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
      userId: 1,
    },
    {
      id: 2,
      title: "HTTP의 특성",
      content: "Request/Response와 Stateless!!",
      userId: 1,
    },
  ];
  

const httpRequestListener=function(request,response){
    const{ url, method }= request

    if(method === 'GET'){
        if(url === '/ping'){
            response.writeHead(200,{'Content-TYpe': 'application/json'})
            response.end(JSON.stringify({message:'pong'}))
        }
    }else if( method ==="POST"){
        if(url ==="/users/signup"){
                response.writeHead(200,{'Content-Type' : 'application/json'})
                response.end(JSON.stringify({ message:"userCreated"}));
            };
        }
    }


server.on("request", httpRequestListener)

const IP = '127.0.0.1'
const PORT = 8000

server.listen(PORT, IP, function(){
    console.log(`Listening to request on ip ${IP} & port ${PORT}`)
})