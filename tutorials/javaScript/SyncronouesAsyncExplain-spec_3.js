describe('Calculator Test Suite', function() {
    it('Add Two Numbers', function() {
        browser. get("http://juliemr.github.io/protractor-demo/");
       
        //protractor handle these automatically
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id("gobutton")).click();

 
        //This should print the text but it want - promise is not handled properly
        console.log(element(by.css("h2[class='ng-binding']")).getText());

    });

    });