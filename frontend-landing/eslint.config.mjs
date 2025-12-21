import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,

    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        rules: {
            "@typescript-eslint/no-unused-vars": [ // Báo lỗi cho các biến không được sử dụng (typescript-eslint version)
                "error",
                { "argsIgnorePattern": "^_" } // Cho phép biến bắt đầu bằng _ không cần dùng
            ],
            "eqeqeq": "error", // Buộc dùng === thay vì == để tránh các lỗi so sánh kiểu dữ liệu
            "prefer-const": "error", // Buộc sử dụng const/let thay vì var
            "no-var": "error", // Cấm sử dụng 'var'
            "@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports", "fixStyle": "inline-type-imports" }], // Buộc sử dụng 'import type' khi chỉ import kiểu, giúp build nhanh và rõ ràng hơn
            "@typescript-eslint/no-floating-promises": "error", // Ngăn chặn việc sử dụng các hàm async mà không xử lý Promise
            "no-console": ["warn", { "allow": ["warn", "error"] }], // Cảnh báo nếu sử dụng console.log() (có thể chấp nhận 'warn' khi dev)
            "@typescript-eslint/no-explicit-any": "warn", // Cảnh báo nếu sử dụng 'any' tường minh
            "react-hooks/exhaustive-deps": "warn", // Cảnh báo nếu thiếu dependencies trong useEffect/useMemo/useCallback
        }
    },

    // Các quy tắc bỏ qua   
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;