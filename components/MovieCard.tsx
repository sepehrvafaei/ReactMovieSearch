declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetch_movie,set_loading } from '../actions/action';

class MovieCard extends React.Component {
    handleDetail = (id) => {
        this.props.fetch_movie(id);
        this.props.set_loading();
    }
    render() {
        const { movie } = this.props;
        return (
            <div className='col-md-3 mb-4'>
                <div className='card h-100'>
                    <img src={movie.Poster} alt='Poster' className='card-img-top' />
                    <div className="card-body text-center">
                        <h5 className='card-title'>
                            {movie.Title} - {movie.Year}
                        </h5>
                        <Link to={'/movie/' + movie.imdbID}>
                            <button type="button" className="btn btn-primary"
                                onClick={this.handleDetail.bind(this,movie.imdbID)}>
                                Details <i className='fas fa-chevron-right'/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(null, {fetch_movie})(MovieCard);