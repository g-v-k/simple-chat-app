export interface User{
    socketId:string,
    username:string,
    room:string
};

const users: Array<User> = [];

export function joinRoom(socketId: string, username: string, room: string) {
    const user:User = { socketId, username, room };
    users.push(user);
    return user;
}

export function getCurrentUser(socketId: string):User {
    return users.find(user => user.socketId === socketId)!;

}

export function leaveRoom(socketId:string):User | null{
    const index = users.findIndex(user=>user.socketId===socketId);
    if(index != -1){
        return users.splice(index,1)[0];
    }
    return null;
}

export function getRoomUsers(room:string):Array<User>{
    return users.filter(user=>user.room===room);
}

