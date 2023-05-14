import { StyleSheet } from 'react-native';
const homeStyles = StyleSheet.create({
    icon: {
      position: 'absolute',
      top: -18,
      left: 0,
      width: 29,
      height: 29,
    },
    searchInput:{
        height: 45,
        paddingLeft: 30,
        paddingTop : 10,
        fontSize : 18,
        fontFamily : 'ABeeZee'
    },
    iconSearch: {
        position: 'absolute',
        top: 14,
        left: 8,
        width: 19,
        height: 19,
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
      paddingBottom : 50,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    searchBar: {
      flex: 1,
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: '#EDEDED',
      borderRadius: 5,
      top: '10%',
      backgroundColor : '#EDEDED',
      color : "#636363",
      fontSize: 20
    },
    cardContainer:{
        width : '100%',
        padding : 10
    },
    card: {
        borderWidth: 0.5,
        borderColor: '#ccc',
        width: '100%',
        height: 400,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 8,
        borderTopEndRadius : 16,
        borderBottomEndRadius : 15,
        borderTopLeftRadius : 15,
        borderBottomLeftRadius : 15,
        justifyContent: 'center' // centrar verticalmente los elementos dentro de la tarjeta
      }
      ,
    imageContainer: {
      flex: 0.6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '98%',
      height: '100%',
      resizeMode: 'cover',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    textContainer: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight : 1
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 23,
      marginLeft : 55
    },
    
    iconContainer: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      width : 24,
      height : 68,
      marginLeft : 22,
      top : -140
    },
    arrowUp : {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 29,
      height: 29,
    },
    arrowDown : {
        position: 'absolute',
        top: 50,
        left: 0,
        width: 29,
        height: 29,
    },
    numberArrow : {
        position: 'absolute',
        top: 24,
        left: 2,
        width: 29,
        height: 29,
        fontSize: 24,
        justifyContent: 'center',
        alignItems : 'center',
        color : '#9B9B9B'
    },
    likeIcon : {
        position: 'absolute',
        top: -95,
        left: 50,
        width: 50,
        height: 50,
    },
    numberLike : {
        position: 'absolute',
        top: -88,
        left: 95,
        width: 40,
        height: 40,
        fontSize: 24,
        fontWeight: 'bold',
        color : '#9B9B9B'
    },
  });
  
  export default homeStyles;
  