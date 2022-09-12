const searchInputField = 'input[name="q"]';
const searchIconOnInputField = 'button.L0Z3Pu[type="submit"]';

class SearchPage{
    static getSearchInputField(){
        return cy.get(searchInputField);
    }
    static getSearchIconOnInputField(){
        return cy.get(searchIconOnInputField);
    }
}

export default SearchPage;