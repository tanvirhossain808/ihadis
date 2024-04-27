
import { particularBooksDetails } from "../../../utils/dataFetch";

const Page = async ({ params }) => {

    const bookDetails = await particularBooksDetails(params.booksContainer)
    console.log(bookDetails);
    return (
        <div>
            ddfd
        </div>
    );
};

export default Page;