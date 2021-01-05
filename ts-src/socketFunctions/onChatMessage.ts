import {Socket,Server} from 'socket.io';
import {botName} from '../utils/constants';
import { formatMessage } from '../utils/messages'

export const onChatMessage = (io:Server,socket:Socket)=>{
    socket.on('chatMessage', msg => {
        const message = {
            username: "Vamsi",
            time: "8:50",
            text: msg
        };
        io.emit('message', message);
    });
} 