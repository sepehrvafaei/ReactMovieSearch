declare var require: any

var React = require('react');
import { search_movie,fetch_movies,set_loading } from '../actions/action';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
    search_movie = (event) => {
        this.props.search_movie(event.target.value);
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.fetch_movies(this.props.text);
        this.props.set_loading();
    };
    render() {
        return (
            <div className='mx-auto w-50 mb-5'>
                <form id='searchForm' onSubmit={this.onSubmit}>
                    <div className='input-group'>
                        <input className="form-control" type="text"
                            placeholder="Search"
                            name='searchText'
                            onChange={this.search_movie}
                        />
                        <div className='input-group-btn' >
                            <button className="btn btn-outline-success" type="submit">
                                <i className='fa fa-search' />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            );
    };
}

const mapStateToProps = (state) => ({
    text: state.searchReducer.text
});

export default connect(mapStateToProps, { search_movie,fetch_movies,set_loading })(SearchForm);