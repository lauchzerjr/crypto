import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

import { Btc } from "../pages/Btc";
import { Eth } from "../pages/Eth";
import { useTheme } from "native-base";

export const TabRoutes = () => {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.gray[600],
        tabBarActiveTintColor: colors.gray[100],
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: colors.gray[900],
        },
      }}
    >
      <Screen
        name="home"
        component={Btc}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="btc" color={color} size={size} />
          ),
          tabBarLabel: "Bitcoin",
        }}
      />
      <Screen
        name="profile"
        component={Eth}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="ethereum" color={color} size={size} />
          ),
          tabBarLabel: "Ethereum",
        }}
      />
      {/* <Screen
        name="sport"
        component={Sport}
        options={{ tabBarButton: () => null }}
      /> */}
    </Navigator>
  );
};
