


export const particularBooksDetails = async (name) => {
    console.log(name);
    const data = await fetch(`http://localhost:5000/bookDetails?bookName=${name}`)
    const res = await data.json()

    return await res;


}


export const useHadithAvailable = async (name) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAvailable, setIsAvailable] = useState(false); // State to store whether the book is available

    // Fetch data asynchronously
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/isTrue?bookName=${name}`);
                const data = await response.json();
                setIsAvailable(data.isTrue); // Update state based on fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false); // Update loading state after fetching data (whether successful or not)
            }
        };

        fetchData();
    }, [name]);

    return { isLoading, isAvailable, name: "Tanvir" };
};



export const getChaptersData = async (bookId = 1, number = 1) => {

    const res = await fetch(`http://localhost:5000/chapters?bookId=${bookId}&hadishNo=${number}`)


    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    const b = await data.map(d => {
        return {
            ...d,
            isActive: false

        }

    })
    return b
}

export const getHadith = async (bookId) => {
    const res = await fetch(`http://localhost:5000/hadith?bookId=${bookId}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()


    return data
}