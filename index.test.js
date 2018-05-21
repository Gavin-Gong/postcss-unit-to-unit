/* eslint:disable */
const postcss = require('postcss');

const plugin = require('./');

function run(input, output, opts) {
    return postcss([plugin(opts)]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}


it('test replace', () => {
    return run(
        'a{margin:10rpx}',
        'a{margin:10rem}', {
            from: 'rpx',
            to: 'rem'
        }
    );
});
it('test multiple value replace', () => {
    return run(
        'a{margin:10rpx 10rem}',
        'a{margin:10rem 10rem}', {
            from: 'rpx',
            to: 'rem'
        }
    );
});
it('test multiple value replace', () => {
    return run(
        'a{margin:10rpx 10rpx}',
        'a{margin:10rem 10rem}', {
            from: 'rpx',
            to: 'rem'
        }
    );
});
it('test multiple', () => {
    return run(
        'a{margin:10rpx}',
        'a{margin:20rem}', {
            from: 'rpx',
            to: 'rem',
            multiple: 2
        }
    );
});
it('test decimalPlaces', () => {
    return run(
        'a{margin:10rpx}',
        'a{margin:20.00rem}', {
            from: 'rpx',
            to: 'rem',
            multiple: 2,
            decimalPlaces: 2
        }
    );
});
it('test skip', () => {
    return run(
        'a{margin:10rpx /* skip */}',
        'a{margin:10rpx}', {
            from: 'rpx',
            to: 'rem',
            skip: 'skip'
        });
});
it('test user case', () => {
    return run(
        'a{margin:100rpx}',
        'a{margin:8.5333rem}', {
            from: 'rpx',
            to: 'rem',
            multiple: 0.085332969,
            decimalPlaces: 4
        });
});
