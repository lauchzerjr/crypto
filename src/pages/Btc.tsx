import { VStack } from "native-base";
import { useEffect, useState } from "react";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Btc = () => {
  const [pricesBtc, setPricesBtc] = useState("");

  const fetchData = async () => {
    // Faz uma solicitação HTTP à API para obter a cotação do Bitcoin
    const responseBTC = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
    );
    const dataBTC = await responseBTC.json();
    const bitcoinPrice = dataBTC.bpi.USD.rate;

    // Atualiza o estado com as cotações do Bitcoin e do Ethereum
    setPricesBtc(bitcoinPrice);
  };

  useEffect(() => {
    fetchData();

    // Executa a função a cada 10 segundos
    const interval = setInterval(fetchData, 50000);

    // Cancela o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [pricesBtc]);

  return (
    <VStack flex={1} bgColor="#333333" p={3}>
      <Header price={pricesBtc} icon="btc" nameCrypto="BTC" />
      <Content nameCrypto="BTC" />
      <Footer />
    </VStack>
  );
};
