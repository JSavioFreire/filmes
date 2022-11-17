import { useFetch } from '../hook/useFetch'
import { tv, keyapi } from '../url/url'
import Image from '../components/imageMovie'
import { EachMovie,Flex } from '../styled/styledHome'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const Tv = () => {
    const topRated = `${tv}top_rated?${keyapi}` 
    const {data,error,loading} = useFetch(topRated)

  return (
    <Flex>
        {error && 'Ocorreu um erro!'}
        {loading && 'Carregando'}
        {data && data.results.map((tvseries) =>(
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
  

export default Tv