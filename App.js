// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next: React Native
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
// import React from 'react'
// import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, Alert } from 'react-native'

// const { width } = Dimensions.get('window')

// export default CallScreen = () => {
//   const user = {
//     id: 1,
//     name: 'Mark Johnson',
//     image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
//   }

//   const clickEventListener = () => {
//     Alert.alert('Message', 'button clicked')
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.topBar}>
//         <View style={{ flexDirection: 'row' }}>
//           <Image
//             style={[styles.iconImg, { marginRight: 50 }]}
//             source={{ uri: 'https://img.icons8.com/color/48/000000/video-call.png' }}
//           />
//           <Text style={styles.subText}>WHATSAPP CALL</Text>
//         </View>
//         <Text style={styles.title}>{user.name}</Text>
//         <Text style={styles.subText}>CALLING</Text>
//       </View>
//       <TouchableOpacity
//         style={[styles.btnStopCall, styles.shadow]}
//         onPress={() => clickEventListener()}>
//         <Image
//           style={styles.iconImg}
//           source={{ uri: 'https://img.icons8.com/windows/32/000000/phone.png' }}
//         />
//       </TouchableOpacity>
//       <Image style={[styles.image]} source={{ uri: user.image }} />
//       <View style={styles.bottomBar}>
//         <TouchableOpacity
//           style={[styles.btnAction, styles.shadow]}
//           onPress={() => clickEventListener()}>
//           <Image
//             style={styles.iconImg}
//             source={{ uri: 'https://img.icons8.com/material-rounded/48/000000/speaker.png' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.btnAction, styles.shadow]}
//           onPress={() => clickEventListener()}>
//           <Image
//             style={styles.iconImg}
//             source={{
//               uri: 'https://img.icons8.com/material-outlined/48/000000/block-microphone.png',
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   topBar: {
//     backgroundColor: '#075e54',
//     height: 140,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   image: {
//     width,
//     height: 400,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#e20e30',
//     marginTop: 250,
//   },
//   bottomBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#075e54',
//     flex: 1,
//   },
//   title: {
//     color: '#f0efef',
//     fontSize: 36,
//   },
//   subText: {
//     color: '#c8c8c8',
//     fontSize: 14,
//   },
//   iconImg: {
//     height: 32,
//     width: 32,
//     alignSelf: 'center',
//   },
//   btnStopCall: {
//     height: 65,
//     width: 65,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 32,
//     backgroundColor: '#FF0000',
//     position: 'absolute',
//     bottom: 160,
//     left: '40%',
//     zIndex: 1,
//   },
//   btnAction: {
//     height: 45,
//     width: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 22,
//     backgroundColor: '#fff',
//   },
//   shadow: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 10,
//   },
// })

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PlantCareScheduler from './src/screens/PlantCareScheduler';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Plant Identifier' }}
        />
         <Stack.Screen 
          name="PlantCareScheduler" 
          component={PlantCareScheduler} 
          options={{ title: 'Plant Care Scheduler' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;