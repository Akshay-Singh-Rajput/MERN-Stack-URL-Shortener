import React, { useState } from "react";
import {
    Box,
    FormControl,
    Input,
    FormHelperText,
    FormErrorMessage,
    FormLabel,
    Button,
    Flex,
    useClipboard,
    InputGroup,
    InputLeftAddon,
    Text,
} from "@chakra-ui/react";

export const InputForm = () => {
    const [ input, setInput ] = useState(
        {
            longUrl: "",
            code: ""
        }
    );
    const [ url, setUrl ] = useState("");
    const { hasCopied, onCopy } = useClipboard(url);

    const handleInputChange = (e) => {
        setInput({ ...input, [ e.target.id ]: e.target.value });
    };

    const handleForm = () => {
        if (input.longUrl === "") {
            setUrl("Please Paste URL");
            return;
        }
        console.log("input", input);
        try {
            fetch("https://shorturlweb.herokuapp.com/api/url/shorten", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            })
                .then((data) => data.json())
                .then((res) => {
                    if (res.err) {
                        setUrl(res.err);
                    } else {
                        setUrl(res.shortUrl);
                    }
                    console.log("res", res);
                })
                .then((err) => console.log(err));
        } catch (error) {
            console.log("error", error);
        }
        // console.log("shortUrl", url);
    };

    const isError = input.longUrl === "";
    return (
        <Box
            width={ "40%" }
            margin={ "5% auto" }
            boxShadow="base"
            p="6"
            rounded="md"
            bg="white"
        >

            <FormControl isInvalid={ isError }>
                <FormLabel >Enter a long URL to make a ShortURL</FormLabel>
                <Input
                    id="longUrl"
                    type="url"
                    value={ input.longUrl }
                    placeholder="Paste here Your Long Url"
                    onChange={ handleInputChange }
                />
                { !isError ? (
                    <FormHelperText>Enter your Long Url</FormHelperText>
                ) : (
                    <FormErrorMessage>URL is required.</FormErrorMessage>
                ) }
            </FormControl>
            <FormLabel mt={ 7 } fontSize='md'>Customize Your ShortURL link(optional)</FormLabel>
            <InputGroup size='sm'>
                <InputLeftAddon children='https://shorturlweb.herokuapp.com/' />
                <Input placeholder='yoursite' id="code"
                    type="text"
                    value={ input.code }
                    onChange={ handleInputChange } />
            </InputGroup>
            <Button colorScheme="blue" m={ 5 } onClick={ handleForm }>
                Submit
            </Button>
            <Flex mb={ 2 }>
                <Input value={ url } isReadOnly placeholder="Short Url" />
                <Button onClick={ onCopy } ml={ 2 }>
                    { hasCopied ? "Copied" : "Copy" }
                </Button>
            </Flex>
        </Box>
    );
};
