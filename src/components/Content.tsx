import {
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Input,
  Text,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

type ContentProps = {
  nameCrypto: string;
};

export const Content = ({ nameCrypto }: ContentProps) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" w="100%">
      <Center p="2" w="100%">
        <Text color="white" fontSize="lg" mb="1.5">
          Por quanto você comprou {nameCrypto}?
        </Text>
        <Input
          mb="2"
          keyboardType="numeric"
          placeholder="Valor em dolar"
          color="white"
          fontSize="sm"
          leftElement={
            <Icon
              as={<FontAwesome name="dollar" />}
              color="white"
              size={"lg"}
              ml="1.5"
            />
          }
        />
        <Text color="white" fontSize="lg" mb="1.5">
          Por quanto quer vender {nameCrypto}?
        </Text>
        <Input
          mb="2"
          keyboardType="numeric"
          placeholder="Porcentagem"
          color="white"
          fontSize="sm"
          maxLength={3}
          rightElement={
            <Icon
              as={<FontAwesome name="percent" />}
              color="white"
              size={"lg"}
              mr="1.5"
            />
          }
        />
        <Text color="white" fontSize="lg" mb="1.5">
          Por quanto quer comprar {nameCrypto}?
        </Text>
        <Input
          mb="2"
          keyboardType="numeric"
          placeholder="Porcentagem"
          color="white"
          fontSize="sm"
          maxLength={3}
          rightElement={
            <Icon
              as={<FontAwesome name="percent" />}
              color="white"
              size={"lg"}
              mr="1.5"
            />
          }
        />
        {/* <Button w="100%">
          <Text color="white" bold fontSize="lg">
            Calcular
          </Text>
        </Button> */}
      </Center>

      {/* <Divider orientation="vertical" mx="1" w="0.5" color="white" />

      <Center p="2" w="46%">
        <Text color="white" fontSize="md">
          Por quanto você comprou ETH?
        </Text>
        <Input
          mb="2"
          keyboardType="numeric"
          placeholder="Valor em dolar"
          color="white"
          fontSize="sm"
          maxLength={3}
          leftElement={
            <Icon
              as={<FontAwesome name="dollar" />}
              color="white"
              size={"lg"}
              ml="1.5"
            />
          }
        />
        <Text color="white" fontSize="md">
          Por quanto quer vender ETH?
        </Text>
        <Input
          mb="2"
          keyboardType="numeric"
          placeholder="Porcentagem"
          color="white"
          fontSize="sm"
          maxLength={3}
          rightElement={
            <Icon
              as={<FontAwesome name="percent" />}
              color="white"
              size={"lg"}
              mr="1.5"
            />
          }
        />
        <Text color="white" fontSize="md">
          Por quanto quer comprar ETH?
        </Text>
        <Input
          mb="2"
          keyboardType="numeric"
          placeholder="Porcentagem"
          color="white"
          maxLength={3}
          fontSize="sm"
          rightElement={
            <Icon
              as={<FontAwesome name="percent" />}
              color="white"
              size={"lg"}
              mr="1.5"
            />
          }
        />
        <Button w="100%">
          <Text color="white" bold>
            Calcular
          </Text>
        </Button>
      </Center> */}
    </HStack>
  );
};
