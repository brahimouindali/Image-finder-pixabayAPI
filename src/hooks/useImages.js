import { useState, useEffect } from 'react'
import axios from 'axios'

const useImages = (query, amount) => {
    const [collection, setCollection] = useState([])

    useEffect(() => {
        const APP_KEY = '19380352-ed4ddd6e7da013d4e9d6bf1e0'
        const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${query}&image_type=photo&per_page=${amount}`
        axios.get(URL)
            .then(res => {
                setCollection(res.data.hits)
            })
    }, [query, amount])
    return { collection }
}

export default useImages
