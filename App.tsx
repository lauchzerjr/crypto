import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Home } from "./src/pages/Home";
import { ValuesContextProvider } from "./src/contexts/ValuesContext";

const App = () => {
  return (
    <NativeBaseProvider>
      <ValuesContextProvider>
        <StatusBar style="light" />
        <Home />
      </ValuesContextProvider>
    </NativeBaseProvider>
  );
};

export default App;
