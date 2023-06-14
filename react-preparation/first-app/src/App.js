import React, {Component} from 'react';
import HelloWorld from "./HelloWorld";
import Welcome from "./Welcome";

class App extends Component {
    render() {
        return (
            <div>
                <h1>My Awesome Application</h1>
                <HelloWorld/>
                <Welcome name="Alptekin" age={23}/>
            </div>
        );
    }
}

export default App;