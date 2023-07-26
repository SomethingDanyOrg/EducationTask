import './App.scss';
import { Column } from '@carbon/react';
import Scroll from "./Scroll";
import GetWeather from "./GetWeather";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Column lg={16} md={16} sm={16}>
                    <p>Hello World! I'm learning React!</p>
                </Column>
                <Scroll />
            </header>
            <footer id="Container">
                <GetWeather />
            </footer>
        </div>
    );
}

export default App;
