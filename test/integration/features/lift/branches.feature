Feature: Branches

  Scenario: enable verification of renovate branches
    When the scaffolder results are processed
    Then renovate branches are suggested for verification
