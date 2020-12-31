# renovate-scaffolder

opinionated scaffolder for enabling [Renovate](https://renovate.whitesourcesoftware.com/)
on a project

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]

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

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/renovate-scaffolder --save-prod
```

### Example

#### Import

```javascript
import {lift, predicate, scaffold} from '@form8ion/renovate-scaffolder';
```

#### Execute

```javascript
scaffold({projectRoot: process.cwd()});

predicate({projectRoot: process.cwd()});

lift();
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

[npm-badge]: https://img.shields.io/npm/v/@form8ion/renovate-scaffolder.svg

[runkit-link]: https://npm.runkit.com/@form8ion/renovate-scaffolder

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/renovate-scaffolder.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/renovate-scaffolder.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[github-actions-ci-link]: https://github.com/form8ion/renovate-scaffolder/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://github.com/form8ion/renovate-scaffolder/workflows/Node.js%20CI/badge.svg
