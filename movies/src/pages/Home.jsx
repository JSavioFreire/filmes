import { useFetch } from '../hook/useFetch'
import { movies, key } from '../url/url'
import Image from '../components/imageMovie'
import { EachMovie,Flex } from '../styled/styledHome'


const Home = () => {
    const topRated = `${movies}top_rated?${key}` 
    const {data,error,loading} = useFetch(topRated)


    data && console.log(data.results)
  return (
    <Flex>
        {error && 'Ocorreu um erro!'}
        {loading && 'Carregando'}
        {data && data.results.map((movie) =>(
            <EachMovie>
                <h2>{movie.title}</h2>
                <Image poster={movie.poster_path}/>
            </EachMovie >

        ))}
        


    </Flex>
  )
}

export default Home