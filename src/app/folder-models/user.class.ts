export class User {
    public username : string;
    public password : string;
    public fullname : string;
    public email : string;
    public phone : number;

    constructor(username : string, password : string, fullname : string, email : string, phone : number){
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
    }
}
