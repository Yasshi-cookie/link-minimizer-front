module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // TypeScriptの構文解析を行うために変更
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        node: true,
        browser: true,
        es6: true,
        commonjs: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript用の推奨ルールを追加
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module', // モジュールとしてコードを解析するように設定
    },
    plugins: [
        'react',
        '@next/eslint-plugin-next',
        'prettier',
        '@typescript-eslint', // TypeScriptのルールを適用するためのプラグインを追加
    ],
    rules: {
        'import/prefer-default-export': 0,
        'no-console': 'warn',
        'no-nested-ternary': 0,
        'no-underscore-dangle': 0,
        'no-unused-expressions': ['error', { allowTernary: true }],
        camelcase: 0,
        'react/self-closing-comp': 1,
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // .jsを.jsxに変更し、.tsxを追加
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-no-comment-textnodes': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        'react/no-unescaped-entities': 0,
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'prettier/prettier': [
            'error',
            { endOfLine: 'auto' },
            { usePrettierrc: true },
        ],
        // TypeScript固有のルールをここに追加できます
        '@typescript-eslint/no-unused-vars': 'warn' // 未使用の変数がある場合は警告
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'], // TypeScriptファイルに適用されるルール
            rules: {
                'react/prop-types': 'off', // TypeScriptを使用している場合、prop-typesは不要
            },
        },
    ],
}
