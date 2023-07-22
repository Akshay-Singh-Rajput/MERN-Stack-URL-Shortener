import React from 'react'
import { Heading, Text } from "@chakra-ui/react";
import { InputForm } from "./components/InputForm";
export default function Homepage() {
  return (
    <>
          <Heading as="h3" size="xl" m={ '3% 0% 2% 0%' }>
        URL Shortener
          </Heading>
          <InputForm />
          <Text m={ '3%' }>Made with ❤️ by Me ( <a target="_blank" href="https://akshay-kumar-portfoilo.netlify.app/"> Akshay Kumar</a>)</Text>
    </>
  )
}
