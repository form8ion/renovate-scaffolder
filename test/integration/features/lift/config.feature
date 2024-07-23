Feature: Lift Config

  Scenario: legacy config
    Given the project uses a renovate config with the legacy filename
    When the scaffolder results are processed
    Then the project uses config with the modern filename
