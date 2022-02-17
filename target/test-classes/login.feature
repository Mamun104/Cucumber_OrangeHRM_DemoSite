Feature: Login to a HRM portal
  Scenario Outline: Login to the portal with invalid credentials
    Given user visits to the HRM portal
    When user inputs invalid "<username>" and "<password>"
    Then user can not log in
    Examples:
      | username | password |
    |user1     |1234      |
    |user2     |2345      |
