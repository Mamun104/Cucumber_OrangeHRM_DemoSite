$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "name": "Login to a HRM portal",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login to the portal with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user visits to the HRM portal",
  "keyword": "Given "
});
formatter.step({
  "name": "user inputs invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user can not log in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "1234"
      ]
    },
    {
      "cells": [
        "user2",
        "2345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to the portal with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user visits to the HRM portal",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_to_the_HRM_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs invalid \"user1\" and \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_inputs_invalid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can not log in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_not_log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to the portal with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user visits to the HRM portal",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_to_the_HRM_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs invalid \"user2\" and \"2345\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_inputs_invalid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can not log in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_not_log_in()"
});
formatter.result({
  "status": "passed"
});
});