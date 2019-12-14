describe('Calculator Test Suite', function() {
    it('Add Two Numbers', function() {
        browser. get("http://juliemr.github.io/protractor-demo/");
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id("gobutton")).click();
        console.log("........Ending the test ......."); 


        element(by.css("h2[class='ng-binding']")).getText().then(function(value){
          console.log(value); 
       });

       expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("3");
        });

    });