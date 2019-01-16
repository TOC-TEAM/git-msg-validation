# git-msg-validation

> A script to validate git commit message with nodejs。

[![Build Status](https://img.shields.io/travis/TOC-TEAM/git-msg-validation/master.svg)](https://travis-ci.org/TOC-TEAM/git-msg-validation)
[![Codecov branch](https://img.shields.io/codecov/c/github/TOC-TEAM/git-msg-validation/master.svg)](https://codecov.io/gh/TOC-TEAM/git-msg-validation)
[![NPM](https://img.shields.io/npm/v/git-msg-validation.svg)](https://www.npmjs.com/package/git-msg-validation)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)

## Install

```bash
npm install git-msg-validation -D
# or
yarn add git-msg-validation --dev
```

## Usage

- 使用默认的规则：
  in package.json:

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "git-msg-validation"
    }
  }
}
```

- 使用自定义的规则：

in package.json

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "git-msg-validation"
    },
    "rules": {
      "commit-msg": "^(fix|docs)(\\(.+\\))?: .{1,50}$"
    }
  }
}
```

Note: `rules`中的*key*和`hooks`中的*key*一一对应，*value*是一个正则表达式字符串。

## License

MIT © [TOC-TEAM](https://github.com/TOC-TEAM)
