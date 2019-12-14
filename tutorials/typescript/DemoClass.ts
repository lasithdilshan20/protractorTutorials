class DemoClass{

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
let demoUser = new DemoClass("Test",'123',12345);
console.log(demoUser.getUsername());
console.log(demoUser.getPassword());
console.log(demoUser.getSSN());