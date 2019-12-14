describe('Calculator Test Suite', function() {
    it('Add Two Numbers', function() {
        browser. get("http://juliemr.github.io/protractor-demo/");
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id("gobutton")).click();


        //Adding jasmine expect 
        //Jasmine expect handle promises within expect automatically
       expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("3");
       
        });

    });