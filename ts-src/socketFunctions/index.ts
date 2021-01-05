import { Socket, Server } from 'socket.io';
import {onDisconnect} from './onDisconnect';
import {onChatMessage} from './onChatMessage';
import {onJoinRoom} from './onJoinRoom';

export const socketFunctions = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        onJoinRoom(io,socket);

        onChatMessage(io,socket);

        onDisconnect(io,socket);
        
    });
}