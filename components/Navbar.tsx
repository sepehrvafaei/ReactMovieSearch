declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Navbar = (props) => {
    return (
        <nav className='navbar navbar-light bg-dark mb-5'>
            <div className='container'>
                <span className='navbar-brand text-white text-lg'>movie search</span>
                <i className='fab fa-imdb fa-5x' id='imdb-logo'/>
            </div>
        </nav>
        );
}

export default Navbar;