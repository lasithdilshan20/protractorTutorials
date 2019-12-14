import { ElementFinder, element,by } from "protractor";

export class CalculatorHomePage{

    textBox1: ElementFinder;
    textBox2: ElementFinder;
    btnGo: ElementFinder;
    lblResult: ElementFinder;

    constructor(){
        this.textBox1 = element(by.model("first"));
        this.textBox2 = element(by.model('second'));
        this.btnGo =  element(by.id("gobutton"));
        this.lblResult = element(by.css("h2[class='ng-binding']"));
    }
     async enterValue1(value:number){
         await this.textBox1.sendKeys(value);
    }

    async enterValue2(value:number){
        await this.textBox2.sendKeys(value);
    }

    async clickGoButton(){
        await this.btnGo.click();
    }

    async getResult(){
        return   await this.lblResult.getText();
    }

}