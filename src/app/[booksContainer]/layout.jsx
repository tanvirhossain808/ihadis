import Header from "../components/Header/Header"


const layout = ({ book }) => {
    return (
        <div>
            <Header />
            <h1>Layout</h1>
            {book}
        </div>
    );
};

export default layout;