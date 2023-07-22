import { Button, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";

const Toggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <Flex align="center" justify="center">
                <Button size="lg" onClick={ () => toggleColorMode() }>
                    Toggle { colorMode }
                </Button>
            </Flex>
        </div>
    );
};

export default Toggle;