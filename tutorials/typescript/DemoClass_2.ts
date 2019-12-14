export class DemoClass_2{

    userName:string;
    password:any;
    ssn:number;


    constructor(userName:string,passWord:any,ssnNo:number){
        this.userName =userName;
        this.password = passWord;
        this.ssn = ssnNo;

    }
    getUsername():string{
        return this.userName;

    }

    getPassword():any{
        return this.password;
        
    }

    getSSN():number{
        return this.ssn;
    }

    setUsername(value:string){

        this.userName = value;
    }
}

//end of the class