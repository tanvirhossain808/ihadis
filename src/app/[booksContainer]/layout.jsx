import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import BooksContainer from "../components/BooksContainer/BooksContainer"


const layout = ({ book }) => {
    return (
        <div className="h-screen">
            <Header />
            <div className="bookContainer  flex ">
                <Navbar />
                <div className="bg-[#F2F4F6] flex w-screen rounded-3xl p-2">
                    <BooksContainer />

                </div>


            </div>

            {/* <h1>Layout</h1>
            {book} */}
        </div>
    );
};

export default layout;