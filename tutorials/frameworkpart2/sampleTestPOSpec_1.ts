import {browser,element,by} from 'protractor';
import { CalculatorHomePage_1 } from './pages/CalculatorHomePage_1';

describe('Calculator Test Suite', function() {
    it('Add Two Numbers', function() {
        browser. get("http://juliemr.github.io/protractor-demo/")
        let calHomePage = new CalculatorHomePage_1();
        calHomePage.enterValue1(5);
        calHomePage.enterValue2(6);
        calHomePage.clickGoButton();
        console.log(calHomePage.getResult());

        });

    });