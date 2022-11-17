import { SearchHeader } from "../styled/styledNav"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Seach = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        navigate('/search?q=' + query)
        setQuery('')
    }

  return (
    <SearchHeader>
        <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search here' className="search" onChange={(e)=> setQuery(e.target.value)} value={query}/>
                <input type='submit' value='Search' className="bt"/>
            
        </form>
    </SearchHeader>
  )
}

export default Seach