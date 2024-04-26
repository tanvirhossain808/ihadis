"use client"

import { useState } from "react";


const BooksContainer = () => {
    const [isActive, setIsActive] = useState({
        book: true,
        chapter: false
    })
    const handleBookSection = () => {
        setIsActive({
            chapter: false,
            book: true
        })
    }

    const handleChapterSection = () => {
        setIsActive({
            book: false,
            chapter: true
        })
    }

    return (
        <div className=" pt-5  pl-3 ">
            <div className="booksName rounded-xl  flex flex-col h-[81vh]  w-[350px]  bg-[#FFFFFF] " >
                <div className="books-chapter flex">
                    <div className={`${isActive.book ? "bg-[#2B9E76] text-white" : ""} h-[52px] w-[175px] rounded-ss-xl cursor-pointer flex justify-center items-center`}
                        onClick={handleBookSection}

                    >
                        <p className="text-[20px]">বই</p>
                    </div>
                    <div className={`${isActive.chapter ? "bg-[#2B9E76] text-white" : ""} h-[52px] w-[175px] rounded-se-xl cursor-pointer flex justify-center items-center`}
                        onClick={handleChapterSection}
                    >
                        <p className="text-[20px]">অধ্যায়</p>

                    </div>

                </div>
                <hr className="h-[1px] w-[350px] text-slate-950 " />


            </div>


        </div>
    );
};

export default BooksContainer;