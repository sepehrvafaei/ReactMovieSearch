declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { connect } from 'react-redux';

class Movie extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={this.props.movie.Poster} alt='Poster'/>
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
                                <strong>Rated:</strong> sth
                            </li>
                            <li className='list-group-item'>
                                <strong>IMDB Rating:</strong> sth
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
            </React.Fragment>
            );
    }
}

const mapStateToProps = (state) => ({
    movie:state.searchReducer.movie
});

export default connect(mapStateToProps, null)(Movie);