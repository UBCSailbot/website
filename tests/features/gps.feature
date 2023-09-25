@gps
Feature: Testing the GPS API

  Scenario: Fetch GPS data from the API
    Given I insert GPS data into the database
    When I try to get all GPS interface data
    the service error response is 404
