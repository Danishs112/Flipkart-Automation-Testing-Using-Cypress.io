const filterSection = "div._1KOcBL";
const priceField = "select._2YxCDZ";
const flipKartAssuredCheckBox = "section._2hbLCH input[type='checkbox']";

class FilterSection {
    static getFilterSection(){
        return cy.get(filterSection);
    }
    static getPriceField(){
        return cy.get(priceField)
    }
    static getFlipkartAssuredCheckBox(){
        return cy.get(flipKartAssuredCheckBox);
    }
}

export default FilterSection;