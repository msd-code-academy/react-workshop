import React from 'react'

type Props = {
  id: number
  title: string
  includedInWishlist: boolean
  image?: string | null
  onClick: (id: number) => void
}

const Movie: React.FunctionComponent<Props> = (props) => {

  const handleClick = () => {
    props.onClick(props.id)
  }

  return (
    <div className="movie" data-testid="movie">
        <div className="movie__header">
          <span data-testid="movie__title">{props.title}</span>
          <span data-testid="movie__wishlist" onClick={handleClick}>
            {props.includedInWishlist ? '❤️' : '🖤'}
          </span>
        </div>
        <div className="movie__image-container">
          {props.image && <img data-testid="movie__image" src={`https://image.tmdb.org/t/p/w500/${props.image}`} />}
        </div>
    </div>
  )
}

export default Movie
