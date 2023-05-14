import { View, Image, TextInput, Keyboard  } from 'react-native';
import homeStyles from '../styles/homeStyles';
import searchIcon from '../../assets/search.png';
const icons = {
    search : searchIcon
}
const SearchBar = ({search = '',setSearch = () => null}) => {
    return (
      <View style={homeStyles.searchBar}>
        <Image source={icons.search} style={homeStyles.iconSearch} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={homeStyles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#8E8E93"
          blurOnSubmit={false}
        />
      </View>
    );
  };
  
export default SearchBar;