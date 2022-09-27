Feature: Flipkart Add To Cart Functionality Testing

    Scenario Outline: Flipkart Automation - checking functionality of the add to cart button 
        Given I am on the home page
        And I log in with valid credentials
        Then I should see the header on the page
        When I search for the "<itemName>" item
        Then I should navigated to the "<itemName>" page
        And I should see all the items on the search page
        When I click on the "1" item on the search page
        Then I should navigated to the "<itemName>" page
        And I should see the "ADD TO CART" button on the item page
        Then I should navigated to the view cart page
        And I should see the item on the view cart page

        Examples:
            | itemName |
            | pendrive |
            # | mobile   |
            # | socks    |