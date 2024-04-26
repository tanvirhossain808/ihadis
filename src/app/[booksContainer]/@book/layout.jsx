

import BooksContainer from "../../components/BooksContainer/BooksContainer"
import { getAllData } from "../../../utils/dataFetch"
const data = getAllData()
console.log(data);

// export const generateMetadata

const layout = ({ params }) => {
    console.log(params, "d");

    return (
        <div>

            <BooksContainer generateMetadata />

        </div>
    );
};

export default layout;


/* "use client"

import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Section from "../../components/Section/Section"


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
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data, "d");
    return (
        <div className=" pt-5  pl-3 ">
            <div className="booksName rounded-xl  items-center flex flex-col h-[81vh]  w-[350px]  bg-[#FFFFFF] " >
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
                <SearchBar bg={"bg-[#F2F4F6]"} mt={"mt-3"} w={"w-[320px]"} border={false} placeholder={"Search For Filter"} />
                <div className="mt-8">


                    {
                        data.map(book => <Section key={book.id} title={book.title} numbers={book.number_of_hadis} h="h-[100px]" w="w-[315px]" code={book.abvr_code} />)
                    }
                </div>


            </div>


        </div>
    );
};

export default BooksContainer; */
