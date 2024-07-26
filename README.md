# renovate-scaffolder

opinionated scaffolder for enabling [Renovate](https://renovate.whitesourcesoftware.com/)
on a project

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Features](#features)
* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
  * [API](#api)
    * [`projectRoot` __string__ (_required_)](#projectroot-string-required)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Features

* Creates the [config file](https://docs.renovatebot.com/configuration-options/)
  for [Renovate](https://renovate.whitesourcesoftware.com/), extending an
  appropriate [shareable config](https://docs.renovatebot.com/config-presets/#github-hosted-presets)

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![Try @form8ion/renovate-scaffolder on RunKit][runkit-badge]][runkit-link]
[![MIT license][license-badge]][license-link]
![node][node-badge]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/renovate-scaffolder --save-prod
```

### Example

#### Import

```javascript
import {lift, test as projectUsesRenovate, scaffold} from '@form8ion/renovate-scaffolder';
```

#### Execute

```javascript
(async () => {
  await scaffold({projectRoot: process.cwd()});

  if (await projectUsesRenovate({projectRoot: process.cwd()})) {
    await lift({projectRoot: process.cwd()});
  }
})();
```

### API

#### `projectRoot` __string__ (_required_)

path to the root of the project

## Contributing

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/@form8ion/renovate-scaffolder

[npm-badge]: https://img.shields.io/npm/v/@form8ion/renovate-scaffolder?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/renovate-scaffolder

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/renovate-scaffolder.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/renovate-scaffolder.svg?logo=opensourceinitiative

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[github-actions-ci-link]: https://github.com/form8ion/renovate-scaffolder/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/renovate-scaffolder/node-ci.yml.svg?branch=master&logo=github

[coverage-link]: https://codecov.io/github/form8ion/renovate-scaffolder

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/renovate-scaffolder?logo=codecov

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[node-badge]: https://img.shields.io/node/v/@form8ion/renovate-scaffolder?logo=node.js

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot
