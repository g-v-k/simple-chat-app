import { Socket, Server } from 'socket.io';
import { joinRoom, getCurrentUser } from '../utils/users';
import {botName} from '../utils/constants';
import { formatMessage } from '../utils/messages'

export const onJoinRoom = (io: Server, socket: Socket) => {

    socket.on('joinRoom', ({ username, room }) => {
        const user = joinRoom(socket.id, username, room);
        socket.join(user.room);
        socket.to(user.room).emit("message", formatMessage(botName, `${user.username} has joined the chat`));

        socket.emit("message", formatMessage(botName, 'Welcome!'));
    });
} 