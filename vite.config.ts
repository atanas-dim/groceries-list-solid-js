import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

// export default defineConfig({
//   plugins: [solidPlugin()],
//   server: {
//     port: 3000,
//   },
//   build: {
//     target: 'esnext',
//   },
// });

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      API: JSON.stringify("https://jsonplaceholder.typicode.com/posts"),
      APP_ENV: JSON.stringify(env.API_URI),
    },
    plugins: [solidPlugin()],
    server: {
      port: 3000,
    },
    build: {
      target: "esnext",
      polyfillDynamicImport: false,
    },
  };
});
