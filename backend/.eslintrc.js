module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
        'airbnb-typescript/base'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": './tsconfig.json',
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-underscore-dangle": "off",
    "no-console": "off",
    "camelcase": "warn",
    "arrow-parens": [
      2,
      "always"
    ],
    "quotes": [
      2,
      "single"
    ],
    }
}
