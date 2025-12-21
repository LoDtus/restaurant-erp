import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useCallback, useEffect, ChangeEvent } from 'react';

interface QuantityButtonProps {
    maxQuantity?: number; // Số lượng tối đa có thể đạt được (undefined hoặc null nếu không có giới hạn)
    initialQuantity?: number; // Số lượng ban đầu (mặc định là 0)
    onQuantityChange: (newQuantity: number) => void; // Callback được gọi khi số lượng thay đổi 
}

export default function QuantityButton ({
    maxQuantity,
    initialQuantity = 0,
    onQuantityChange,
}) {
    // Đảm bảo số lượng ban đầu hợp lệ
    const validatedInitialQuantity = Math.max(
        0,
        maxQuantity !== undefined ? Math.min(initialQuantity, maxQuantity) : initialQuantity
    );

    // State lưu trữ giá trị hiển thị trong input (có thể là chuỗi khi người dùng đang gõ)
    const [displayValue, setDisplayValue] = useState<number | string>(validatedInitialQuantity);
    const inputRef = useRef<HTMLInputElement>(null);

    // --- Logic Xử lý Thay đổi Số lượng Cuối cùng ---

    /**
     * Hàm chuẩn hóa và cập nhật số lượng cuối cùng
     * @param rawQuantity - Số lượng mới (dạng số)
     * @returns Số lượng đã được xác thực
     */
    const getValidatedQuantity = useCallback((rawQuantity: number): number => {
        // Giới hạn không âm
        let validatedQuantity = Math.max(0, rawQuantity);

        // Giới hạn tối đa
        if (maxQuantity !== undefined && validatedQuantity > maxQuantity) {
            validatedQuantity = maxQuantity;
        }
        return validatedQuantity;
    }, [maxQuantity]);

    /**
     * Hàm dùng để cập nhật số lượng sau khi xác thực và gọi callback
     * @param newQuantity - Số lượng đã xác thực
     */
    const emitQuantityChange = useCallback((newQuantity: number) => {
        // Chỉ cập nhật state hiển thị nếu nó khác (để tránh loop khi gõ)
        if (displayValue !== newQuantity) {
            setDisplayValue(newQuantity);
        }
        onQuantityChange(newQuantity);
    }, [displayValue, onQuantityChange]);


    // Xử lý Sự kiện tăng, giảm của button
    const handleDecrement = () => {
        // Chỉ giảm nếu displayValue là số và lớn hơn 0
        const currentQty = typeof displayValue === 'number' ? displayValue : validatedInitialQuantity;
        if (currentQty > 0) {
            emitQuantityChange(getValidatedQuantity(currentQty - 1));
        }
    };

    const handleIncrement = () => {
        // Chỉ tăng nếu displayValue là số và chưa đạt giới hạn
        const currentQty = typeof displayValue === 'number' ? displayValue : validatedInitialQuantity;
        if (maxQuantity === undefined || currentQty < maxQuantity) {
            emitQuantityChange(getValidatedQuantity(currentQty + 1));
        }
    };

    // Xử lý khi người dùng nhập thủ công
    const handleInputImmediateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.replace(/[^0-9]/g, ''); // Lọc bỏ các ký tự không phải số
        setDisplayValue(inputValue); // Cập nhật displayValue ngay lập tức để người dùng thấy giá trị đang gõ

        // 2. Xác thực và cập nhật số lượng cuối cùng (emit)
        if (inputValue === '') {
            onQuantityChange(0); // Nếu input rỗng, số lượng sẽ là 0
        } else {
            // Nếu có giá trị thì sẽ bắt đầu xác thực
            const rawNumber = parseInt(inputValue, 10);
            const validatedQty = getValidatedQuantity(rawNumber);

            // Nếu giá trị đã được giới hạn, chúng ta cần cập nhật lại displayValue
            if (rawNumber !== validatedQty) {
                // Cần delay một chút để không làm mất ký tự người dùng đang gõ
                // Nhưng vì bạn muốn nhận ngay, ta sẽ cập nhật displayValue và onQuantityChange
                setDisplayValue(validatedQty);
            }
            onQuantityChange(validatedQty);
        }
    };

    // Đảm bảo input luôn hiển thị giá trị số đã xác thực khi không focus
    useEffect(() => {
        if (inputRef.current) {
            const isFocused = document.activeElement === inputRef.current;
            const stateValue = String(displayValue);

            // Nếu không focus, hoặc giá trị nhập vào đã bị giới hạn (ví dụ: nhập 100, hiện 10)
            if (!isFocused && typeof displayValue === 'number') {
                inputRef.current.value = stateValue;
            }
            // Trong trường hợp giá trị bị giới hạn ngay sau khi gõ (vd: gõ "1", gõ tiếp "1" thành 11, nhưng max=10)
            if (isFocused && typeof displayValue === 'number' && inputRef.current.value !== stateValue) {
                inputRef.current.value = stateValue;
            }
        }
    }, [displayValue]);
    
    // Đồng bộ state nếu prop initialQuantity thay đổi từ bên ngoài (ví dụ: reset giỏ hàng)
    useEffect(() => {
        const validated = getValidatedQuantity(initialQuantity);
        if (displayValue !== validated) {
            setDisplayValue(validated);
        }
    }, [initialQuantity, getValidatedQuantity]);

    // Tailwind setup
    const currentQtyForCheck = typeof displayValue === 'number' ? displayValue : 0;
    const isDecrementDisabled = currentQtyForCheck <= 0;
    const isIncrementDisabled = maxQuantity !== undefined && currentQtyForCheck >= maxQuantity;
    const disabledButtonClasses = 'bg-gray-200 text-gray-400 cursor-not-allowed';

    return (
        <div className="flex items-center overflow-hidden w-fit">
            <button
                type="button"
                className={`
                    px-1 py-0.5 border rounded-sm transition duration-150 ease-in-out
                    ${isDecrementDisabled ? disabledButtonClasses : 'bg-white hover:bg-gray-100 text-gray-700'}
                `}
                onClick={handleDecrement}
                disabled={isDecrementDisabled}
            >
                <FontAwesomeIcon icon={faMinus} className='text-sm'/>
            </button>

            <input
                ref={inputRef}
                type="text"
                className="w-10 py-0.5 mx-1 text-center font-semibold border rounded-sm focus:outline-none"
                value={displayValue}
                onChange={handleInputImmediateChange}
                onKeyDown={(e) => {
                    // Ngăn chặn ký tự không phải số (trừ phím điều hướng và backspace)
                    if (!/[0-9]/.test(e.key) && e.key.length === 1) {
                         // Cho phép các phím điều khiển (Arrow keys, Tab, Delete, Backspace)
                        if (!['ArrowLeft', 'ArrowRight', 'Tab', 'Backspace', 'Delete'].includes(e.key)) {
                            e.preventDefault();
                        }
                    }
                }}
                inputMode="numeric"
            />

            <button
                type="button"
                className={`
                    px-1 py-0.5 border rounded-sm transition duration-150 ease-in-out
                    ${isIncrementDisabled ? disabledButtonClasses : 'bg-white hover:bg-gray-100 text-gray-700'}
                `}
                onClick={handleIncrement}
                disabled={isIncrementDisabled}
            >
                <FontAwesomeIcon icon={faPlus} className='text-sm'/>
            </button>
        </div>
    );
};