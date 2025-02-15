import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";
import parser from "@typescript-eslint/parser";

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with old ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Construct the ESLint config
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Ensures Next.js plugin is detected

  {
    languageOptions: {
      parser: parser,
      ecmaVersion: 2022,
      sourceType: "module",
    },

    plugins: {
      tailwindcss: tailwindcssPlugin,
    },

    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
    },
  },
];

export default eslintConfig;
