export enum UserType {
    NORMAL_USER = 1,
    ADMIN = 2,
}

export class User {
    fullName: string;
    type: UserType;
    email: string;
    password: string;
    registrationTokens: string[];
    deleted: boolean;
    photo: string;
    _id: string;

    constructor(user) {
        this.fullName = user.fullName;
        this.type = user.type ? user.type : null;
        this.email = user.email;
        this.password = user.password;
        this.registrationTokens = user.registrationTokens;
        this.deleted = user.deleted;
        this.photo = user.photo;
        this._id = user._id;
    }
}
