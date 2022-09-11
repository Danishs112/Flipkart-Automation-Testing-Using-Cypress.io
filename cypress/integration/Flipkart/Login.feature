Feature: Flipkart Login Functionality Testing

    Scenario: Flipkart Automation - checking functionality of the close icon on the login modal
        Given I am on the home page
        Then I should see the header on the page
        And I should see the "Login" button on the header
        When I click on the "Login" button on the header
        Then I should see the "Login" modal on the page
        And I should see the close button on the login modal
        When I click on the close button on the login modal
        Then I should not see the "Login" modal on the page

    Scenario Outline: Flipkart Automation- checking login functionality with valid credentials
        Given I am on the home page
        Then I should see the header on the page
        And I should see the "Login" button on the header
        When I click on the "Login" button on the header
        Then I should see the "Login" modal on the page
        When I fill the "<email>" on the email input field
        And I fill the "<password>" on the password input field
        And I click on the "Login" button on the login modal on the page
        Then I should see the "My Account" heading on the header

        Examples:
            | email       | password       |
            | valid_email | valid_password |

    Scenario Outline: Flipkart Automation - checking login functionality with invalid credentials
        Given I am on the home page
        Then I should see the header on the page
        And I should see the "Login" button on the header
        When I click on the "Login" button on the header
        Then I should see the "Login" modal on the page
        When I fill the "<email>" on the email input field
        And I fill the "<password>" on the password input field
        And I click on the "Login" button on the login modal on the page
        Then I should see the "<errorMessage>" on the login modal
        Examples:
            | email         | password         | errorMessage                              |
            | invalid_email | invalid_password | Please enter valid Email ID/Mobile number |


