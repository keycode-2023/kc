
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name: string;
    email: string;
}

export interface ObjectCreationPermission {
    canCreateFramework: boolean;
    canCreatePolicy: boolean;
    canCreatePolicyFolder: boolean;
    canCreateListAndInventory: boolean;
}

export interface UserWithObjectCreationPermission {
    permission: ObjectCreationPermission;
}

export interface IQuery {
    me(): UserWithObjectCreationPermission | Promise<UserWithObjectCreationPermission>;
}

export interface User {
    name: string;
    email: string;
    height: string;
}

export interface IMutation {
    createUser(input?: Nullable<CreateUserInput>): User | Promise<User>;
}

type Nullable<T> = T | null;
