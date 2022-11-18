import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hook/useFetch"
import { Link } from "react-router-dom"
import { Flex,EachMovie } from "../styled/styledHome"
import Image from '../components/imageMovie'
import { keyapi,searchUrl,searchUrlTv } from "../url/url"
import { useEffect, useState } from "react"
import { FaStar } from 'react-icons/fa';


const SeachPage = () => {

    const [searchParams] = useSearchParams()
    const [ url, setUrl ] = useState('')
    const [ urlS, setUrlS ] = useState('')


    const {data, loading} = useFetch(url)
    const { data:series } = useFetch(urlS)

    const query = searchParams.get('q')

    useEffect(()=>{
        const url = `${searchUrl}?${keyapi}&query=${query}`
        setUrl(url)
    },[query])

    useEffect(()=>{
        const url = `${searchUrlTv}?${keyapi}&query=${query}`
        setUrlS(url)
    },[query])
    

    return (
        <Flex>
            <h1>Movies</h1>
        {loading && 'Carregando'}
        {data && data.results.map((movie) =>(
          <Link to={`/tvandmovie/${movie.id}`}>
            <EachMovie key={movie.id}>
                  <h2>{movie.title}</h2>
                  <Image poster={movie.poster_path}/>
                  <p><FaStar/>{movie.vote_average}</p>
            </EachMovie >
          </Link>
           

        ))}
            <h1>Tv Series</h1>

        {loading && 'Carregando'}
        {series && series.results.map((tvseries) =>(
          <Link to={`/tvandmovies/${tvseries.id}`}>
            <EachMovie key={tvseries.id}>
                  <h2>{tvseries.name}</h2>
                  <Image poster={tvseries.poster_path}/>
                  <p><FaStar/>{tvseries.vote_average}</p>
            </EachMovie >
          </Link>
           

        ))}
        </Flex>
      )
}

export default SeachPage