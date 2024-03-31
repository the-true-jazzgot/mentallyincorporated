export interface User {
    name: string,
    profilePic?: string
}

export interface VUser extends User {

}

export interface RUser extends User {
    email: string
}