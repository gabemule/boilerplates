module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module' 
  },
  settings: { 
    react: { 
      version: 'detect' 
    } 
  },
  rules: {
    'linebreak-style': 0, // Desliga o uso lineabreak para evitar conflito de diferentes OS
    quotes: [
      'error',
      'single', // Força o uso de aspas simples
    ],
    semi: [
      'error',
      'always', // Garante que declarações terminem com ponto e vírgula
    ],
    'no-unused-vars': 'warn', // Adverte sobre variáveis declaradas mas não utilizadas
    'react/jsx-sort-props': 'error', // Força a ordenação das propriedades do JSX
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'newlines-between': 'always'
      },
    ],
  },
}
