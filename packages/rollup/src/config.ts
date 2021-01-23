export const extensions = ['.js', '.json', '.ts', '.tsx'];

export const input = (file = './src/index.ts') => file;

export const outputs = {
  cjs: (file = './dist/index.js') => ({ file, format: 'cjs' }),
  esm: (file = './esm/index.js') => ({ file, format: 'esm' }),
};
