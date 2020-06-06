import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings63058Navigator from '../features/Settings63058/navigator';
import NotificationList63057Navigator from '../features/NotificationList63057/navigator';
import Maps63056Navigator from '../features/Maps63056/navigator';
import UserProfile63055Navigator from '../features/UserProfile63055/navigator';
import Maps63036Navigator from '../features/Maps63036/navigator';
import Settings63014Navigator from '../features/Settings63014/navigator';
import Settings62999Navigator from '../features/Settings62999/navigator';
import NotificationList62998Navigator from '../features/NotificationList62998/navigator';
import Maps62997Navigator from '../features/Maps62997/navigator';
import UserProfile62996Navigator from '../features/UserProfile62996/navigator';
import Maps62977Navigator from '../features/Maps62977/navigator';
import Settings62955Navigator from '../features/Settings62955/navigator';
import Settings62940Navigator from '../features/Settings62940/navigator';
import NotificationList62939Navigator from '../features/NotificationList62939/navigator';
import Maps62938Navigator from '../features/Maps62938/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings63058: { screen: Settings63058Navigator },
NotificationList63057: { screen: NotificationList63057Navigator },
Maps63056: { screen: Maps63056Navigator },
UserProfile63055: { screen: UserProfile63055Navigator },
Maps63036: { screen: Maps63036Navigator },
Settings63014: { screen: Settings63014Navigator },
Settings62999: { screen: Settings62999Navigator },
NotificationList62998: { screen: NotificationList62998Navigator },
Maps62997: { screen: Maps62997Navigator },
UserProfile62996: { screen: UserProfile62996Navigator },
Maps62977: { screen: Maps62977Navigator },
Settings62955: { screen: Settings62955Navigator },
Settings62940: { screen: Settings62940Navigator },
NotificationList62939: { screen: NotificationList62939Navigator },
Maps62938: { screen: Maps62938Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
