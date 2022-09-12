Feature: Flipkart Search Functionality Testing

    Scenario Outline: Flipkart Automation - checking functionality of the search input field for "<itemName>" on the header
        Given I am on the home page
        Then I should see the header on the page
        And I should see the search input field on the header
        When I fill the "<itemName>" on the search input field
        And I click on the search icon on the search input field
        Then I should navigated to the "<itemName>" page

        Examples:
            | itemName |
            | pendrive |
            | mobile   |
            | socks    |