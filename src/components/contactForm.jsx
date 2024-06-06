import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from 'react-icons/fa';
import { sendMessage } from "@/utils/sendMessage";

export default function ContactForm({ pageContent, type = 'обычная' }) {
    const [formData, setFormData] = useState({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.emailAddress || !formData.phoneNumber) {
            return alert('Add your name, phone and email, please')
        }

        sendMessage(formData.fullName + ' оставил(а) заявку(' + type + ') на сайте. Почта: ' + formData.emailAddress + ', телефон: ' + formData.phoneNumber + '. Сообщение: ' + formData.message)

        setIsSubmitted(true);

        setFormData({
            fullName: "",
            emailAddress: "",
            phoneNumber: "",
            message: ""
        });

        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-5 sm:p-20 md:p-24 w-full h-auto bg-[#FFFFFF] dark:bg-[#261b11] flex flex-col justify-center items-center border border-gray-300 dark:border-gray-700 gap-12">
                <input
                    className="dark:bg-[#b6a497] px-8 py-4 w-full placeholder-gray-400 dark:placeholder-[#261b11] text-18px text-[#b6a497] dark:text-[#261b11] border border-solid border-[#e6e6e6] dark:border-linen hover:border-[#b6a497] dark:hover:border-gray-400 focus:border-[#b6a497] dark:focus:border-gray-300"
                    type="text"
                    placeholder={pageContent?.placeholderName}
                    name="fullName"
                    onChange={handleInputChange}
                    value={formData.fullName}
                />
                <input
                    className="dark:bg-[#b6a497] px-8 py-4 w-full placeholder-gray-400 dark:placeholder-[#261b11] text-18px text-[#b6a497] dark:text-gray-600 border border-solid border-[#e6e6e6] dark:border-linen hover:border-[#b6a497] dark:hover:border-gray-400 focus:border-[#b6a497] dark:focus:border-gray-300"
                    type="email"
                    placeholder={pageContent?.placeholderEmail}
                    name="emailAddress"
                    onChange={handleInputChange}
                    value={formData.emailAddress}
                />
                <input
                    className="dark:bg-[#b6a497] px-8 py-4 w-full placeholder-gray-400 dark:placeholder-[#261b11] text-18px text-[#b6a497] dark:text-gray-600 border border-solid border-[#e6e6e6] dark:border-linen hover:border-[#b6a497] dark:hover:border-gray-400 focus:border-[#b6a497] dark:focus:border-gray-300 required"
                    type="text"
                    placeholder={pageContent?.placeholderPhone}
                    name="phoneNumber"
                    onChange={handleInputChange}
                    value={formData.phoneNumber}
                />
                <textarea
                    className="dark:bg-[#b6a497] px-8 py-4 w-full placeholder-gray-400 dark:placeholder-[#261b11] text-18px text-[#b6a497] dark:text-gray-600 border border-solid border-[#e6e6e6] dark:border-linen hover:border-[#b6a497] dark:hover:border-gray-400 focus:border-[#b6a497] dark:focus:border-gray-300 min-h-[176px]"
                    placeholder={pageContent?.message}
                    name="message"
                    onChange={handleInputChange}
                    value={formData.message}
                ></textarea>
                <div className="ml-auto">
                    <button
                        type="submit"
                        className="w-56 h-16 btn  bg-brown text-white text-center uppercase px-6 py-4 my-12 lg:my-6 dark:bg-[#b6a497]"
                    >
                        {isSubmitted ? <FaCheck className="mx-auto" /> : pageContent?.btn}
                    </button>
                </div>
            </div>
        </form>
    );
}
