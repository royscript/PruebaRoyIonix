import { StyleSheet } from 'react-native';
const homeStyles = StyleSheet.create({
    icon: {
      position: 'absolute',
      top: 10,
      left: 10,
      width: 29,
      height: 29,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    searchBar: {
      flex: 1,
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      top: '10%'
    },
    card: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      width: '100%',
      height: 400,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    imageContainer: {
      flex: 0.6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    textContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    description: {
      fontSize: 18,
      textAlign: 'center',
      marginHorizontal: 20,
    },
    iconContainer: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
    },
  });
  
  export default homeStyles;
  