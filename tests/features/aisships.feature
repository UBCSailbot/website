@aisships
Feature: Testing AISShips interface

  Scenario: Fetch AISShips data from the API
    Given I clear the DB
    And I insert AISShips data into the database
    When I get all AISShip interface data
    Then the service success response is 200
    And the response data matches the data in the database
