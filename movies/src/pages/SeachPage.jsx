import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hook/useFetch"
import { Link } from "react-router-dom"
import { Flex,EachMovie } from "../styled/styledHome"
import { movies,keyapi,searchUrl } from "../url/url"
import { useEffect, useState } from "react"

const SeachPage = () => {

    const [searchParams] = useSearchParams()
    const [ url, setUrl ] = useState('')

    const {data, loading, error} = useFetch(url)

    console.log(data)
    const [movie, setMovie] = useState([])
    const query = searchParams.get('q')

    useEffect(()=>{
        const url = `${searchUrl}?${keyapi}&query=${query}`
        setUrl(url)
    },[query])
    

    return (
        <Flex>
          
        </Flex>
      )
}

export default SeachPage