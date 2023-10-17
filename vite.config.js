import { resolve } from "path";
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? "")) {
            return "assets/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "css/[name]-[hash][extname]";
          }

          // default value
          return "assets/others/[name]-[hash][extname]";
        },
      },
    },
  },
  // base: "/media_prospect", github hosting purpose
  base: './'
};
