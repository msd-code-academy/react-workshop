import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { addWishlistItem } from './actions/wishlistAction';

import { AppState } from './reducers';

import Movie from './Movie'
import Fetcher from './Fetcher';


interface StateProps {
  wishlist: number[]
}

interface DispatchProps {
  addWishlistItem: typeof addWishlistItem
}

type OwnProps = {}

type Props = OwnProps & StateProps & DispatchProps

type Movie = {
  id: number
  backdrop_path: string | null
  title: string
}

export const MovieList: React.FunctionComponent<Props> = (props) => {
  const handleClick = (id: number) => {
    props.addWishlistItem(id)
  }

  const getMovieList = (movieList: {results: Movie[]}) => {
    return movieList.results.map((movie) => {
      return <Movie
        key={movie.id}
        title={movie.title}
        id={movie.id}
        includedInWishlist={props.wishlist.includes(movie.id)}
        image={movie.backdrop_path}
        onClick={handleClick}
      />
    })
  }

  return (
    <Fetcher url="https://api.themoviedb.org/3/discover/movie?primary_release_year=2018&sort_by=revenue.desc&api_key=91b7619b7365b08b2090c7e9a78184df">
      {({loading, data}) => (
        <div className="movie-list">
          {loading && <div data-testid="movie-list__loading">Loading</div>}
          {data && getMovieList(data)}
        </div>
      )}
    </Fetcher>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (state: AppState, ownProps: OwnProps): StateProps => ({
  wishlist: state.wishlistReducer.ids
})

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, OwnProps> = (dispatch: Dispatch): DispatchProps => bindActionCreators(
  {
    addWishlistItem
  },
  dispatch
)

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(MovieList)
