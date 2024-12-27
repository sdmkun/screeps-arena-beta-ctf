import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'beta-ctf-sdmkun',
      fileName: 'main',
    },
    rollupOptions: {
      external: [
        'arena/season_beta/capture_the_flag/basic/prototypes',
        'game/prototypes',
        'game/constants',
        'game/visual',
        'game/utils',
        'game/path-finder',
      ],
    },
  },
})
