import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src', 'index.ts'],
  splitting: false,
  outDir: 'dist',
  skipNodeModulesBundle: true,
  sourcemap: false,
  loader: {
    '.scss': 'file',
  },
  tsconfig: 'tsconfig.json',
  clean: true,
});
