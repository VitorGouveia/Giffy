// import esbuild from 'esbuild'

// await esbuild.build({
//   entryPoints: ['electron/index.ts'],

//   bundle: true,
//   format: 'cjs',
//   platform: 'node',
//   treeShaking: true,
//   outdir: 'dist',
//   minifyWhitespace: true,
//   external: ['electron', 'dotenv'],
// })

import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['electron/index.ts'],

  bundle: true,
  format: 'cjs',
  platform: 'node',
  outdir: 'dist',
  external: ['electron', 'dotenv'],
})
