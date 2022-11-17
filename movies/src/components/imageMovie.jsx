import { image } from '../url/url'

const Image = ({poster}) => {

  return (
    <img src={image + poster} />
  )
}

export default Image