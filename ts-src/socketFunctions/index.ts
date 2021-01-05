import { Socket, Server } from 'socket.io';
import {botMessages} from './onMessage';
import {onDisconnect} from './onDisconnect';
import {onChatMessage} from './onChatMessage';

export const socketFunctions = (io: Server) => {
    io.on('connection', (socket: Socket) => {

        botMessages(io,socket);

        onDisconnect(io,socket);
        
        onChatMessage(io,socket);
        
        
    });
}