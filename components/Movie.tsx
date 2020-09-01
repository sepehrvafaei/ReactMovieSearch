declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import Spinner from './Spinner';
import { connect } from 'react-redux';

class Movie extends React.Component {
    render() {
        if (this.props.loading) { return <Spinner />;}
        else {
            return (
                <React.Fragment>
                    <div className='row'>
                        <div className='col-md-4 card card-body'>
                            <img src={this.props.movie.Poster} alt='Poster' />
                        </div>
                        <div className='col-md-8'>
                            <h2 className='mb-4'>{this.props.movie.Title}</h2>
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <strong>Genre:</strong> {this.props.movie.Genre}
                                </li>
                                <li className='list-group-item'>
                                    <strong>Released:</strong> {this.props.movie.Released}
                                </li>
                                <li className='list-group-item'>
                                    <strong>Rated:</strong> {this.props.movie.Rated}
                                </li>
                                <li className='list-group-item'>
                                    <strong>IMDB Rating:</strong> {this.props.movie.imdbRating}
                                </li>
                                <li className='list-group-item'>
                                    <strong>Director:</strong> {this.props.movie.Director}
                                </li>
                                <li className='list-group-item'>
                                    <strong>Writer:</strong> {this.props.movie.Writer}
                                </li>
                                <li className='list-group-item'>
                                    <strong>Actors:</strong> {this.props.movie.Actors}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-dark mx-auto w-50 text-white mt-4'>
                        <h3>Summary</h3>
                        <p>{this.props.movie.Plot}</p>
                    </div>
                </React.Fragment>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    movie: state.searchReducer.movie,
    loading:state.searchReducer.loading
});

export default connect(mapStateToProps, null)(Movie);