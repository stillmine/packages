---
to: packages/<%= name %>/package.json
---
{
  "name": "@stillmine/<%= name %>",
  "version": "0.0.0",
  "description": "<%= description %>",
  "repository": {
    "type": "git",
    "url": "https://github.com/stillmine/packages.git"
  },
  "license": "MIT",
  "main": "lib/mod.js",
  "module": "esm/mod.js",
  "types": "lib/mod.d.ts",
  "scripts": {
    "build": "concurrently \"rimraf esm lib\" \"yarn stillmine build cjs esm\" \"tsc --emitDeclarationOnly -p tsconfig.build.json\"",
    "lint": "eslint src/**/*.ts",
    "prepack": "yarn build",
    "test": "jest --passWithNoTests",
    "test:watch": "yarn test --watch",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "@stillmine/cli": "workspace:packages/cli",
    "concurrently": "6.1.0",
    "eslint": "7.27.0",
    "jest": "26.6.3",
    "rimraf": "3.0.2",
    "typescript": "4.2.4"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://npm.pkg.github.com"
  }
}
