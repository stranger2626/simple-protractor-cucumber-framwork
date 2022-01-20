@epam
Feature: Search by key words

  Scenario Outline: I should be able to search by text
    Given I click on Search button
    When I search by "<Word>" word
    Then Page title should partially contains "<Title>"

    Examples:
      | Word  | Title |
      | Cloud | CLOUD |
      | RPA   | RPA   |