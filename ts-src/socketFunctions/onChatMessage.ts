import {Socket,Server} from 'socket.io';
import {botName} from '../utils/constants';
import { formatMessage } from '../utils/messages'
import {getCurrentUser,User} from '../utils/users';

export const onChatMessage = (io:Server,socket:Socket)=>{
    socket.on('chatMessage', msg => {
        const user:User = getCurrentUser(socket.id);
        io.in(user.room).emit('message', formatMessage(user.username,msg));
    });
}  