import { useEffect, useState } from "react";

export const useGetData = async (name) => {
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
