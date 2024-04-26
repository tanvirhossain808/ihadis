export const getChaptersData = async () => {

    const res = await fetch('http://localhost:5000/chapters')

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