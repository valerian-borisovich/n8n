// vite.config.mts
import vue2 from "file:///COD/n8n/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.6_@types+node@18.16.16_sass@1.64.1_terser@5.16.1__vue@3.4.21_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve as resolve2 } from "path";
import { defineConfig as defineConfig2, mergeConfig as mergeConfig2 } from "file:///COD/n8n/node_modules/.pnpm/vite@5.4.6_@types+node@18.16.16_sass@1.64.1_terser@5.16.1/node_modules/vite/dist/node/index.js";
import { sentryVitePlugin } from "file:///COD/n8n/node_modules/.pnpm/@sentry+vite-plugin@2.22.4_encoding@0.1.13/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";

// package.json
var package_default = {
  name: "n8n-editor-ui",
  version: "1.60.0",
  description: "Workflow Editor UI for n8n",
  main: "index.js",
  scripts: {
    clean: "rimraf dist .turbo",
    build: 'cross-env VUE_APP_PUBLIC_PATH="/{{BASE_PATH}}/" NODE_OPTIONS="--max-old-space-size=8192" vite build',
    typecheck: "vue-tsc --noEmit",
    dev: "pnpm serve",
    lint: "eslint src --ext .js,.ts,.vue --quiet",
    lintfix: "eslint src --ext .js,.ts,.vue --fix",
    format: "biome format --write . && prettier --write . --ignore-path ../../.prettierignore",
    "format:check": "biome ci . && prettier --check . --ignore-path ../../.prettierignore",
    serve: "cross-env VUE_APP_URL_BASE_API=http://localhost:5678/ vite --host 0.0.0.0 --port 8080 dev",
    test: "vitest run",
    "test:dev": "vitest"
  },
  dependencies: {
    "@codemirror/autocomplete": "^6.16.0",
    "@codemirror/commands": "^6.5.0",
    "@codemirror/lang-javascript": "^6.2.2",
    "@codemirror/lang-json": "^6.0.1",
    "@codemirror/lang-python": "^6.1.6",
    "@codemirror/language": "^6.10.1",
    "@codemirror/lint": "^6.8.0",
    "@codemirror/state": "^6.4.1",
    "@codemirror/view": "^6.26.3",
    "@fontsource/open-sans": "^4.5.0",
    "@jsplumb/browser-ui": "^5.13.2",
    "@jsplumb/common": "^5.13.2",
    "@jsplumb/connector-bezier": "^5.13.2",
    "@jsplumb/core": "^5.13.2",
    "@jsplumb/util": "^5.13.2",
    "@lezer/common": "^1.0.4",
    "@n8n/api-types": "workspace:*",
    "@n8n/chat": "workspace:*",
    "@n8n/codemirror-lang": "workspace:*",
    "@n8n/codemirror-lang-sql": "^1.0.2",
    "@n8n/permissions": "workspace:*",
    "@sentry/vue": "^8.31.0",
    "@vue-flow/background": "^1.3.0",
    "@vue-flow/controls": "^1.1.1",
    "@vue-flow/core": "^1.33.5",
    "@vue-flow/minimap": "^1.4.0",
    "@vue-flow/node-resizer": "^1.4.0",
    "@vueuse/components": "^10.11.0",
    "@vueuse/core": "^10.11.0",
    axios: "catalog:",
    bowser: "2.11.0",
    "chart.js": "^4.4.0",
    "codemirror-lang-html-n8n": "^1.0.0",
    dateformat: "^3.0.3",
    "email-providers": "^2.0.1",
    "esprima-next": "5.8.4",
    "fast-json-stable-stringify": "^2.1.0",
    "file-saver": "^2.0.2",
    flatted: "^3.2.4",
    "highlight.js": "catalog:frontend",
    "humanize-duration": "^3.27.2",
    jsonpath: "^1.1.1",
    "lodash-es": "^4.17.21",
    luxon: "catalog:",
    "n8n-design-system": "workspace:*",
    "n8n-workflow": "workspace:*",
    pinia: "^2.1.6",
    prettier: "^3.3.3",
    "qrcode.vue": "^3.3.4",
    "stream-browserify": "^3.0.0",
    "timeago.js": "^4.0.2",
    uuid: "catalog:",
    "v3-infinite-loading": "^1.2.2",
    vue: "catalog:frontend",
    "vue-agile": "^2.0.0",
    "vue-chartjs": "^5.2.0",
    "vue-i18n": "^9.2.2",
    "vue-json-pretty": "2.2.4",
    "vue-markdown-render": "catalog:frontend",
    "vue-router": "catalog:frontend",
    "vue3-touch-events": "^4.1.3",
    xss: "catalog:"
  },
  devDependencies: {
    "@faker-js/faker": "^8.0.2",
    "@iconify/json": "^2.2.228",
    "@pinia/testing": "^0.1.3",
    "@sentry/vite-plugin": "^2.22.4",
    "@types/dateformat": "^3.0.0",
    "@types/file-saver": "^2.0.1",
    "@types/humanize-duration": "^3.27.1",
    "@types/jsonpath": "^0.2.0",
    "@types/lodash-es": "^4.17.6",
    "@types/luxon": "^3.2.0",
    "@types/uuid": "catalog:",
    "@vitest/coverage-v8": "catalog:frontend",
    "cross-env": "^7.0.3",
    miragejs: "^0.1.48",
    "unplugin-icons": "^0.19.0",
    "unplugin-vue-components": "^0.27.2",
    vite: "catalog:frontend",
    vitest: "catalog:frontend",
    "vitest-mock-extended": "catalog:frontend",
    "vue-tsc": "catalog:frontend"
  },
  peerDependencies: {
    "@fortawesome/fontawesome-svg-core": "*",
    "@fortawesome/free-regular-svg-icons": "*",
    "@fortawesome/free-solid-svg-icons": "*",
    "@fortawesome/vue-fontawesome": "*"
  }
};

// ../design-system/vite.config.mts
import vue from "file:///COD/n8n/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.6_@types+node@18.16.16_sass@1.64.1_terser@5.16.1__vue@3.4.21_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { defineConfig, mergeConfig } from "file:///COD/n8n/node_modules/.pnpm/vite@5.4.6_@types+node@18.16.16_sass@1.64.1_terser@5.16.1/node_modules/vite/dist/node/index.js";
import { defineConfig as defineVitestConfig } from "file:///COD/n8n/node_modules/.pnpm/vitest@2.1.1_@types+node@18.16.16_jsdom@23.0.1_sass@1.64.1_terser@5.16.1/node_modules/vitest/dist/config.js";
import components from "file:///COD/n8n/node_modules/.pnpm/unplugin-vue-components@0.27.3_@babel+parser@7.25.6_rollup@4.22.2_vue@3.4.21_typescript@5.6.2_/node_modules/unplugin-vue-components/dist/vite.js";
import icons from "file:///COD/n8n/node_modules/.pnpm/unplugin-icons@0.19.0_@vue+compiler-sfc@3.4.21_vue-template-compiler@2.7.14/node_modules/unplugin-icons/dist/vite.js";
import iconsResolver from "file:///COD/n8n/node_modules/.pnpm/unplugin-icons@0.19.0_@vue+compiler-sfc@3.4.21_vue-template-compiler@2.7.14/node_modules/unplugin-icons/dist/resolver.js";
var __vite_injected_original_dirname = "/COD/n8n/packages/design-system";
var vitestConfig = defineVitestConfig({
  test: {
    silent: true,
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/__tests__/setup.ts"],
    ...process.env.COVERAGE_ENABLED === "true" ? {
      coverage: {
        enabled: true,
        provider: "v8",
        reporter: process.env.CI === "true" ? "cobertura" : "text-summary",
        all: true
      }
    } : {},
    css: {
      modules: {
        classNameStrategy: "non-scoped"
      }
    }
  }
});
var vite_config_default = mergeConfig(
  defineConfig({
    plugins: [
      vue(),
      icons({
        compiler: "vue3",
        autoInstall: true
      }),
      components({
        dirs: [],
        dts: false,
        resolvers: [
          iconsResolver({
            prefix: "icon"
          })
        ]
      })
    ],
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src"),
        "n8n-design-system": resolve(__vite_injected_original_dirname, "src"),
        lodash: "lodash-es"
      }
    },
    build: {
      lib: {
        entry: resolve(__vite_injected_original_dirname, "src", "main.ts"),
        name: "N8nDesignSystem",
        fileName: (format) => `n8n-design-system.${format}.js`
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ["vue"],
        output: {
          exports: "named",
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: "Vue"
          }
        }
      }
    }
  }),
  vitestConfig
);

// vite.config.mts
import icons2 from "file:///COD/n8n/node_modules/.pnpm/unplugin-icons@0.19.0_@vue+compiler-sfc@3.4.21_vue-template-compiler@2.7.14/node_modules/unplugin-icons/dist/vite.js";
import iconsResolver2 from "file:///COD/n8n/node_modules/.pnpm/unplugin-icons@0.19.0_@vue+compiler-sfc@3.4.21_vue-template-compiler@2.7.14/node_modules/unplugin-icons/dist/resolver.js";
import components2 from "file:///COD/n8n/node_modules/.pnpm/unplugin-vue-components@0.27.3_@babel+parser@7.25.6_rollup@4.22.2_vue@3.4.21_typescript@5.6.2_/node_modules/unplugin-vue-components/dist/vite.js";
var __vite_injected_original_dirname2 = "/COD/n8n/packages/editor-ui";
var vendorChunks = ["vue", "vue-router"];
var n8nChunks = ["n8n-workflow", "n8n-design-system", "@n8n/chat"];
var ignoreChunks = [
  "@fontsource/open-sans",
  "@vueuse/components",
  // TODO: remove this. It's currently required by xml2js in NodeErrors
  "stream-browserify",
  "vue-markdown-render"
];
var isScopedPackageToIgnore = (str) => /@codemirror\//.test(str);
function renderChunks() {
  const { dependencies } = package_default;
  const chunks = {};
  Object.keys(dependencies).forEach((key) => {
    if ([...vendorChunks, ...n8nChunks, ...ignoreChunks].includes(key)) {
      return;
    }
    if (isScopedPackageToIgnore(key))
      return;
    chunks[key] = [key];
  });
  return chunks;
}
var publicPath = process.env.VUE_APP_PUBLIC_PATH || "/";
var { NODE_ENV } = process.env;
var alias = [
  { find: "@", replacement: resolve2(__vite_injected_original_dirname2, "src") },
  { find: "stream", replacement: "stream-browserify" },
  {
    find: /^n8n-design-system$/,
    replacement: resolve2(__vite_injected_original_dirname2, "..", "design-system", "src", "main.ts")
  },
  {
    find: /^n8n-design-system\//,
    replacement: resolve2(__vite_injected_original_dirname2, "..", "design-system", "src") + "/"
  },
  {
    find: /^@n8n\/chat$/,
    replacement: resolve2(__vite_injected_original_dirname2, "..", "@n8n", "chat", "src", "index.ts")
  },
  {
    find: /^@n8n\/chat\//,
    replacement: resolve2(__vite_injected_original_dirname2, "..", "@n8n", "chat", "src") + "/"
  },
  ...["orderBy", "camelCase", "cloneDeep", "startCase"].map((name) => ({
    find: new RegExp(`^lodash.${name}$`, "i"),
    replacement: `lodash-es/${name}`
  })),
  {
    find: /^lodash\.(.+)$/,
    replacement: "lodash-es/$1"
  }
];
var plugins = [
  icons2({
    compiler: "vue3",
    autoInstall: true
  }),
  components2({
    dts: "./src/components.d.ts",
    resolvers: [
      iconsResolver2({
        prefix: "icon"
      })
    ]
  }),
  vue2()
];
var { SENTRY_AUTH_TOKEN: authToken, RELEASE: release } = process.env;
if (release && authToken) {
  plugins.push(
    sentryVitePlugin({
      org: "n8nio",
      project: "instance-frontend",
      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and needs the `project:releases` and `org:read` scopes
      authToken,
      telemetry: false,
      release: {
        name: release
      }
    })
  );
}
var vite_config_default2 = mergeConfig2(
  defineConfig2({
    define: {
      // This causes test to fail but is required for actually running it
      // ...(NODE_ENV !== 'test' ? { 'global': 'globalThis' } : {}),
      ...NODE_ENV === "development" ? { "process.env": {} } : {},
      BASE_PATH: `'${publicPath}'`
    },
    plugins,
    resolve: { alias },
    base: publicPath,
    envPrefix: "VUE_APP",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '\n@use "@/n8n-theme-variables.scss" as *;\n'
        }
      }
    },
    build: {
      assetsInlineLimit: 0,
      minify: !!release,
      sourcemap: !!release,
      rollupOptions: {
        treeshake: !!release,
        output: {
          manualChunks: {
            vendor: vendorChunks,
            n8n: n8nChunks,
            ...renderChunks()
          }
        }
      }
    }
  }),
  vitestConfig
);
export {
  vite_config_default2 as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInBhY2thZ2UuanNvbiIsICIuLi9kZXNpZ24tc3lzdGVtL3ZpdGUuY29uZmlnLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9DT0QvbjhuL3BhY2thZ2VzL2VkaXRvci11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL0NPRC9uOG4vcGFja2FnZXMvZWRpdG9yLXVpL3ZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQ09EL244bi9wYWNrYWdlcy9lZGl0b3ItdWkvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBtZXJnZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgc2VudHJ5Vml0ZVBsdWdpbiB9IGZyb20gJ0BzZW50cnkvdml0ZS1wbHVnaW4nO1xuXG5pbXBvcnQgcGFja2FnZUpTT04gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgdml0ZXN0Q29uZmlnIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS92aXRlLmNvbmZpZy5tdHMnO1xuaW1wb3J0IGljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xuaW1wb3J0IGljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInO1xuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5cbmNvbnN0IHZlbmRvckNodW5rcyA9IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXTtcbmNvbnN0IG44bkNodW5rcyA9IFsnbjhuLXdvcmtmbG93JywgJ244bi1kZXNpZ24tc3lzdGVtJywgJ0BuOG4vY2hhdCddO1xuY29uc3QgaWdub3JlQ2h1bmtzID0gW1xuXHQnQGZvbnRzb3VyY2Uvb3Blbi1zYW5zJyxcblx0J0B2dWV1c2UvY29tcG9uZW50cycsXG5cdC8vIFRPRE86IHJlbW92ZSB0aGlzLiBJdCdzIGN1cnJlbnRseSByZXF1aXJlZCBieSB4bWwyanMgaW4gTm9kZUVycm9yc1xuXHQnc3RyZWFtLWJyb3dzZXJpZnknLFxuXHQndnVlLW1hcmtkb3duLXJlbmRlcicsXG5dO1xuXG5jb25zdCBpc1Njb3BlZFBhY2thZ2VUb0lnbm9yZSA9IChzdHI6IHN0cmluZykgPT4gL0Bjb2RlbWlycm9yXFwvLy50ZXN0KHN0cik7XG5cbmZ1bmN0aW9uIHJlbmRlckNodW5rcygpIHtcblx0Y29uc3QgeyBkZXBlbmRlbmNpZXMgfSA9IHBhY2thZ2VKU09OO1xuXHRjb25zdCBjaHVua3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0aWYgKFsuLi52ZW5kb3JDaHVua3MsIC4uLm44bkNodW5rcywgLi4uaWdub3JlQ2h1bmtzXS5pbmNsdWRlcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGlzU2NvcGVkUGFja2FnZVRvSWdub3JlKGtleSkpIHJldHVybjtcblxuXHRcdGNodW5rc1trZXldID0gW2tleV07XG5cdH0pO1xuXG5cdHJldHVybiBjaHVua3M7XG59XG5cbmNvbnN0IHB1YmxpY1BhdGggPSBwcm9jZXNzLmVudi5WVUVfQVBQX1BVQkxJQ19QQVRIIHx8ICcvJztcblxuY29uc3QgeyBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnY7XG5cbmNvbnN0IGFsaWFzID0gW1xuXHR7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJykgfSxcblx0eyBmaW5kOiAnc3RyZWFtJywgcmVwbGFjZW1lbnQ6ICdzdHJlYW0tYnJvd3NlcmlmeScgfSxcblx0e1xuXHRcdGZpbmQ6IC9ebjhuLWRlc2lnbi1zeXN0ZW0kLyxcblx0XHRyZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICdkZXNpZ24tc3lzdGVtJywgJ3NyYycsICdtYWluLnRzJyksXG5cdH0sXG5cdHtcblx0XHRmaW5kOiAvXm44bi1kZXNpZ24tc3lzdGVtXFwvLyxcblx0XHRyZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICdkZXNpZ24tc3lzdGVtJywgJ3NyYycpICsgJy8nLFxuXHR9LFxuXHR7XG5cdFx0ZmluZDogL15AbjhuXFwvY2hhdCQvLFxuXHRcdHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ0BuOG4nLCAnY2hhdCcsICdzcmMnLCAnaW5kZXgudHMnKSxcblx0fSxcblx0e1xuXHRcdGZpbmQ6IC9eQG44blxcL2NoYXRcXC8vLFxuXHRcdHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ0BuOG4nLCAnY2hhdCcsICdzcmMnKSArICcvJyxcblx0fSxcblx0Li4uWydvcmRlckJ5JywgJ2NhbWVsQ2FzZScsICdjbG9uZURlZXAnLCAnc3RhcnRDYXNlJ10ubWFwKChuYW1lKSA9PiAoe1xuXHRcdGZpbmQ6IG5ldyBSZWdFeHAoYF5sb2Rhc2guJHtuYW1lfSRgLCAnaScpLFxuXHRcdHJlcGxhY2VtZW50OiBgbG9kYXNoLWVzLyR7bmFtZX1gLFxuXHR9KSksXG5cdHtcblx0XHRmaW5kOiAvXmxvZGFzaFxcLiguKykkLyxcblx0XHRyZXBsYWNlbWVudDogJ2xvZGFzaC1lcy8kMScsXG5cdH0sXG5dO1xuXG5jb25zdCBwbHVnaW5zID0gW1xuXHRpY29ucyh7XG5cdFx0Y29tcGlsZXI6ICd2dWUzJyxcblx0XHRhdXRvSW5zdGFsbDogdHJ1ZSxcblx0fSksXG5cdGNvbXBvbmVudHMoe1xuXHRcdGR0czogJy4vc3JjL2NvbXBvbmVudHMuZC50cycsXG5cdFx0cmVzb2x2ZXJzOiBbXG5cdFx0XHRpY29uc1Jlc29sdmVyKHtcblx0XHRcdFx0cHJlZml4OiAnaWNvbicsXG5cdFx0XHR9KSxcblx0XHRdLFxuXHR9KSxcblx0dnVlKCksXG5dO1xuXG5jb25zdCB7IFNFTlRSWV9BVVRIX1RPS0VOOiBhdXRoVG9rZW4sIFJFTEVBU0U6IHJlbGVhc2UgfSA9IHByb2Nlc3MuZW52O1xuaWYgKHJlbGVhc2UgJiYgYXV0aFRva2VuKSB7XG5cdHBsdWdpbnMucHVzaChcblx0XHRzZW50cnlWaXRlUGx1Z2luKHtcblx0XHRcdG9yZzogJ244bmlvJyxcblx0XHRcdHByb2plY3Q6ICdpbnN0YW5jZS1mcm9udGVuZCcsXG5cdFx0XHQvLyBBdXRoIHRva2VucyBjYW4gYmUgb2J0YWluZWQgZnJvbSBodHRwczovL3NlbnRyeS5pby9zZXR0aW5ncy9hY2NvdW50L2FwaS9hdXRoLXRva2Vucy9cblx0XHRcdC8vIGFuZCBuZWVkcyB0aGUgYHByb2plY3Q6cmVsZWFzZXNgIGFuZCBgb3JnOnJlYWRgIHNjb3Blc1xuXHRcdFx0YXV0aFRva2VuLFxuXHRcdFx0dGVsZW1ldHJ5OiBmYWxzZSxcblx0XHRcdHJlbGVhc2U6IHtcblx0XHRcdFx0bmFtZTogcmVsZWFzZSxcblx0XHRcdH0sXG5cdFx0fSksXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxuXHRkZWZpbmVDb25maWcoe1xuXHRcdGRlZmluZToge1xuXHRcdFx0Ly8gVGhpcyBjYXVzZXMgdGVzdCB0byBmYWlsIGJ1dCBpcyByZXF1aXJlZCBmb3IgYWN0dWFsbHkgcnVubmluZyBpdFxuXHRcdFx0Ly8gLi4uKE5PREVfRU5WICE9PSAndGVzdCcgPyB7ICdnbG9iYWwnOiAnZ2xvYmFsVGhpcycgfSA6IHt9KSxcblx0XHRcdC4uLihOT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHsgJ3Byb2Nlc3MuZW52Jzoge30gfSA6IHt9KSxcblx0XHRcdEJBU0VfUEFUSDogYCcke3B1YmxpY1BhdGh9J2AsXG5cdFx0fSxcblx0XHRwbHVnaW5zLFxuXHRcdHJlc29sdmU6IHsgYWxpYXMgfSxcblx0XHRiYXNlOiBwdWJsaWNQYXRoLFxuXHRcdGVudlByZWZpeDogJ1ZVRV9BUFAnLFxuXHRcdGNzczoge1xuXHRcdFx0cHJlcHJvY2Vzc29yT3B0aW9uczoge1xuXHRcdFx0XHRzY3NzOiB7XG5cdFx0XHRcdFx0YWRkaXRpb25hbERhdGE6ICdcXG5AdXNlIFwiQC9uOG4tdGhlbWUtdmFyaWFibGVzLnNjc3NcIiBhcyAqO1xcbicsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0YnVpbGQ6IHtcblx0XHRcdGFzc2V0c0lubGluZUxpbWl0OiAwLFxuXHRcdFx0bWluaWZ5OiAhIXJlbGVhc2UsXG5cdFx0XHRzb3VyY2VtYXA6ICEhcmVsZWFzZSxcblx0XHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdFx0dHJlZXNoYWtlOiAhIXJlbGVhc2UsXG5cdFx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRcdG1hbnVhbENodW5rczoge1xuXHRcdFx0XHRcdFx0dmVuZG9yOiB2ZW5kb3JDaHVua3MsXG5cdFx0XHRcdFx0XHRuOG46IG44bkNodW5rcyxcblx0XHRcdFx0XHRcdC4uLnJlbmRlckNodW5rcygpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pLFxuXHR2aXRlc3RDb25maWcsXG4pO1xuIiwgIntcbiAgXCJuYW1lXCI6IFwibjhuLWVkaXRvci11aVwiLFxuICBcInZlcnNpb25cIjogXCIxLjYwLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldvcmtmbG93IEVkaXRvciBVSSBmb3IgbjhuXCIsXG4gIFwibWFpblwiOiBcImluZGV4LmpzXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJjbGVhblwiOiBcInJpbXJhZiBkaXN0IC50dXJib1wiLFxuICAgIFwiYnVpbGRcIjogXCJjcm9zcy1lbnYgVlVFX0FQUF9QVUJMSUNfUEFUSD1cXFwiL3t7QkFTRV9QQVRIfX0vXFxcIiBOT0RFX09QVElPTlM9XFxcIi0tbWF4LW9sZC1zcGFjZS1zaXplPTgxOTJcXFwiIHZpdGUgYnVpbGRcIixcbiAgICBcInR5cGVjaGVja1wiOiBcInZ1ZS10c2MgLS1ub0VtaXRcIixcbiAgICBcImRldlwiOiBcInBucG0gc2VydmVcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgc3JjIC0tZXh0IC5qcywudHMsLnZ1ZSAtLXF1aWV0XCIsXG4gICAgXCJsaW50Zml4XCI6IFwiZXNsaW50IHNyYyAtLWV4dCAuanMsLnRzLC52dWUgLS1maXhcIixcbiAgICBcImZvcm1hdFwiOiBcImJpb21lIGZvcm1hdCAtLXdyaXRlIC4gJiYgcHJldHRpZXIgLS13cml0ZSAuIC0taWdub3JlLXBhdGggLi4vLi4vLnByZXR0aWVyaWdub3JlXCIsXG4gICAgXCJmb3JtYXQ6Y2hlY2tcIjogXCJiaW9tZSBjaSAuICYmIHByZXR0aWVyIC0tY2hlY2sgLiAtLWlnbm9yZS1wYXRoIC4uLy4uLy5wcmV0dGllcmlnbm9yZVwiLFxuICAgIFwic2VydmVcIjogXCJjcm9zcy1lbnYgVlVFX0FQUF9VUkxfQkFTRV9BUEk9aHR0cDovL2xvY2FsaG9zdDo1Njc4LyB2aXRlIC0taG9zdCAwLjAuMC4wIC0tcG9ydCA4MDgwIGRldlwiLFxuICAgIFwidGVzdFwiOiBcInZpdGVzdCBydW5cIixcbiAgICBcInRlc3Q6ZGV2XCI6IFwidml0ZXN0XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNvZGVtaXJyb3IvYXV0b2NvbXBsZXRlXCI6IFwiXjYuMTYuMFwiLFxuICAgIFwiQGNvZGVtaXJyb3IvY29tbWFuZHNcIjogXCJeNi41LjBcIixcbiAgICBcIkBjb2RlbWlycm9yL2xhbmctamF2YXNjcmlwdFwiOiBcIl42LjIuMlwiLFxuICAgIFwiQGNvZGVtaXJyb3IvbGFuZy1qc29uXCI6IFwiXjYuMC4xXCIsXG4gICAgXCJAY29kZW1pcnJvci9sYW5nLXB5dGhvblwiOiBcIl42LjEuNlwiLFxuICAgIFwiQGNvZGVtaXJyb3IvbGFuZ3VhZ2VcIjogXCJeNi4xMC4xXCIsXG4gICAgXCJAY29kZW1pcnJvci9saW50XCI6IFwiXjYuOC4wXCIsXG4gICAgXCJAY29kZW1pcnJvci9zdGF0ZVwiOiBcIl42LjQuMVwiLFxuICAgIFwiQGNvZGVtaXJyb3Ivdmlld1wiOiBcIl42LjI2LjNcIixcbiAgICBcIkBmb250c291cmNlL29wZW4tc2Fuc1wiOiBcIl40LjUuMFwiLFxuICAgIFwiQGpzcGx1bWIvYnJvd3Nlci11aVwiOiBcIl41LjEzLjJcIixcbiAgICBcIkBqc3BsdW1iL2NvbW1vblwiOiBcIl41LjEzLjJcIixcbiAgICBcIkBqc3BsdW1iL2Nvbm5lY3Rvci1iZXppZXJcIjogXCJeNS4xMy4yXCIsXG4gICAgXCJAanNwbHVtYi9jb3JlXCI6IFwiXjUuMTMuMlwiLFxuICAgIFwiQGpzcGx1bWIvdXRpbFwiOiBcIl41LjEzLjJcIixcbiAgICBcIkBsZXplci9jb21tb25cIjogXCJeMS4wLjRcIixcbiAgICBcIkBuOG4vYXBpLXR5cGVzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBuOG4vY2hhdFwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAbjhuL2NvZGVtaXJyb3ItbGFuZ1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAbjhuL2NvZGVtaXJyb3ItbGFuZy1zcWxcIjogXCJeMS4wLjJcIixcbiAgICBcIkBuOG4vcGVybWlzc2lvbnNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHNlbnRyeS92dWVcIjogXCJeOC4zMS4wXCIsXG4gICAgXCJAdnVlLWZsb3cvYmFja2dyb3VuZFwiOiBcIl4xLjMuMFwiLFxuICAgIFwiQHZ1ZS1mbG93L2NvbnRyb2xzXCI6IFwiXjEuMS4xXCIsXG4gICAgXCJAdnVlLWZsb3cvY29yZVwiOiBcIl4xLjMzLjVcIixcbiAgICBcIkB2dWUtZmxvdy9taW5pbWFwXCI6IFwiXjEuNC4wXCIsXG4gICAgXCJAdnVlLWZsb3cvbm9kZS1yZXNpemVyXCI6IFwiXjEuNC4wXCIsXG4gICAgXCJAdnVldXNlL2NvbXBvbmVudHNcIjogXCJeMTAuMTEuMFwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEwLjExLjBcIixcbiAgICBcImF4aW9zXCI6IFwiY2F0YWxvZzpcIixcbiAgICBcImJvd3NlclwiOiBcIjIuMTEuMFwiLFxuICAgIFwiY2hhcnQuanNcIjogXCJeNC40LjBcIixcbiAgICBcImNvZGVtaXJyb3ItbGFuZy1odG1sLW44blwiOiBcIl4xLjAuMFwiLFxuICAgIFwiZGF0ZWZvcm1hdFwiOiBcIl4zLjAuM1wiLFxuICAgIFwiZW1haWwtcHJvdmlkZXJzXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJlc3ByaW1hLW5leHRcIjogXCI1LjguNFwiLFxuICAgIFwiZmFzdC1qc29uLXN0YWJsZS1zdHJpbmdpZnlcIjogXCJeMi4xLjBcIixcbiAgICBcImZpbGUtc2F2ZXJcIjogXCJeMi4wLjJcIixcbiAgICBcImZsYXR0ZWRcIjogXCJeMy4yLjRcIixcbiAgICBcImhpZ2hsaWdodC5qc1wiOiBcImNhdGFsb2c6ZnJvbnRlbmRcIixcbiAgICBcImh1bWFuaXplLWR1cmF0aW9uXCI6IFwiXjMuMjcuMlwiLFxuICAgIFwianNvbnBhdGhcIjogXCJeMS4xLjFcIixcbiAgICBcImxvZGFzaC1lc1wiOiBcIl40LjE3LjIxXCIsXG4gICAgXCJsdXhvblwiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJuOG4tZGVzaWduLXN5c3RlbVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJuOG4td29ya2Zsb3dcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwicGluaWFcIjogXCJeMi4xLjZcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4zXCIsXG4gICAgXCJxcmNvZGUudnVlXCI6IFwiXjMuMy40XCIsXG4gICAgXCJzdHJlYW0tYnJvd3NlcmlmeVwiOiBcIl4zLjAuMFwiLFxuICAgIFwidGltZWFnby5qc1wiOiBcIl40LjAuMlwiLFxuICAgIFwidXVpZFwiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJ2My1pbmZpbml0ZS1sb2FkaW5nXCI6IFwiXjEuMi4yXCIsXG4gICAgXCJ2dWVcIjogXCJjYXRhbG9nOmZyb250ZW5kXCIsXG4gICAgXCJ2dWUtYWdpbGVcIjogXCJeMi4wLjBcIixcbiAgICBcInZ1ZS1jaGFydGpzXCI6IFwiXjUuMi4wXCIsXG4gICAgXCJ2dWUtaTE4blwiOiBcIl45LjIuMlwiLFxuICAgIFwidnVlLWpzb24tcHJldHR5XCI6IFwiMi4yLjRcIixcbiAgICBcInZ1ZS1tYXJrZG93bi1yZW5kZXJcIjogXCJjYXRhbG9nOmZyb250ZW5kXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiY2F0YWxvZzpmcm9udGVuZFwiLFxuICAgIFwidnVlMy10b3VjaC1ldmVudHNcIjogXCJeNC4xLjNcIixcbiAgICBcInhzc1wiOiBcImNhdGFsb2c6XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGZha2VyLWpzL2Zha2VyXCI6IFwiXjguMC4yXCIsXG4gICAgXCJAaWNvbmlmeS9qc29uXCI6IFwiXjIuMi4yMjhcIixcbiAgICBcIkBwaW5pYS90ZXN0aW5nXCI6IFwiXjAuMS4zXCIsXG4gICAgXCJAc2VudHJ5L3ZpdGUtcGx1Z2luXCI6IFwiXjIuMjIuNFwiLFxuICAgIFwiQHR5cGVzL2RhdGVmb3JtYXRcIjogXCJeMy4wLjBcIixcbiAgICBcIkB0eXBlcy9maWxlLXNhdmVyXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJAdHlwZXMvaHVtYW5pemUtZHVyYXRpb25cIjogXCJeMy4yNy4xXCIsXG4gICAgXCJAdHlwZXMvanNvbnBhdGhcIjogXCJeMC4yLjBcIixcbiAgICBcIkB0eXBlcy9sb2Rhc2gtZXNcIjogXCJeNC4xNy42XCIsXG4gICAgXCJAdHlwZXMvbHV4b25cIjogXCJeMy4yLjBcIixcbiAgICBcIkB0eXBlcy91dWlkXCI6IFwiY2F0YWxvZzpcIixcbiAgICBcIkB2aXRlc3QvY292ZXJhZ2UtdjhcIjogXCJjYXRhbG9nOmZyb250ZW5kXCIsXG4gICAgXCJjcm9zcy1lbnZcIjogXCJeNy4wLjNcIixcbiAgICBcIm1pcmFnZWpzXCI6IFwiXjAuMS40OFwiLFxuICAgIFwidW5wbHVnaW4taWNvbnNcIjogXCJeMC4xOS4wXCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI3LjJcIixcbiAgICBcInZpdGVcIjogXCJjYXRhbG9nOmZyb250ZW5kXCIsXG4gICAgXCJ2aXRlc3RcIjogXCJjYXRhbG9nOmZyb250ZW5kXCIsXG4gICAgXCJ2aXRlc3QtbW9jay1leHRlbmRlZFwiOiBcImNhdGFsb2c6ZnJvbnRlbmRcIixcbiAgICBcInZ1ZS10c2NcIjogXCJjYXRhbG9nOmZyb250ZW5kXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiOiBcIipcIixcbiAgICBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI6IFwiKlwiLFxuICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI6IFwiKlwiLFxuICAgIFwiQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZVwiOiBcIipcIlxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9DT0QvbjhuL3BhY2thZ2VzL2Rlc2lnbi1zeXN0ZW1cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9DT0QvbjhuL3BhY2thZ2VzL2Rlc2lnbi1zeXN0ZW0vdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DT0QvbjhuL3BhY2thZ2VzL2Rlc2lnbi1zeXN0ZW0vdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBtZXJnZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgdHlwZSBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZXN0JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyBhcyBkZWZpbmVWaXRlc3RDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IGljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xuaW1wb3J0IGljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInO1xuXG5leHBvcnQgY29uc3Qgdml0ZXN0Q29uZmlnID0gZGVmaW5lVml0ZXN0Q29uZmlnKHtcblx0dGVzdDoge1xuXHRcdHNpbGVudDogdHJ1ZSxcblx0XHRnbG9iYWxzOiB0cnVlLFxuXHRcdGVudmlyb25tZW50OiAnanNkb20nLFxuXHRcdHNldHVwRmlsZXM6IFsnLi9zcmMvX190ZXN0c19fL3NldHVwLnRzJ10sXG5cdFx0Li4uKHByb2Nlc3MuZW52LkNPVkVSQUdFX0VOQUJMRUQgPT09ICd0cnVlJ1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0Y292ZXJhZ2U6IHtcblx0XHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRwcm92aWRlcjogJ3Y4Jyxcblx0XHRcdFx0XHRcdHJlcG9ydGVyOiBwcm9jZXNzLmVudi5DSSA9PT0gJ3RydWUnID8gJ2NvYmVydHVyYScgOiAndGV4dC1zdW1tYXJ5Jyxcblx0XHRcdFx0XHRcdGFsbDogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHQ6IHt9KSxcblx0XHRjc3M6IHtcblx0XHRcdG1vZHVsZXM6IHtcblx0XHRcdFx0Y2xhc3NOYW1lU3RyYXRlZ3k6ICdub24tc2NvcGVkJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pIGFzIFVzZXJDb25maWc7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxuXHRkZWZpbmVDb25maWcoe1xuXHRcdHBsdWdpbnM6IFtcblx0XHRcdHZ1ZSgpLFxuXHRcdFx0aWNvbnMoe1xuXHRcdFx0XHRjb21waWxlcjogJ3Z1ZTMnLFxuXHRcdFx0XHRhdXRvSW5zdGFsbDogdHJ1ZSxcblx0XHRcdH0pLFxuXHRcdFx0Y29tcG9uZW50cyh7XG5cdFx0XHRcdGRpcnM6IFtdLFxuXHRcdFx0XHRkdHM6IGZhbHNlLFxuXHRcdFx0XHRyZXNvbHZlcnM6IFtcblx0XHRcdFx0XHRpY29uc1Jlc29sdmVyKHtcblx0XHRcdFx0XHRcdHByZWZpeDogJ2ljb24nLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSksXG5cdFx0XSxcblx0XHRyZXNvbHZlOiB7XG5cdFx0XHRhbGlhczoge1xuXHRcdFx0XHQnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG5cdFx0XHRcdCduOG4tZGVzaWduLXN5c3RlbSc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG5cdFx0XHRcdGxvZGFzaDogJ2xvZGFzaC1lcycsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0YnVpbGQ6IHtcblx0XHRcdGxpYjoge1xuXHRcdFx0XHRlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnLCAnbWFpbi50cycpLFxuXHRcdFx0XHRuYW1lOiAnTjhuRGVzaWduU3lzdGVtJyxcblx0XHRcdFx0ZmlsZU5hbWU6IChmb3JtYXQpID0+IGBuOG4tZGVzaWduLXN5c3RlbS4ke2Zvcm1hdH0uanNgLFxuXHRcdFx0fSxcblx0XHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdFx0Ly8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZFxuXHRcdFx0XHQvLyBpbnRvIHlvdXIgbGlicmFyeVxuXHRcdFx0XHRleHRlcm5hbDogWyd2dWUnXSxcblx0XHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdFx0ZXhwb3J0czogJ25hbWVkJyxcblx0XHRcdFx0XHQvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGRcblx0XHRcdFx0XHQvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcblx0XHRcdFx0XHRnbG9iYWxzOiB7XG5cdFx0XHRcdFx0XHR2dWU6ICdWdWUnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pLFxuXHR2aXRlc3RDb25maWcsXG4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUSxPQUFPQSxVQUFTO0FBQ3JSLFNBQVMsV0FBQUMsZ0JBQWU7QUFDeEIsU0FBUyxnQkFBQUMsZUFBYyxlQUFBQyxvQkFBbUI7QUFDMUMsU0FBUyx3QkFBd0I7OztBQ0hqQztBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLElBQ1QsT0FBUztBQUFBLElBQ1QsT0FBUztBQUFBLElBQ1QsV0FBYTtBQUFBLElBQ2IsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsUUFBVTtBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsSUFDaEIsT0FBUztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLGNBQWdCO0FBQUEsSUFDZCw0QkFBNEI7QUFBQSxJQUM1Qix3QkFBd0I7QUFBQSxJQUN4QiwrQkFBK0I7QUFBQSxJQUMvQix5QkFBeUI7QUFBQSxJQUN6QiwyQkFBMkI7QUFBQSxJQUMzQix3QkFBd0I7QUFBQSxJQUN4QixvQkFBb0I7QUFBQSxJQUNwQixxQkFBcUI7QUFBQSxJQUNyQixvQkFBb0I7QUFBQSxJQUNwQix5QkFBeUI7QUFBQSxJQUN6Qix1QkFBdUI7QUFBQSxJQUN2QixtQkFBbUI7QUFBQSxJQUNuQiw2QkFBNkI7QUFBQSxJQUM3QixpQkFBaUI7QUFBQSxJQUNqQixpQkFBaUI7QUFBQSxJQUNqQixpQkFBaUI7QUFBQSxJ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RDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ04sbUJBQW1CO0FBQUEsTUFDbkIsUUFBUSxDQUFDLENBQUM7QUFBQSxNQUNWLFdBQVcsQ0FBQyxDQUFDO0FBQUEsTUFDYixlQUFlO0FBQUEsUUFDZCxXQUFXLENBQUMsQ0FBQztBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ1AsY0FBYztBQUFBLFlBQ2IsUUFBUTtBQUFBLFlBQ1IsS0FBSztBQUFBLFlBQ0wsR0FBRyxhQUFhO0FBQUEsVUFDakI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUM7QUFBQSxFQUNEO0FBQ0Q7IiwKICAibmFtZXMiOiBbInZ1ZSIsICJyZXNvbHZlIiwgImRlZmluZUNvbmZpZyIsICJtZXJnZUNvbmZpZyIsICJpY29ucyIsICJpY29uc1Jlc29sdmVyIiwgImNvbXBvbmVudHMiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJpY29ucyIsICJjb21wb25lbnRzIiwgImljb25zUmVzb2x2ZXIiLCAidnVlIiwgInZpdGVfY29uZmlnX2RlZmF1bHQiLCAibWVyZ2VDb25maWciLCAiZGVmaW5lQ29uZmlnIl0KfQo=
