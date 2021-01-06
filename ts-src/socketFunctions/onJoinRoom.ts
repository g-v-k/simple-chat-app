import { Socket, Server } from 'socket.io';
import { joinRoom, getRoomUsers } from '../utils/users';
import {botName} from '../utils/constants';
import { formatMessage } from '../utils/messages'

export const onJoinRoom = (io: Server, socket: Socket) => {

    socket.on('joinRoom', ({ username, room }) => {
        const user = joinRoom(socket.id, username, room);
        socket.join(user.room);
        socket.to(user.room).emit("message", formatMessage(botName, `${user.username} has joined the chat`));
        io.in(user.room).emit("roomUsers",{room:user.room,users:getRoomUsers(user.room)});
        socket.emit("message", formatMessage(botName, 'Welcome!'));
    });
}