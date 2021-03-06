import React from 'react'

class MovieRow extends React.Component {
    viewMovie() {
     
        const movieId = this.props.movie.id

        const url = `https://www.themoviedb.org/movie/${movieId}`
        window.location.href = url
    }

 
    render() {
        return (
        <table className='movieContainer' key={this.props.movie.id}>
            <tbody>
            <tr>
                <td>
                    <img className='logoImg' alt="poster" src={this.props.movie.poster_src}/>
                </td>

              
                <td className='movieInfo'>
                    <h4 className='movie-title'>{this.props.movie.title}</h4>
                    <p className="info-text"><b>Summary: </b>{this.props.movie.overview}</p>
                    <input className='button viewMovieButton waves-effect waves-light btn-small' onClick={this.props.handleViewMovie} type='button' value='Learn more!'/>
                    <input className='button waves-effect waves-light btn-small' type="button" value="Visit MovieDB" onClick={this.viewMovie.bind(this)} />
                </td>
            </tr>
            </tbody>
      </table>
    )}
}

export default MovieRow