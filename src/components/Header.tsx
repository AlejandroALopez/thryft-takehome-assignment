import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/icons/logoHeader.svg";

export default function Header() {
    return (
        <Link
            href="/"
            className="w-full py-4 px-8 bg-white border-[1px] border-b-[#E2E2E2]"
        >
            <Image src={Logo} alt="logo icon" />
        </Link>
    );
}