import Link from "next/link";
import {CustomLinkProps} from "@/types";
import {cn} from "@/lib/utils";

function CustomLink({href, children, className}: CustomLinkProps) {
    return (
        href ? (
            <Link href={href} className={cn('hover:underline', className)}>{children}</Link>
        ) : (
            <div className={className}>{children}</div>
        )
    );
}

export default CustomLink;
