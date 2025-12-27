import { BAD_NUMBERS, DEFAULT_PREFIX_EMP_CODE } from "src/common/constants/constants";
import slugify from '@sindresorhus/slugify';

export const genEmployeeCode = (prefix: string = DEFAULT_PREFIX_EMP_CODE, count: number): { count: number; number: string } => {
    const MAX_VAL = 9999;
    const DIGITS = 4;

    let currentCount = count;
    while (true) {
        if (currentCount > MAX_VAL) {
            throw new Error(`Không thể sinh mã: Vượt quá giới hạn ${MAX_VAL}`);
        }

        // Sinh phần số với đúng số chữ số yêu cầu
        const numStr = currentCount.toString().padStart(DIGITS, '0');

        // Đảm bảo chỉ chứa chữ số
        if (!/^\d+$/.test(numStr) || numStr.length !== DIGITS) {
            throw new Error(`Lỗi hệ thống: Mã sinh ra không hợp lệ: ${numStr}`);
        }

        // Kiểm tra số xấu
        let skipAmount = 0;
        for (const bad of BAD_NUMBERS) {
            const pos = numStr.indexOf(bad);
            if (pos !== -1) {
                const remainingLength = DIGITS - (pos + bad.length);
                if (remainingLength < 0) {
                    skipAmount = 1;
                } else {
                    const jump = Math.pow(10, remainingLength);
                    const suffixStr = numStr.substring(pos + bad.length);
                    const suffix = suffixStr ? parseInt(suffixStr, 10) : 0;
                    skipAmount = jump - suffix;
                }
                break;
            }
        }

        if (skipAmount > 0) {
            currentCount += skipAmount;
            continue;
        }

        return {
            count: currentCount,
            number: `${prefix}_${numStr}`,
        };
    }
};

export const genSlug = (text: string): string => {
    return slugify(text, {
        separator: '-',
        lowercase: true,
        decamelize: true, // Tự động tách các từ viết nếu nó được viết theo dạng camelCase như 'fooBar' → 'foo-bar'
        customReplacements: [
            ['&', ''],
            ['🇻🇳', 'viet-nam'],
            ['VN', 'viet-nam'],
            ['cua', ''],
            ['va', ''],
            ['la', ''],
            ['nhung', ''],
            ['cac', ''],
            ['a', ''],
        ],
        preserveLeadingUnderscore: false, // Không giữ lại dấu gạch chân '_' ở đầu chuỗi nếu có
        preserveTrailingDash: false, // Không giữ lại dấu gạch ngang '-' ở cuối chuỗi nếu có
        transliterate: true, // Chuyển sang các ký tự latin
    });
};