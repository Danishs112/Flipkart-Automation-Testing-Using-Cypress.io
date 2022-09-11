Feature: Flipkart Login Functionality Testing


    Scenario: Flipkart - checking functionality of the close icon on the login modal
        Given I am on the home page
        Then I should see the header on the page
        And I should see the "Login" button on the header
        When I click on the "Login" button on the header
        Then I should see the "Login" modal on the page
        And I should see the close button on the login modal
        When I click on the close button on the login modal
        Then I should not see the "Login" modal on the page

