import FilterSection from "../../../pages/filter.page";


And("I should see the filters section",function(){
    FilterSection.getFilterSection().should("be.visible");
});

When("I set the minimum price {string}",function(string){
    FilterSection.getPriceField().first().select(string);
});

And("I set the maximum price {string}",function(string){
    FilterSection.getPriceField().last().select(string);
});

And("I check the flipkart assured checkbox",function(){
    FilterSection.getFlipkartAssuredCheckBox().check();
});