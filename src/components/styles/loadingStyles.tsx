import { StyleSheet } from 'react-native';
const loadingStyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
      },
      logo : {
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
      }
});
export default loadingStyles;