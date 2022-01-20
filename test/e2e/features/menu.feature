# @all
# Feature: Menu

#     @epam
#     Scenario: Verify user can open menu
#         Given I open "https://www.epam.com/" url
#         When I wait until "Our Work" is present
#         Then Text of "OUR WORK" should contain "Our Work"

#   Scenario: Verify expanded menu
#     When I click "Our Work"
#     And I wait until "Expanded Menu" is present
#     Then "Expanded Menu" should be visible
#     And Count of "Expanded Menu Sublists" should be "3"
#     And Text of "Expanded Menu Row Titles" should contain "WHAT WE DO"
#     And Count of "Expanded Menu Row Titles" should be "6"
#     And I wait "1" seconds