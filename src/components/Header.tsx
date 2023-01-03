import React, { useState, useEffect } from "react";
import { Center, Heading, HStack, Spinner, Text, VStack } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useValues } from "../hooks/useValues";

export const Header = () => {
  const {prices, setPrices} = useValues()

  const fetchData = async () => {
    // Faz uma solicitação HTTP à API para obter a cotação do Bitcoin
    const responseBTC = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
    );
    const dataBTC = await responseBTC.json();
    const bitcoinPrice = dataBTC.bpi.USD.rate;

    // Faz uma solicitação HTTP à API para obter a cotação do Ethereum
    const responseETH = await fetch(
      "https://api.coinbase.com/v2/prices/ETH-USD/spot"
    );
    const dataETH = await responseETH.json();
    const ethereumPrice = dataETH.data.amount;

    // Atualiza o estado com as cotações do Bitcoin e do Ethereum
    setPrices({ bitcoin: bitcoinPrice, ethereum: ethereumPrice });
  };

  useEffect(() => {
    fetchData();

    // Executa a função acima a cada 10 segundos
    const interval = setInterval(fetchData, 10000);

    // Cancela o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [prices]);

  return (
    <VStack bgColor="#333333" mt={"10"} mb="3">
      {prices.bitcoin ? (
        <HStack alignItems="center" justifyContent="space-between">
          <Center
            w="48%"
            borderWidth="2"
            p={2}
            borderRadius={"xl"}
            bgColor="#555555"
          >
            <Text color="white" fontSize="2xl">
              <FontAwesome5 name="btc" size={24} color="white" /> BTC agora:
            </Text>
            <Text color="white" bold fontSize="lg">
              US$ {prices.bitcoin}
            </Text>
          </Center>

          <Center
            w="48%"
            borderWidth="2"
            p={2}
            borderRadius={"xl"}
            bgColor="#555555"
          >
            <Text color="white" fontSize="2xl">
              <FontAwesome5 name="ethereum" size={24} color="white" /> ETH
              agora:
            </Text>
            <Text color="white" bold fontSize="lg">
              US$ {prices.ethereum.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </Center>
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
