## postcss-unit2unit
[![Build Status](https://travis-ci.org/Gavin-Gong/postcss-unit2unit.svg?branch=master)](https://travis-ci.org/Gavin-Gong/postcss-unit2unit)

postcss plugin for convert the unit to another unit

## Install

```
$ npm i Gavin-Gong/postcss-unit2unit -D
```

## Options
`postcss-unit2unit` has some options to config.
```
{
    from: 'rpx',
    to: 'px',
    multiple: 1,
    decimalPlaces: 0,
    skip: 'skip',
}
```
### `options.from`, default as `px`
`String`, the unit should be replaced, e.g. 'rem'

###`options.to`, default as `px`
`String`, the unit should be replace with, e.g. 'rem'

###  `options.multiple`, default as `1`
`Number`, replace value with originalValue * multiple

### `options.decimalPlaces`, default as `0`
`Number`, the number of decimal places

### `options.skip`, default as `skip`
`String`, skip the rule marked as this option.
e.g. `{ margin: 10px; /* skip me */ }`, if set `'skip me'`, plugin will not convert this rule

## Usage
```
const postcss = require('postcss');
const plugin = require('postcss-unit2unit');

postcss([plugin({
    // pass your options
})]).process(/* your css */)
    .then(result => {
        // do
    });
```



