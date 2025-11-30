import messages from "@/i18n/locales"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const CallWithMe = () => {
    return (
            <div className="flex flex-col gap-10 justify-center items-center">
                <p className="mt-10">{messages.fa.messages["my-phone-number"]}: 09030124037</p>
                <Link
                    className="text-white font-bold flex gap-2 p-3 rounded-4xl items-center bg-blue-700"
                    href={"/marketing"}
                >
                    <ArrowRight size={20} />
                    {messages.fa.messages["back-to-home"]}
                </Link>
            </div>
    )
}

export default CallWithMe