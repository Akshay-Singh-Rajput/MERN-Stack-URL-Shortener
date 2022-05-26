import "./App.css";
import { Heading,Text } from "@chakra-ui/react";
import { InputForm } from "./components/InputForm";
function App() {
    return (
        <div className="App">
            <Heading as="h3" size="xl" m={'3% 0% 2% 0%' }>
                SHORTURL
            </Heading>
            <InputForm />
            <Text m={ '3%' }>Made with ❤️ by Me ( <a target="_blank" href="https://akshay-kumar-portfoilo.netlify.app/"> Akshay Kumar</a>)</Text>
        </div>
    );
}

export default App;
