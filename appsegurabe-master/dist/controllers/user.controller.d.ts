import { Count, Filter, Where } from '@loopback/repository';
import { User } from '../models';
import { UserRepository, Credentials } from '../repositories';
import { UserProfile, TokenService, UserService } from '@loopback/authentication';
import { PasswordHasher } from '../services/hash.password.bcryptjs';
export declare class UserController {
    userRepository: UserRepository;
    passwordHasher: PasswordHasher;
    jwtService: TokenService;
    userService: UserService<User, Credentials>;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasher, jwtService: TokenService, userService: UserService<User, Credentials>);
    create(user: User): Promise<User>;
    count(where?: Where<User>): Promise<Count>;
    find(filter?: Filter<User>): Promise<User[]>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    findById(id: string): Promise<User>;
    updateById(id: string, user: User): Promise<void>;
    replaceById(id: string, user: User): Promise<void>;
    deleteById(id: string): Promise<void>;
    printCurrentUser(currentUserProfile: UserProfile): Promise<UserProfile>;
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
}
