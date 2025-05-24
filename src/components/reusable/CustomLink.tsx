import Link from "next/link";
import {CustomLinkProps} from "@/types";
import {cn} from "@/lib/utils";

function CustomLink({href, text, className}: CustomLinkProps) {
    return (
        href ? (
            <Link href={href} className={cn('hover:underline', className)}>{text}</Link>
        ) : (
            <div className={className}>{text}</div>
        )
    );
}

export default CustomLink;
