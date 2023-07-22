import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import ShortUrlRedirect from "./components/ShortUrlRedirect ";
import Toggle from "./components/Toggle";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <Homepage /> } />
                <Route path='/:urlCode'
                    element={ <ShortUrlRedirect /> }
                />
            </Routes>
            <>
                <Toggle />
            </>
        </div>
    );
}

export default App;
