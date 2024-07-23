Feature: Badge

  Scenario: define a renovate badge
    When the scaffolder results are processed
    Then the renovate badge details are defined
