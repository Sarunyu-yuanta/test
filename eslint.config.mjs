import tseslint from 'typescript-eslint'

export default tseslint.config({
  linterOptions: { reportUnusedDisableDirectives: false, noInlineConfig: true },
}, {
  files: ['src/**/*.{ts,tsx}'],
  plugins: { '@typescript-eslint': tseslint.plugin },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "JSXAttribute[name.name='weight'] > Literal:not([value='regular']):not([value='fill'])",
        message:
          'Phosphor icon `weight` must be "regular" or "fill" only.',
      },
      {
        selector:
          "ImportDeclaration[source.value='@phosphor-icons/react'] > ImportSpecifier[imported.name=/Bold$|Light$|Thin$|Duotone$/]",
        message:
          'Only import Regular (no suffix) or Fill icons from @phosphor-icons/react.',
      },
    ],
  },
})
