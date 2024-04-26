import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import BooksContainer from "../components/BooksContainer/BooksContainer"


const layout = ({ book, bookSelection }) => {
    return (
        <div className="h-screen">
            <Header />
            <div className="bookContainer  flex ">
                <Navbar />
                {/* {book} */}
                <div className="bg-[#F2F4F6] flex w-screen rounded-3xl p-2">
                    {/* <BooksContainer /> */}
                    {
                        // bookSelection
                        book
                    }

                </div>


            </div>

            {/* <h1>Layout</h1>
            {book} */}
        </div>
    );
};

export default layout;