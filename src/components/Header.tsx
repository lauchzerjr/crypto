import React from "react";
import { Heading, HStack, Spinner, Text, VStack } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

type HeaderProps = {
  price: string;
  icon: string;
  nameCrypto: string;
};

export const Header = ({ price, icon, nameCrypto }: HeaderProps) => {
  return (
    <VStack bgColor="#333333" mt={"10"} mb="3">
      {price ? (
        <HStack
          alignItems="center"
          justifyContent="center"
          w="100%"
          borderWidth="2"
          p={2}
          borderRadius={"xl"}
          bgColor="#555555"
        >
          <Text color="white" fontSize="2xl" mr="1.5">
            <FontAwesome5 name={icon} size={24} color="white" /> {nameCrypto}{" "}
            agora:
          </Text>
          <Text color="white" bold fontSize="2xl">
            US$ {price}
          </Text>
        </HStack>
      ) : (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" color="white" />
          {/* <Spinner color="white" size="lg" /> */}
          <Heading color="white" fontSize="md">
            Carregando valores de BTC e ETH
          </Heading>
        </HStack>
      )}
    </VStack>
  );
};
