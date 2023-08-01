import React, { useState } from "react";
import { AuthStack, RootStack } from "./src/routes/routes";

function Main() {
  const [user] = useState(true);
  return user ? (
    <RootStack userType={"client"} name={"Miendjem"} />
  ) : (
    <AuthStack />
  );
}

export default Main;
