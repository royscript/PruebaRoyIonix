import { View, Text, Image } from 'react-native';
import solicitudesStyles from '../styles/solicitudesStyles';
import noDataImage from '../../assets/artworkNoData.png';
const images = {
    noData : noDataImage
}
const NoResults = ()=>{
    return (
        <View style={solicitudesStyles.container}>
            <View style={solicitudesStyles.section}>
                <View style={solicitudesStyles.imageContainer}>
                    { images&&(
                        <Image source={images.noData} style={solicitudesStyles.image} />
                    ) }
                </View>
            </View>
            <View style={solicitudesStyles.section}>
                <View style={solicitudesStyles.titleContainer}>
                    <Text style={solicitudesStyles.title}>No Results</Text>
                </View>
            </View>
            <View style={solicitudesStyles.section}>
                <View style={solicitudesStyles.textContainer}>
                    <Text style={solicitudesStyles.text}>Sorry, there are no results for this search. Please, try another phrase</Text>
                </View>
            </View>
        </View>
    )
}
export default NoResults;