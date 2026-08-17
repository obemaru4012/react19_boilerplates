import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import app from "./build_target/app.js";

var entries = { ...app };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
      "@img": path.resolve(__dirname, "./img")
    }
  },
  root: "src",
  build: {
    minify: true, // minify設定
    cssCodeSplit: false,
    assetsInlineLimit: 2097152, // 画像のインライン化の閾値（2MB）
    outDir: "../distributions", // ビルドされたjsファイルが格納される場所
    rollupOptions: {
      input: entries, // for build
      output: {
        // ファイル名ハッシュを辞めるオプション
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
});
