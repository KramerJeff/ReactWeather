import React, {useState} from 'react';
import Weather from './components/pages/Weather';
import Home from './components/pages/Home';
import Navigation from './components/molecules/Navigation';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './App.css';

function App() {

    const [zipcode, setZipcode] = useState(0);

    function onKeyDown(event) {
        let regex = /\d/g;
        let zipcodeRegex = /(\d{5})/g;
        if(event.keyCode === 13) {
            console.log('they pressed enter');
            setZipcode(event.input);
        }
        else if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) { 
            console.log('they typed a number');
            setZipcode(event.input);
        }
        else {
            console.log(event.keyCode);
            console.log(`you messed up ${event.input} ${event.keyCode}`);
        }
    }

    return (
        <Router>
            <div>
                <Navigation onKeyDown={onKeyDown}/>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/weather/:zipcode" children={<Weather />} />
                    <Route path="/weather" children={<Weather />} />
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
