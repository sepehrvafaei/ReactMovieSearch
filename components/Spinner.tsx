declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export default function (props) {
    return (
        <div className='mx-auto w-25'>
        <button className="btn btn-primary" disabled>
            <span className="spinner-border spinner-border-sm"></span>
            Loading..
        </button>
            </div>
        );
}