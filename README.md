![cover](./cover.png)

<center>
  <a href="https://lernajs.io/"><img alt="lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" /></a>
</center>

## Packages

| Name                                                         | Version                                                         |
| ------------------------------------------------------------ | --------------------------------------------------------------- |
| [@stillmine/eslint-config](packages/eslint-config/README.md) | [![@stillmine/eslint-config][eslint-config]][eslint-config.url] |
| [@stillmine/tsconfig](packages/tsconfig/README.md)           | [![@stillmine/tsconfig][tsconfig]][tsconfig.url]                |

## How to publish?

```sh
  # add git tag for all packages and push tags
  npx lerna version

  # publish npm packages from git tag
  npx lerna publish from-git
```

## License

[MIT](LICENSE)

[eslint-config]: https://img.shields.io/npm/v/@stillmine/eslint-config/latest.svg?style=flat-square
[eslint-config.url]: https://www.npmjs.com/package/@stillmine/eslint-config
[tsconfig]: https://img.shields.io/npm/v/@stillmine/tsconfig/latest.svg?style=flat-square
[tsconfig.url]: https://www.npmjs.com/package/@stillmine/tsconfig
