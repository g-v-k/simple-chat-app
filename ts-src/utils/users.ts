export interface User{
    id:string,
    username:string,
    room:string
};

const users: Array<User> = [];

export function joinRoom(id: string, username: string, room: string) {
    const user:User = { id, username, room };
    users.push(user);
    return user;
}

export function getCurrentUser(id: string) {
    return users.find(user => user.id === id);

}