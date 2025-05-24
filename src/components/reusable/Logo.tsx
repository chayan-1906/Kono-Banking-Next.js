import Link from "next/link";
import routes from "@/lib/routes";

function Logo() {
    return (
        <>
            <Link href={routes.homePath}> CBI </Link>
        </>
    );
}

export default Logo;
