describe('Calculator Test Suite', function() {
    it('Add Two Numbers', function() {
        browser. get("http://juliemr.github.io/protractor-demo/");
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id("gobutton")).click();
        console.log("........Ending the test ......."); 


         //resolving promises by using then function - Protractor does not handle this.
         //We are handling it using then function
        element(by.css("h2[class='ng-binding']")).getText().then(function(value){
          console.log(value); 
       });

       expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("3");
        });

    });