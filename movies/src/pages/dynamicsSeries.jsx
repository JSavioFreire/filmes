import { useFetch } from "../hook/useFetch"
import { useParams } from "react-router-dom"
import { tv, keyapi } from "../url/url"
import { Dynamic } from "../styled/styleDynamics"
import ImageLarge from "../components/imageBig"

const DynamicsSeries = () => {
    const { id } = useParams()
    const url = tv + id + '?' + keyapi
    const {data, loading, error} = useFetch(url)

  return (
    <Dynamic>
        {error && 'Ocorreu um erro!'}
        {loading && 'Carregando...'}
        {data &&
        <div>
            <h1>{data.name}</h1>
            <p>{data.tagline}</p>
            <section>
                <ImageLarge poster={data.poster_path}/>
                <article>
                    <p className="description">{data.overview}</p>
                    <ImageLarge poster={data.backdrop_path}/>

                </article>
            </section>

        </div>
        }
    </Dynamic>
  )
}

export default DynamicsSeries