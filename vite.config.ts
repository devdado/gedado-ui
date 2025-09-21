import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    tailwindcss(),
    dts({
      outDir: 'dist/types', // Matches your current declarationDir
      entryRoot: 'src', // Important for path remapping
      // Optional: Exclude test files from declarations
      exclude: ['src/**/*.test.ts'],
      // Optional: Clean output directory before building
      cleanVueFileName: true, // This is a Vue-specific option, can be removed if not using Vue
      // aliasesExclude: [], // Explicitly ensure aliases are resolved
    }),
  ],
  server: {
    open: true, // Abre el navegador automáticamente al iniciar el servidor de desarrollo
  },
  build: {
    // Modo librería
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Punto de entrada principal de tu librería
      name: 'ArtemisUI', // Nombre global de la librería (para formatos UMD)
      fileName: format => `artemis-ui.${format}.js`, // Nombre del archivo de salida
      formats: ['es', 'umd'], // Formatos de salida: ES Module (moderno) y UMD (compatibilidad más amplia)
    },

    // Configuración específica de Rollup (Vite usa Rollup internamente)
    rollupOptions: {
      // **CRUCIAL:** Declara las dependencias de Lit como externas.
      // Esto significa que no se empaquetarán en tu bundle de librería.
      // Se espera que la aplicación que consuma tu librería ya tenga Lit instalado.
      external: [
        'lit',
        'lit/decorators.js',
        'lit/directives/class-map.js', // Añade cualquier otra importación específica de Lit que uses
        'lit/directives/style-map.js',
        'lit/directives/if-defined.js',
        'lit/async-directive.js',
        // Si usas otros paquetes de Lit, como '@lit-labs/motion', también los harías externos.
        // Ejemplo: '@lit-labs/motion'
      ],
      output: {
        // Configura el nombre global para las dependencias externas cuando
        // se empaqueten para UMD.
        globals: {
          lit: 'Lit',
          'lit/decorators.js': 'LitDecorators',
          'lit/directives/class-map.js': 'LitClassMap',
          'lit/directives/style-map.js': 'LitStyleMap',
          'lit/directives/if-defined.js': 'LitIfDefined',
          'lit/async-directive.js': 'LitAsyncDirective',
          // '@lit-labs/motion': 'LitLabsMotion', // Ejemplo de un global para @lit-labs
        },
        assetFileNames: 'assets/styles/artemis-ui.css',
        // Mantiene los imports como están para ESM, útil si la aplicación consumidora usa importmaps
        // o si los paquetes externos están en el mismo `node_modules` de la app.
        // También puedes controlar la estructura del chunk (opcional)
        // chunkFileNames: 'chunks/[name]-[hash].js',
        // entryFileNames: '[name].js'
      },
      // Tailwind 4 still does not add sourcemaps, so we hide a sourcemaps warning during build
      // This does not affect the build process
      onwarn(warning, warn) {
        if (
          warning.code === 'SOURCEMAP_BROKEN' &&
          warning.plugin === '@tailwindcss/vite:generate:build'
        ) {
          return;
        }
        warn(warning);
      },
    },
    // Desactiva la minificación para una depuración más fácil en desarrollo
    // O déjalo en 'esbuild' para producción para una minificación rápida.
    minify: true, // true para producción, 'esbuild' o 'terser'
    sourcemap: true, // Genera sourcemaps para facilitar la depuración
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@/': fileURLToPath(new URL('./src/', import.meta.url)),
    },
  },
});
