const config = {
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': [2, {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        }],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                disallowTypeAnnotations: false
            }
        ],
        'arrow-parens': ['error', 'always'],
        'arrow-body-style': ['error', 'as-needed'],
        'eol-last': ['error', 'always'],
        'import/no-unresolved': 'off',
        'indent': ['error', 4],
        'key-spacing':  ['error', {
            singleLine: {
                beforeColon: false,
            },
            multiLine: {
                beforeColon: false,
                afterColon: true,
                mode: 'minimum'
            }
        }],
        'max-len': [1, { code: 150 }],
        'no-trailing-spaces': 'error',
        'no-console': 1,
        'no-multi-spaces': ['error', {
            ignoreEOLComments: true,
            exceptions: {
                CallExpression: true,
                ArrayExpression: true,
                ObjectExpression: true,
                ImportDeclaration: true,
                VariableDeclarator: true,
                TypeAliasDeclaration: true,
                InterfaceDeclaration: true
            }
        }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'no-var': 2,
        'object-curly-spacing': [2, 'always'],
        'quotes': [2, 'single'],
        'quote-props': [2, 'consistent-as-needed'],
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react/jsx-curly-spacing': [
            2,
            {
                when: 'always',
                children: {
                    when: 'always',
                },
                spacing: {
                    objectLiterals: 'always',
                },
            },
        ],
        'react/prop-types': 0,
        'semi': [2, 'always'],
    }
};

module.exports = config;
