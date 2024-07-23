Feature: Badge

  Scenario: define a renovate badge
    Given the project uses a renovate config with the modern filename
    When the scaffolder results are processed
    Then the renovate badge details are defined
