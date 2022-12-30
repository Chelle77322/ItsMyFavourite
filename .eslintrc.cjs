module.exports = {
    extends: [ // extending pre-defined rules
      'airbnb', 
      'airbnb/hooks',
      'prettier',
      'plugin:prettier/recommended',
    ],
    plugins: ['prettier'], 
    rules: { // you can modify some rules manually
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx'],
        },
      ],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'react/jsx-props-no-spreading': [
        0,
        {
          html: 'ignore',
          custom: 'ignore',
          explicitSpread: 'ignore',
        },
      ],
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
    globals: {
      window: true,
      document: true,
      localStorage: true,
      FormData: true,
      FileReader: true,
      Blob: true,
      navigator: true,
    },
  };