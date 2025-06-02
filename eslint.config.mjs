import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tanstackQuery from "@tanstack/eslint-plugin-query"; // 추가

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  tanstackQuery.configs.recommended, // 플러그인 규칙 추가
];

export default eslintConfig;
