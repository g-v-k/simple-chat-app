import {Socket,Server} from 'socket.io';
import {botName} from '../utils/constants';
import { formatMessage } from '../utils/messages'
import { leaveRoom,getRoomUsers } from '../utils/users';

export const onDisconnect = (io:Server,socket:Socket)=>{
    socket.on('disconnect', () => {
        const user = leaveRoom(socket.id);
        if(user){
            io.in(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
            io.in(user.room).emit("roomUsers",{room:user.room,users:getRoomUsers(user.room)});
        }
        
    });
} 