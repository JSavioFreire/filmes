import { useFetch } from '../hook/useFetch'
import { movies, keyapi } from '../url/url'
import Image from '../components/imageMovie'
import { EachMovie,Flex } from '../styled/styledHome'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';



const Home = () => {
    const topRated = `${movies}top_rated?${keyapi}` 
    const {data,error,loading} = useFetch(topRated)

  return (
    <Flex>
        {error && 'Ocorreu um erro!'}
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
        


    </Flex>
  )
}

export default Home