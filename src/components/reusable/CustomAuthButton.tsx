import {CustomAuthButtonProps} from "@/types";
import {cn} from "@/lib/utils";
import {CgSpinner} from "react-icons/cg";

function CustomAuthButton({isLoading = false, type = 'submit', className, text, ...props}: CustomAuthButtonProps) {
    return (
        <>
            <button type={type}
                    className={cn('flex items-center justify-center rounded-md shadow-2xl py-2 w-full capitalize md:text-lg font-semibold', className, isLoading ? 'disabled:bg-rose-700 gap-4 cursor-not-allowed' : 'bg-rose-600 cursor-pointer')}
                    disabled={isLoading} {...props}>
                <span className={cn('text-white', isLoading ? 'hidden' : 'block')}>{text}</span>
                <CgSpinner className={cn('animate-spin text-2xl text-white', isLoading ? 'block' : 'hidden')}/>
            </button>
        </>
    );
}

export default CustomAuthButton;
