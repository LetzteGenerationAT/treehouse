import postcssPresetEnv from 'postcss-preset-env';

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 4,
    }),
  ],
};

export default config;
