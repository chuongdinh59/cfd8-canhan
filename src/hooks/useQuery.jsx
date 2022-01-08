import { useEffect, useState } from "react"

const useQuery = (promise, dependencyList = []) => {
     
    const [isFetching, setIsFetching] = useState(true)
    const [data, setData] = useState()
    
    useEffect( () => {
        (async () => {
            setIsFetching(true)
            const res = await promise()
            setData(res.data)
            setIsFetching(false)
        })()
    }, dependencyList)

    return {
        data,
        isFetching
    }
}


export default useQuery