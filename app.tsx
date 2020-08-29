declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { Provider } from "react-redux";
import store from "./store";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));