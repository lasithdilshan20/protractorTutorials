import {browser} from 'protractor';
import { CalculatorHomePage } from './pages/CalculatorHomePage';

describe('Calculator Test Suite', async() =>{
    it('Add Two Numbers', async()=> {
        browser. get("http://juliemr.github.io/protractor-demo/")
        let calHomePage = new CalculatorHomePage();
        await calHomePage.enterValue1(5);
        await calHomePage.enterValue2(6);
        await calHomePage.clickGoButton();
        let result =await calHomePage.getResult();
        console.log(result);

        });

    });