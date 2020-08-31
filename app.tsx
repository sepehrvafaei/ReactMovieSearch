declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Movie from './components/Movie';
import { Provider } from "react-redux";
import store from "./store";


export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/movie' component={Movie}/>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));