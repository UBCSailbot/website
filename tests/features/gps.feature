@gps
Feature: GPS interface data

    Scenario: 404 Error when getting GPS interface data that DNE
        When I try to get all GPS interface data
        Then the service error response is 404
