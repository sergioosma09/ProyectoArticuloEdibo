import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
