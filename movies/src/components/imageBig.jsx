import { imageLarge } from '../url/url'

const ImageLarge = ({poster}) => {

  return (
    <img src={imageLarge + poster} />
  )
}

export default ImageLarge