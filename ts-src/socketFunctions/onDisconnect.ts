import {Socket,Server} from 'socket.io';
import {botName} from '../utils/constants';
import { formatMessage } from '../utils/messages'

export const onDisconnect = (io:Server,socket:Socket)=>{
    socket.on('disconnect', () => {
        io.emit('message', formatMessage(botName, 'A user has left the chat'));
    });
} 