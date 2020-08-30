import  SearchForm  from "./SearchForm";

declare var require: any

var React = require('react');
import { connect } from 'react-redux';
import Spinner from './Spinner';
import MovieContainer from './MovieContainer';

class Landing extends React.Component {
    render() {
        return (
            <div className='container'>
                <SearchForm />
                {this.props.loading ? <Spinner/>:<MovieContainer/>}
            </div>
            );
    };
}

const mapStateToProps = (state) => ({
    loading: state.searchReducer.loading
});

export default connect(mapStateToProps, null)(SearchForm);
