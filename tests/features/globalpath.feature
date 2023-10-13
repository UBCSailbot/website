@globalpath
Feature: Testing the GlobalPath PI

    Scenario: Fetch the GlobalPath data from the API
        Given I clear the database
        And I insert GlobalPath data into the database
        When I get all the GlobalPath interface data
        Then the service success response is 200
        And the reponse data matches the data in the database
