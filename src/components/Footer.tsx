import { Button, Text, VStack, IButtonProps } from "native-base";
import React from "react";

export function Footer({ ...rest }: IButtonProps) {
  return (
    <VStack position="absolute" bottom={0} right={0} left={0} p="3">
      <Button
        w="100%"
        rounded={"xl"}
        justifyContent="center"
        alignItems="center"
        bgColor="yellow.500"
        {...rest}
      >
        <Text color="white" bold fontSize="lg">
          Calcular
        </Text>
      </Button>
    </VStack>
  );
}
