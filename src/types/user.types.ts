export interface User {
    id: number;
    name: string;
}

export interface UserResponse {
    message: string;
    profile?: User;
    newData?: any;
} 