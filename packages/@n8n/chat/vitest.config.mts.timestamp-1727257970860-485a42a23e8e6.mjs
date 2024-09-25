// vitest.config.mts
import { resolve as resolve2 } from "path";
import { mergeConfig } from "file:///COD/n8n/node_modules/.pnpm/vite@5.4.6_@types+node@18.16.16_sass@1.64.1_terser@5.16.1/node_modules/vite/dist/node/index.js";
import { defineConfig as defineConfig2 } from "file:///COD/n8n/node_modules/.pnpm/vitest@2.1.1_@types+node@18.16.16_jsdom@23.0.1_sass@1.64.1_terser@5.16.1/node_modules/vitest/dist/config.js";

// vite.config.mts
import { defineConfig } from "file:///COD/n8n/node_modules/.pnpm/vite@5.4.6_@types+node@18.16.16_sass@1.64.1_terser@5.16.1/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///COD/n8n/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.6_@types+node@18.16.16_sass@1.64.1_terser@5.16.1__vue@3.4.21_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import icons from "file:///COD/n8n/node_modules/.pnpm/unplugin-icons@0.19.0_@vue+compiler-sfc@3.4.21_vue-template-compiler@2.7.14/node_modules/unplugin-icons/dist/vite.js";
import dts from "file:///COD/n8n/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@18.16.16_rollup@4.22.2_typescript@5.6.2_vite@5.4.6_@types+n_rcaikbew5ptk64olpe4bf2iruu/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/COD/n8n/packages/@n8n/chat";
var includeVue = process.env.INCLUDE_VUE === "true";
var srcPath = resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    icons({
      compiler: "vue3",
      autoInstall: true
    }),
    dts()
  ],
  resolve: {
    alias: {
      "@": srcPath,
      "@n8n/chat": srcPath,
      lodash: "lodash-es"
    }
  },
  define: {
    "process.env.NODE_ENV": process.env.NODE_ENV ? `"${process.env.NODE_ENV}"` : '"development"'
  },
  build: {
    emptyOutDir: !includeVue,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src", "index.ts"),
      name: "N8nChat",
      fileName: (format) => includeVue ? `chat.bundle.${format}.js` : `chat.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: includeVue ? [] : ["vue"],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: includeVue ? {} : {
          vue: "Vue"
        }
      }
    }
  }
});

// vitest.config.mts
var __vite_injected_original_dirname2 = "/COD/n8n/packages/@n8n/chat";
var srcPath2 = resolve2(__vite_injected_original_dirname2, "src");
var vitestConfig = defineConfig2({
  test: {
    globals: true,
    environment: "jsdom",
    root: srcPath2,
    setupFiles: ["./src/__tests__/setup.ts"],
    ...process.env.COVERAGE_ENABLED === "true" ? {
      coverage: {
        enabled: true,
        provider: "v8",
        reporter: process.env.CI === "true" ? "cobertura" : "text-summary",
        all: true
      }
    } : {}
  }
});
var vitest_config_default = mergeConfig(
  vite_config_default,
  vitestConfig
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy5tdHMiLCAidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL0NPRC9uOG4vcGFja2FnZXMvQG44bi9jaGF0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvQ09EL244bi9wYWNrYWdlcy9AbjhuL2NoYXQvdml0ZXN0LmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0NPRC9uOG4vcGFja2FnZXMvQG44bi9jaGF0L3ZpdGVzdC5jb25maWcubXRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHR5cGUgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGVzdCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcbmltcG9ydCB2aXRlQ29uZmlnIGZyb20gJy4vdml0ZS5jb25maWcubXRzJztcblxuY29uc3Qgc3JjUGF0aCA9IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyk7XG5jb25zdCB2aXRlc3RDb25maWcgPSBkZWZpbmVDb25maWcoe1xuXHR0ZXN0OiB7XG5cdFx0Z2xvYmFsczogdHJ1ZSxcblx0XHRlbnZpcm9ubWVudDogJ2pzZG9tJyxcblx0XHRyb290OiBzcmNQYXRoLFxuXHRcdHNldHVwRmlsZXM6IFsnLi9zcmMvX190ZXN0c19fL3NldHVwLnRzJ10sXG5cdFx0Li4uKHByb2Nlc3MuZW52LkNPVkVSQUdFX0VOQUJMRUQgPT09ICd0cnVlJ1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0Y292ZXJhZ2U6IHtcblx0XHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRwcm92aWRlcjogJ3Y4Jyxcblx0XHRcdFx0XHRcdHJlcG9ydGVyOiBwcm9jZXNzLmVudi5DSSA9PT0gJ3RydWUnID8gJ2NvYmVydHVyYScgOiAndGV4dC1zdW1tYXJ5Jyxcblx0XHRcdFx0XHRcdGFsbDogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0ICB9XG5cdFx0XHQ6IHt9KSxcblx0fSxcbn0pIGFzIFVzZXJDb25maWc7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxuXHR2aXRlQ29uZmlnLFxuXHR2aXRlc3RDb25maWcsXG4pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvQ09EL244bi9wYWNrYWdlcy9AbjhuL2NoYXRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9DT0QvbjhuL3BhY2thZ2VzL0BuOG4vY2hhdC92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0NPRC9uOG4vcGFja2FnZXMvQG44bi9jaGF0L3ZpdGUuY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IGljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5jb25zdCBpbmNsdWRlVnVlID0gcHJvY2Vzcy5lbnYuSU5DTFVERV9WVUUgPT09ICd0cnVlJztcbmNvbnN0IHNyY1BhdGggPSByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHZ1ZSgpLFxuXHRcdGljb25zKHtcblx0XHRcdGNvbXBpbGVyOiAndnVlMycsXG5cdFx0XHRhdXRvSW5zdGFsbDogdHJ1ZSxcblx0XHR9KSxcblx0XHRkdHMoKSxcblx0XSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6IHNyY1BhdGgsXG5cdFx0XHQnQG44bi9jaGF0Jzogc3JjUGF0aCxcblx0XHRcdGxvZGFzaDogJ2xvZGFzaC1lcycsXG5cdFx0fSxcblx0fSxcblx0ZGVmaW5lOiB7XG5cdFx0J3Byb2Nlc3MuZW52Lk5PREVfRU5WJzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPyBgXCIke3Byb2Nlc3MuZW52Lk5PREVfRU5WfVwiYCA6ICdcImRldmVsb3BtZW50XCInLFxuXHR9LFxuXHRidWlsZDoge1xuXHRcdGVtcHR5T3V0RGlyOiAhaW5jbHVkZVZ1ZSxcblx0XHRsaWI6IHtcblx0XHRcdGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycsICdpbmRleC50cycpLFxuXHRcdFx0bmFtZTogJ044bkNoYXQnLFxuXHRcdFx0ZmlsZU5hbWU6IChmb3JtYXQpID0+IChpbmNsdWRlVnVlID8gYGNoYXQuYnVuZGxlLiR7Zm9ybWF0fS5qc2AgOiBgY2hhdC4ke2Zvcm1hdH0uanNgKSxcblx0XHR9LFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcblx0XHRcdC8vIGludG8geW91ciBsaWJyYXJ5XG5cdFx0XHRleHRlcm5hbDogaW5jbHVkZVZ1ZSA/IFtdIDogWyd2dWUnXSxcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRleHBvcnRzOiAnbmFtZWQnLFxuXHRcdFx0XHQvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGRcblx0XHRcdFx0Ly8gZm9yIGV4dGVybmFsaXplZCBkZXBzXG5cdFx0XHRcdGdsb2JhbHM6IGluY2x1ZGVWdWVcblx0XHRcdFx0XHQ/IHt9XG5cdFx0XHRcdFx0OiB7XG5cdFx0XHRcdFx0XHRcdHZ1ZTogJ1Z1ZScsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlRLFNBQVMsV0FBQUEsZ0JBQWU7QUFDalMsU0FBUyxtQkFBbUI7QUFFNUIsU0FBUyxnQkFBQUMscUJBQW9COzs7QUNId08sU0FBUyxvQkFBb0I7QUFDbFMsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU0sYUFBYSxRQUFRLElBQUksZ0JBQWdCO0FBQy9DLElBQU0sVUFBVSxRQUFRLGtDQUFXLEtBQUs7QUFHeEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLElBQ2QsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxJQUNUO0FBQUEsRUFDRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1Asd0JBQXdCLFFBQVEsSUFBSSxXQUFXLElBQUksUUFBUSxJQUFJLFFBQVEsTUFBTTtBQUFBLEVBQzlFO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixhQUFhLENBQUM7QUFBQSxJQUNkLEtBQUs7QUFBQSxNQUNKLE9BQU8sUUFBUSxrQ0FBVyxPQUFPLFVBQVU7QUFBQSxNQUMzQyxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBWSxhQUFhLGVBQWUsTUFBTSxRQUFRLFFBQVEsTUFBTTtBQUFBLElBQ2hGO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtBQUFBLE1BR2QsVUFBVSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUs7QUFBQSxNQUNsQyxRQUFRO0FBQUEsUUFDUCxTQUFTO0FBQUE7QUFBQTtBQUFBLFFBR1QsU0FBUyxhQUNOLENBQUMsSUFDRDtBQUFBLFVBQ0EsS0FBSztBQUFBLFFBQ047QUFBQSxNQUNIO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOzs7QURwREQsSUFBTUMsb0NBQW1DO0FBTXpDLElBQU1DLFdBQVVDLFNBQVFDLG1DQUFXLEtBQUs7QUFDeEMsSUFBTSxlQUFlQyxjQUFhO0FBQUEsRUFDakMsTUFBTTtBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsTUFBTUg7QUFBQSxJQUNOLFlBQVksQ0FBQywwQkFBMEI7QUFBQSxJQUN2QyxHQUFJLFFBQVEsSUFBSSxxQkFBcUIsU0FDbEM7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxRQUNWLFVBQVUsUUFBUSxJQUFJLE9BQU8sU0FBUyxjQUFjO0FBQUEsUUFDcEQsS0FBSztBQUFBLE1BQ047QUFBQSxJQUNBLElBQ0EsQ0FBQztBQUFBLEVBQ0w7QUFDRCxDQUFDO0FBRUQsSUFBTyx3QkFBUTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQ0Q7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAiZGVmaW5lQ29uZmlnIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInNyY1BhdGgiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJkZWZpbmVDb25maWciXQp9Cg==
