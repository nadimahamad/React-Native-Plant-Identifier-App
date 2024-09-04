
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'mr', name: 'Marathi' },
  { code: 'ar', name: 'Arabic' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ur', name: 'Urdu' },
  { code: 'ch', name: 'Chinese' },
];

const LanguageSelector = ({ selectedLanguage, onLanguageChange, onTranslate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Language:</Text>
      <View style={styles.pickerWrapper}>
        {Platform.OS === 'ios' ? (
            <Text>{selectedLanguage}</Text>
        ):(
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => {
            onLanguageChange(itemValue);
            setTimeout(() => {
              onTranslate();
            }, 1000);
          }}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {languages.map((lang) => (
            <Picker.Item key={lang.code} label={lang.name} value={lang.name} />
          ))}
        </Picker>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    width: 250,
  },
  picker: {
    height: 50,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  pickerItem: {
    fontSize: 16,
  },
});

export default LanguageSelector;






// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const languages = [
//   { code: 'en', name: 'English' },
//   { code: 'hi', name: 'Hindi' },
//   { code: 'mr', name: 'Marathi' },
//   { code: 'ar', name: 'Arebic' },
//   { code: 'gu', name: 'Gujarati' },
//   { code: 'ja', name: 'Japanese' },
//   { code: 'ur', name: 'Urdu' },
//   { code: 'ch', name: 'Chinese' },
// ];

// const LanguageSelector = ({ selectedLanguage, onLanguageChange, onTranslate }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Select Language:</Text>
//       <Picker
//         selectedValue={selectedLanguage}
//         onValueChange={(itemValue) => {
//             onLanguageChange(itemValue);
//             setTimeout(() => {
//                 onTranslate();
//             },1000);
        
//         }}
//         style={styles.picker}
//       >
//         {languages.map((lang) => (
//           <Picker.Item key={lang.code} label={lang.name} value={lang.name} />
//         ))}
//       </Picker>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   picker: {
//     height: 50,
//     width: 200,
//     backgroundColor:'light-blue'
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default LanguageSelector;



