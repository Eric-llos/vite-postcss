import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import purgecss from "@fullhuman/postcss-purgecss";
import perfectionist from "perfectionist";
import presetEnv from "postcss-preset-env";
import postcssMixins from "postcss-mixins";

const config = {
  atImport: {
    path: [
      "tailwind.config.js",
      "assets/css/*.css",
      "assets/css/**/*.css",
      "assets/css/",
    ],
  },
  perfectionist: {
    cascade: false,
    indentSize: 2,
    trimLeadingZero: false,
    maxAtRuleLength: false,
    maxSelectorLength: 1,
    maxValueLength: false,
  },
  purgecss: {
    content: [
      "**/*.php",
      "views/**/*.twig",
      "assets/**/*.css",
      "assets/**/*.svg",
      "assets/**/*.js"
    ],
    extractors: [{
      extensions: ["php", "twig", "css", "svg", "js"],
      extractor: function (content) {
        return content.match(/[A-Za-z0-9-_:/]+/g) || [];
      },
    }],
  },
  
};

export default {
  plugins: [
    autoprefixer({ cascade: false }),
    presetEnv({ stage: 0 }),
    postcssImport(config.atImport),
    purgecss(config.purgecss),
    perfectionist(config.perfectionist),
    postcssMixins()
  ]
};
