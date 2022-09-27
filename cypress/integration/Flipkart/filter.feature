Feature: Flipkart Filter Functionality Testing

    Scenario: Flipkart Automation - checking functionality of the filter on the search page 
        Given I am on the home page
        And I log in with valid credentials
        When I fill the "pendrive" on the search input field
        And I click on the search icon on the search input field
        Then I should navigated to the "pendrive" page
        And I should see all the items on the search page
        And I should see the filters section
        When I set the minimum price "200"
        And I set the maximum price "1000"
        And I check the flipkart assured checkbox
        And I select the brand "HP"
        And I select the capacity "64GB"
        And I select the interface "USB 2.0"
        And I select the case material "Metal"
        And I select the discount "40% or more"
        And I select the customer rating "4★ & above"
        And I select the offers "Special Price"
        And I select the GST Invoice Available 
        Then I should see the items between this range
        
