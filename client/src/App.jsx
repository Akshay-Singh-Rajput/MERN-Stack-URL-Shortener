import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import RedirectPage from "./components/RedirectPage";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <Homepage /> } />
                <Route path='/:urlCode'
                    element={ <RedirectPage /> }
                />
            </Routes>
        </div>
    );
}

export default App;
