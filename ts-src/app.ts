import express from 'express';
import * as path from 'path';
import * as http from 'http';
import {Server} from 'socket.io';
import {socketFunctions} from './socketFunctions/index';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname,'..','public')));

socketFunctions(io);

// could've used a port from process.env.PORT
server .listen(3000,()=>{
 console.log("server running");
}) 