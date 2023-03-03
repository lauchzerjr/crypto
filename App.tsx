import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Routes } from "./src/routes";

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <Routes />
    </NativeBaseProvider>
  );
};

export default App;
