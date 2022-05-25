import React, { useState } from "react";
import {
    Box,
    FormControl,
    Input,
    FormHelperText,
    FormErrorMessage,
    Button,
    Flex,
    useClipboard,
    Heading
} from "@chakra-ui/react";

export const InputForm = () => {
    const [ input, setInput ] = useState({ longUrl: "" });
    const [ url, setUrl ] = useState("");
    const { hasCopied, onCopy } = useClipboard(url);

    const handleInputChange = (e) => {
        setInput({ [ e.target.id ]: e.target.value });
    };

    const handleForm = () => {
        if (input.longUrl === "") {
            setUrl('Please Paste URL')
            return;
        }
        // console.log("input", input);
        try {
            fetch("http://localhost:5000/api/url/shorten", {
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
                    console.log('res', res);
                })
                .then((err) => console.log(err,));

        } catch (error) {
            console.log('error', error);
        }
        // console.log("shortUrl", url);
    };

    const isError = input.longUrl === "";
    return (
        <Box width={ "40%" } margin={ "5% auto" } boxShadow='base' p='6' rounded='md' bg='white' >
            <Heading as='h3' size='2xl'>Short Your URL</Heading>
            <FormControl isInvalid={ isError } mt={5}>
                <Flex mb={ 2 }>
                    <Input
                        id="longUrl"
                        type="url"
                        value={ input.longUrl }
                        placeholder="Paste here Your Long Url"
                        onChange={ handleInputChange }
                    />
                </Flex>
                { !isError ? (
                    <FormHelperText>Enter your Long Url</FormHelperText>
                ) : (
                    <FormErrorMessage>URL is required.</FormErrorMessage>
                ) }
                <Button colorScheme="blue" m={ 5 } onClick={ handleForm }>
                    Submit
                </Button>
            </FormControl>
            <Flex mb={ 2 }>
                <Input value={ url } isReadOnly placeholder="Short Url" />
                <Button onClick={ onCopy } ml={ 2 }>
                    { hasCopied ? "Copied" : "Copy" }
                </Button>
            </Flex>
        </Box>
    );
};
