import { ElementFinder, element,by } from "protractor";

export class CalculatorHomePage_1{

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
     enterValue1(value:number){
         this.textBox1.sendKeys(value);
    }

     enterValue2(value:number){
         this.textBox2.sendKeys(value);
    }

     clickGoButton(){
         this.btnGo.click();
    }

     getResult(){
        return   this.lblResult.getText();
    }

}