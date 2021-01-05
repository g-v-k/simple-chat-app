import {Socket,Server} from 'socket.io';
import {botName} from '../utils/constants';
import { formatMessage } from '../utils/messages'

export const botMessages = (io:Server,socket:Socket)=>{
    socket.broadcast.emit("message",formatMessage(botName, 'A user has joined the chat'));

        socket.emit("message", formatMessage(botName, 'Welcome!'));
} 