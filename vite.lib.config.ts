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
        "src/lib",
        "src/app/components/*.tsx",
        "src/app/components/ui/drawer.tsx",
        "src/app/components/ui/use-mobile.ts",
        "src/app/components/ui/utils.ts",
      ],
      exclude: ["src/app/components/**/*Showcase*"],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "DesignSystem",
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
