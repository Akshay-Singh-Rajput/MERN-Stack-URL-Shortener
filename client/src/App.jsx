import "./App.css";
import { Heading } from "@chakra-ui/react";
import { InputForm } from "./components/InputForm";
function App() {
    return (
        <div className="App">
            <Heading as="h3" size="xl" mt={'5%' }>
                SHORTURL
            </Heading>
            <InputForm />
        </div>
    );
}

export default App;
