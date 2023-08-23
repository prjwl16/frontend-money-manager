module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'src/components/ui/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'no-unused-vars': ['warn'],
    'react/jsx-uses-react':['warn'],
    'react/prop-types':['warn'],
    'react/no-unknown-property':['warn'],
    'react/react-in-jsx-scope':['warn'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
