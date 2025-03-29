import path from "path";
import fs from "fs";
export default {
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
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
  plugins: [
    {
      name: "move-about-html",
      closeBundle: () => {
        const aboutSrc = path.resolve(__dirname, "dist/about.html");
        const aboutDestDir = path.resolve(__dirname, "dist/ourfounder");

        if (fs.existsSync(aboutSrc)) {
          if (!fs.existsSync(aboutDestDir)) {
            fs.mkdirSync(aboutDestDir);
          }
          fs.renameSync(aboutSrc, path.join(aboutDestDir, "index.html"));
        }
      },
    },
  ],
  // base: "/media_prospect", github hosting purpose
  base: "./",
};
