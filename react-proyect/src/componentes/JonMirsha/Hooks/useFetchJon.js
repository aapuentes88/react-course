import  { useEffect, useState } from 'react'

export const useFetchJon = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setisPending] = useState(false)

    useEffect(() => {

        const getData = async (url) => {
          try {

            let res = await fetch(url)

            if(!res.ok)
            throw {
              err: true,
              status: res.status,
              statusText: !res.statusText ? "Ocurrio un error" : res.statusText
            }

            let data = await res.json()

            setisPending(false)
            setData(data)
            setError({err: false})

          } catch (err) {
            setisPending(true)
            setError(err)
          }
        }

        getData(url)
      
    },[url])

  return {data, isPending, error}
}
