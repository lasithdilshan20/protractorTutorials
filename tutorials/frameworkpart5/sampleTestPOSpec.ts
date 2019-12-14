import {browser} from 'protractor';
import { CalculatorHomePage } from './pages/CalculatorHomePage';
import { testData } from './data/testData';


describe('Calculator Test Suite', async() =>{
    beforeEach(async () => {
        console.log("...... starting the test.....");
        browser. get("http://juliemr.github.io/protractor-demo/");
    });
    
    afterEach(async () => {
       console.log("...... ending the test.....");
    });

    it('Add Two Numbers', async()=> {
        let calHomePage = new CalculatorHomePage();
        await calHomePage.enterValue1(testData.getCalCulatorData.setOne.firstNo);
        await calHomePage.enterValue2(testData.getCalCulatorData.setOne.secondNo);
        await calHomePage.clickGoButton();
        let result =await calHomePage.getResult();
        console.log(result);
        expect(result).toBe(testData.getCalCulatorData.setOne.result);
        });
    });