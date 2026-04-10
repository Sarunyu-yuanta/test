import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import pkg from "./package.json" with { type: "json" };

const externalPackages = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
];

const externalRegExp = new RegExp(
  `^(${externalPackages.map((p) => p.replace("/", "\\/")).join("|")})(\\/.+)?$`,
);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: [
        "src/index.ts",
        "src/lib",
        "src/components/*.tsx",
        "src/components/ui/drawer.tsx",
        "src/components/ui/use-mobile.ts",
      ],
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "SystemOne",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: (id) => externalRegExp.test(id),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        assetFileNames: "style[extname]",
      },
    },
    sourcemap: true,
    minify: false,
  },
});
