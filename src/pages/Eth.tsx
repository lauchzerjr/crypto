import { VStack } from "native-base";
import { useEffect, useState } from "react";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Eth = () => {
  const [pricesEth, setPricesEth] = useState("");

  const fetchData = async () => {
    // Faz uma solicitação HTTP à API para obter a cotação do Ethereum
    const responseETH = await fetch(
      "https://api.coinbase.com/v2/prices/ETH-USD/spot"
    );
    const dataETH = await responseETH.json();
    const ethereumPrice = dataETH.data.amount;

    // Atualiza o estado com as cotações do Bitcoin e do Ethereum
    setPricesEth(ethereumPrice);
  };

  useEffect(() => {
    fetchData();

    // Executa a função a cada 10 segundos
    const interval = setInterval(fetchData, 10000);

    // Cancela o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [pricesEth]);

  return (
    <VStack flex={1} bgColor="#333333" p={3}>
      <Header price={pricesEth} icon="ethereum" nameCrypto="ETH" />
      <Content nameCrypto="ETH" />
      <Footer />
    </VStack>
  );
};
