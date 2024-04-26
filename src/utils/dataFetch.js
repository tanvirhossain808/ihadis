export const getAllData = async () => {

    const res = await fetch('http://localhost:5000/')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}