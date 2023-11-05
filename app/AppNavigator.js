import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Hello from '../components/storebut';
import YesNext from '../components/purchase';

const AppNavigator = createStackNavigator(
  {
    Hello: { screen: Hello },
    YesNext: { screen: YesNext },
  },
  {
    initialRouteName: 'Hello',
  }
);

export default createAppContainer(AppNavigator);