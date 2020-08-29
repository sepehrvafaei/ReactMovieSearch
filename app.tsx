declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Navbar />
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));