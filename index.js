const postcss = require('postcss');

module.exports = postcss.plugin('postcss-unit2unit', function (opts = {}) {
    opts = Object.assign({}, {
        from: 'px',
        to: 'px',
        multiple: 1,
        decimalPlaces: 0,
        skip: 'skip',
    }, opts)

    function replace(str) {
        if (!str) return str;

        const regexpStr = `([0-9.]+)(${opts.from})`;
        const regexp = new RegExp(regexpStr, 'gi');

        return str.replace(new RegExp(regexp), (match, num) => {
            let finalNum = (num * opts.multiple).toFixed(opts.decimalPlaces);
            let finalUnit = opts.to;
            return `${finalNum}${finalUnit}`;
        });
    }

    return function (root) {
        root.walkDecls(decl => {
            if (decl && decl.next() && decl.next().type === 'comment' && decl.next().text === opts.skip) {
                decl.next().remove();
            } else {
                decl.value = replace(decl.value);
            }
        });
    };
});
