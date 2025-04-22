export interface IUser {
    email: string;
    password: string;
    rol: string;
}

export interface UserResponse {
    id: number;
    email: string;
    rol: string;
}
    
    export interface CreateUserDto extends Omit<IUser, 'id'> {}
    