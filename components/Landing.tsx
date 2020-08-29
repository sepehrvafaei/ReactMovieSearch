import  SearchForm  from "./SearchForm";

declare var require: any

var React = require('react');

class Landing extends React.Component {
    render() {
        return (
            <div className='container'>
                <SearchForm/>
            </div>
            );
    };
}


export default Landing;