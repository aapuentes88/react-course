import  { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url).then((res) => res.json())
        .then((data) => setData(data))
        .catch((e) => setError('Error'))
        .finally(() => setLoading(false))

        // const getData = async (url) => {
        //   try {

        //     // setLoading(true)
        //     let res = await fetch(url)

        //     if(!res.ok)
        //     throw {
        //       err: true,
        //       status: res.status,
        //       statusText: !res.statusText ? "Ocurrio un error" : res.statusText
        //     }

        //     let data = await res.json()

        //     setData(data)
        //     setError(/*{err: false}*/"No Error")
        //     setLoading(false)

        //   } catch (err) {
        //     setLoading(true)
        //     setError(/*err*/"Error")
        //   }
        // }

        // getData(url)
      
    },[url])

  return [data, error, loading]
}
