import React, { useState } from "react";
import axios from 'axios';
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
} from "@chakra-ui/react";
import styles from './InputForm.module.css';

export const InputForm = () => {
    const [ input, setInput ] = useState(
        {
            longUrl: "",
            urlCode: ""
        }
    );
    const [ url, setUrl ] = useState("");
    const { hasCopied, onCopy } = useClipboard(url);
    const clientBaseUrl = window.location.href;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInput({ ...input, [ id ]: value });
    };
    const handleEnter = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        if (!input.longUrl) {
            setUrl("Please add a URL");
            return;
        }

        axios.post('/api/url/shorten', input).then(res => {
            if (res.status) {
                let data = res.data;
                let createUrl = clientBaseUrl + data.urlCode;
                setUrl(createUrl);
            }
            console.log("res", res);
        }).catch(error => {
            let errorMsg = error.response.data.error;
            setUrl(errorMsg);
            console.log("error", errorMsg);
        });
    };

    const isError = input.longUrl === "";
    return (
        <Box
            width={ "40%" }
            margin={ "auto" }
            boxShadow="md"
            p="6"
            rounded="md"
            bg="white"
            className={ styles.mainContainer } >
            <FormControl isInvalid={ isError }>
                <FormLabel >Enter a Long URL to Make a ShortURL</FormLabel>
                <Input
                    id="longUrl"
                    type="url"
                    value={ input.longUrl }
                    placeholder="Paste here Your Long Url"
                    onChange={ handleInputChange }
                    onKeyDown={ handleEnter }
                />
                { !isError ? (
                    <FormHelperText>Enter your Long Url</FormHelperText>
                ) : (
                    <FormErrorMessage>URL is required.</FormErrorMessage>
                ) }
            </FormControl>
            <FormLabel mt={ 7 } fontSize='md'>Customize Your ShortURL link(optional)</FormLabel>
            <InputGroup size='md' className={ styles.InputGroup }>
                <InputLeftAddon children={ `${clientBaseUrl}` } className={ styles.BaseUrlAddon } w='50%' />
                <Input placeholder='site name/urlCode ' id="urlCode"
                    type="text"
                    value={ input.urlCode }
                    onChange={ handleInputChange }
                    w='50%'
                    onKeyDown={ handleEnter }
                />
            </InputGroup>
            <Button type="submit" colorScheme="blue" m={ 5 } onClick={ handleSubmit }>
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
