module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src/*',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@assets': './src/assets',
          '@api': './src/api',
          '@common': './src/common',
          '@appredux': './src/appredux',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@images': './src/assets/images',
          '@apptypes': './src/types',
          '@appi18n': './src/i18n',
          '@apphooks': './src/hooks',
          '@static': './src/data',
        },
      },
    ],
  ],
};
