declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Footer = (props) => {
    return (
        <footer className='text-center bg-dark text-light p-3'>
            <p>
                movie serach by
                <span className='text-warning'> Sepehr Vafaei </span> 
                using React JS and Redux integrated with 
                <a href='http://www.omdbapi.com' target='_blank'> OMDB API</a>
            </p>
        </footer>
        );
}

export default Footer;