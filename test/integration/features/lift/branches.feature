Feature: Branches

  Scenario: enable verification of renovate branches
    Given the project uses a renovate config with the modern filename
    When the scaffolder results are processed
    Then renovate branches are suggested for verification
