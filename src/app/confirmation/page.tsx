import Header from "@/components/Header";
import Image from "next/image";
import Logo from "../../../public/icons/logoConfirmation.svg";

export default function Confirmation() {

    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Header />
            <div className="flex flex-col items-center justify-center p-12 gap-8 min h-[70vh]">
                <Image src={Logo} alt="logo confirmation" />
                <p className="font-bold w-48 text-center">
                    Confirmation and tracking information will be sent to your email!
                </p>
            </div>
        </main>
    )
}