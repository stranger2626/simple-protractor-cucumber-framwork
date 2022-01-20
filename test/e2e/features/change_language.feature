@epam
Feature: Change language into Russian

    Scenario: I should be able to change the language of pages
        Given I click on change-language button
        When I select language
        Then Page title should be translated on selected language