import { Text, VStack } from "native-base";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Notification } from "../components/Notification";

export const Home = () => {
  return (
    <VStack flex={1} bgColor="#333333" p={3}>
      <Header />
      <Content />
      <Notification />
    </VStack>
  );
};
