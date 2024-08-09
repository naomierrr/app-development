// this file is used to save each user's  information in an array
import {User} from "./user.model";

export class Datasource{
    private users: User[]

    // construct an array with difference users
    constructor(){
        this.users = new Array<User>(
            new User(1, 'Naomi C', 'ming.chen17@login.cuny.edu'),
            new User(2, 'John J', 'johnjerez@gmail.com')
        )
    }
    //define a gestuser() method to return the array 'users'
    getuser():User[]{
        return this.users
    }
}