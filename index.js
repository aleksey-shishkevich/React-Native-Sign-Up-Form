/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

console.disableYellowBox = true;
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);