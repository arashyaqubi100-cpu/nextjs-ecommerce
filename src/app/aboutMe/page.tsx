import messages from "@/i18n/locales";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { aboutMe } from "./meta/service";

const AboutMe = () => {
    return (
        <div dir="ltr">
            <h2 className="text-center my-4 text-2xl bg-red-700 text-white w-[80%] mx-auto">Arash Yaqubi</h2>
            <div className="flex flex-wrap gap-4 mx-auto w-[75%]">
                {
                    aboutMe.map((item =>
                        <div key={item.id} className="w-[49%]">
                            <p className="bg-red-500 text-white p-2">
                                {item.title}
                            </p>
                            <p className="pl-4 p-2 border-1 border-t-0">
                                {item.label}
                            </p>
                        </div>
                    ))
                }
                <span className="text-sm w-[49%]">
                    <p>babol, mazandaran</p>
                    <p>09030124037</p>
                    arashYaqubi61@gmail.com
                </span>
                <a className="text-blue-600 mx-auto mt-2 flex gap-1" href={"/marketing"}>
                    {messages.fa.messages["back-to-home"]}
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    )
}

export default AboutMe;