@gps
Feature: Testing the GPS API

  Scenario: Fetch GPS data from the API
    Given I insert GPS data into the database
    When I get all GPS interface data
    the service success response is 200
