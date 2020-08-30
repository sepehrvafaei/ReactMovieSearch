declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { connect } from 'react-redux';
import MovieCard from './Moviecard';


export class MovieContainer extends React.Component {
    render() {
        let list = '';
        list = this.props.movies.length > 0 ?
            this.props.movies.map((movie, index) =>
                <MovieCard key={index} movie={movie}/>)
            : null;
        return (
            <div className='row'>
                {list}
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    movies: state.SearchReducer.movies
}

export default connect(mapStateToProps, null)(MovieContainer);