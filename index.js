/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
// import App from './App';
import TickTackGame from "./src/tickTackGame";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => TickTackGame);
