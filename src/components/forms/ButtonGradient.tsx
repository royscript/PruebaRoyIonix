import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const font = Platform.select({
  ios: 'HelveticaNeueRegular',
  android: 'HelveticaNeueRegular',
});

const ButtonGradient = ({ title = '', onPress = ()=>true }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={['#FF8960', '#FF62A5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    padding: 10,
    margin: 10,
    width : 185,
    height : 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    textAlign: 'center',
  },
  container : {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ButtonGradient;
