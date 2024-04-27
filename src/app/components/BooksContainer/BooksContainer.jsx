"use client"
import { getChaptersData, getHadith as hadith } from "../../../utils/dataFetch"
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Section from "../Section/Section"

const BooksContainer = ({ isLoading }) => {

    const [isActive, setIsActive] = useState({
        book: true,
        chapter: false
    })
    const [chapters, setChapters] = useState([])
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
        async function fetchData() {
            fetch("http://localhost:5000/", {
                cache: "force-cache"
            })
                .then(res => res.json())
                .then(datas => datas.map(data => {
                    return {
                        ...data,
                        isActive: data.id === 1 ? true : false
                    }
                }))
                .then(data => setData(data))

            const chaptersData = await getChaptersData()
            setChapters(chaptersData)
        }
        fetchData

        return fetchData

    }, [])


    const getChapter = async (id) => {
        setData((pre) => {

            return pre.filter(data => data.isActive = data.id === id)


        })





    }
    const getHadith = async (id, number) => {
        setChapters(pre => pre.filter(chap => chap.isActive = chap.id === id)
        )


        const chaptersData = await hadith(id, number)
        // setChapters(chaptersData)
    }
    // console.log(chapters);
    isLoading && <>Loading</>
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
                        (isActive.book ? data : chapters).map(book => <Section key={book.id} title={book.title} id={book.id} isSelected={isActive.book ? book.isActive : chapters.isActive} numbers={isActive.book ? book.number_of_hadis : book.hadis_range} h="h-[100px]" w="w-[315px]" code={isActive.book ? book.abvr_code : book.number} isActive={isActive} isRowActive={book.isActive} getChapter={getChapter} isBookTrue={isActive.book} getHadith={getHadith} />)
                    }
                </div>


            </div>


        </div>
    );
};

export default BooksContainer;