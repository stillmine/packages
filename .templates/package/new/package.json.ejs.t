---
to: packages/<%= name %>/package.json
---
{
  "name": "@stillmine/<%= name %>",
  "version": "0.0.0",
  "description": "<%= description %>",
  "license": "MIT",
  "main": "lib/index.js",
  "module": "esm/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "lint": "eslint src/**",
    "lint:format": "prettier \"src/**/*.{ts|tsx}\" --list-different",
    "test": "jest --passWithNoTests",
    "typecheck": "tsc --noEmit"
  }
}
