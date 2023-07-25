import './App.scss';
import { Column } from '@carbon/react';
import Scroll from "./Scroll";
import FetchAPI from "./FetchAPI";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Column lg={16} md={16} sm={16}>
                    <p>Hello World!</p>
                </Column>
                <Scroll />
            </header>
            <footer id="Container">
                <FetchAPI />
            </footer>
        </div>
    );
}

export default App;
