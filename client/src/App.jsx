import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import ShortUrlRedirect from "./components/ShortUrlRedirect ";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <Homepage /> } />
                <Route path='/:urlCode'
                    element={ <ShortUrlRedirect /> }
                />
            </Routes>
        </div>
    );
}

export default App;
