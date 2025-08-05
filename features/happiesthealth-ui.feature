Feature: Happiest Health Homepage UI

  Scenario: Homepage loads and title is correct
    Given I open the Happiest Health homepage
    Then the page title should contain "Happiest Health"

  Scenario: Main navigation links are visible
    Given I open the Happiest Health homepage
    Then I should see the main navigation
    And I should see a link to "Knowledge"
    And I should see a link to "Diagnostics"

  Scenario: Featured images are visible on homepage
    Given I open the Happiest Health homepage
    Then I should see at least one featured image
