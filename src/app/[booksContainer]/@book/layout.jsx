/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import BooksContainer from "../../components/BooksContainer/BooksContainer"
import { useHadithAvailable } from "../../../utils/dataFetch";
import { useGetData } from "../../../utils/useGetData"
import { useEffect, useState } from "react";

// export const generateMetadata

const Layout = ({ params }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isAvailabe, setIsvailabe] = useState(false)
    let isTrue = false
    useEffect(() => {
        const isHadithNameAvailable = async () => {
            const b = await fetch(`http://localhost:5000/isTrue?bookName=${params.booksContainer}`)
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)
                    isTrue = data.isTrue
                    setIsvailabe(data.isTrue)

                })




        }
        isHadithNameAvailable()
        return isHadithNameAvailable
    }, [])
    // if (isLoading) return <>Loading</>
    return (
        <div>

            <BooksContainer name={''} isLoading={isLoading} />

        </div>
    );
};

export default Layout;



