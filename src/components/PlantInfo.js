//new 1 start

import React, { memo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const PlantInfo = memo(({ info, isPlant }) => {
  if (info.name == undefined) return;
  // console.log('isPlant:', info.name,'======>',isPlant);
  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeInUp.delay(200)}>
        <Text style={styles.name}>{info.name}</Text>
        {Object.entries(info).map(([key, value], index) => {
          if (key !== 'name' && key !== 'isPlant') {
            return (
              <Animated.View key={key} style={styles.section} entering={FadeInUp.delay(200 * (index + 1))}>
                <Text style={styles.sectionTitle}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                <Text style={styles.text}>{value}</Text>
              </Animated.View>
            );
          }
        })}
      </Animated.View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});

export default PlantInfo;



//new 1 end










//old 1 start

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Animated, { FadeInUp } from 'react-native-reanimated';

// const PlantInfo = ({ info, isPlant }) => {
//   return (
//     <ScrollView style={styles.container}>
//       <Animated.View entering={FadeInUp.delay(200)}>
//         <Text style={styles.name}>{info.name}</Text>
        
//         {Object.entries(info).map(([key, value], index) => {
//           if (key !== 'name' && key !== 'isPlant') {
//             return (
//               <Animated.View key={key} style={styles.section} entering={FadeInUp.delay(200 * (index + 1))}>
//                 <Text style={styles.sectionTitle}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
//                 <Text style={styles.text}>{value}</Text>
//               </Animated.View>
//             );
//           }
//         })}
//       </Animated.View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     padding: 20,
//     marginTop: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2E7D32',
//     marginBottom: 15,
//   },
//   section: {
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#4CAF50',
//     marginBottom: 5,
//   },
//   text: {
//     fontSize: 16,
//     color: '#333',
//     lineHeight: 22,
//   },
// });

// export default PlantInfo;