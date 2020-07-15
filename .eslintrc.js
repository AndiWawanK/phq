module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@assets': './src/Assets',
          '@components': './src/Components',
          '@navigations': './src/Navigations',
          '@scenes': './src/Scenes',
          '@styles': './src/Styles',
          '@utils': './src/Utils',
          '@stores': './src/Stores',
          '@reducers': './src/Reducers',
          '@constants': './src/Constants',
          '@actions': './src/Actions'
        },
      },
    },
  },
};
