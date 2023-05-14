import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Keyboard } from 'react-native';
import Memes from '../apis/Memes';
import homeStyles from '../styles/homeStyles';
import configIcon from '../../assets/bitmap.png';
import searchIcon from '../../assets/search.png';
import FlatListHome from './FlatListHome';
import SearchBar from '../forms/SearchBar';
import CargaDatos from '../forms/CargaDatos';

type Props = {
  navigation: any;
};

const icons = {
  config: configIcon,
  search: searchIcon,
};

const Home: React.FC<Props> = ({ navigation }) => {
  const [textSearch, setTextSearch] = useState<string>('');
  const [pag, setPag] = useState<number>(-1);

  const llamadasApi = (): Promise<any> => {
    setPag(pag + 1);
    return Memes.listarConFiltro(textSearch, pag);
  };

  const Header = () => {
    return (
      <View style={homeStyles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('AccessCamera')}>
          <Image source={icons.config} style={homeStyles.icon} onPress={() => Keyboard.dismiss()} />
        </TouchableOpacity>
        <SearchBar
          search={textSearch}
          setSearch={(val: string) => {
            Keyboard.dismiss();
            setTextSearch(val);
          }}
          onPress={() => Keyboard.dismiss()}
        />
      </View>
    );
  };

  const transformacionDatos = (data: any = {}): any[] => {
    if (data !== null && typeof data.data !== 'undefined') {
      return data.data.children
        .filter((v: any) => v.data.post_hint === 'image')
        .map((v: any, key: number) => {
          const { title, url, link_flair_text, Shitposting, score, num_comments, post_hint } = v.data;
          return { title, url, link_flair_text, Shitposting, score, num_comments, id: key };
        });
    } else {
      return [];
    }
  };

  return (
    <CargaDatos
      transformacionDatos={transformacionDatos}
      api={llamadasApi}
      textSearch={textSearch}
      Header={Header}
      navigation={navigation}
      FlatList={FlatListHome}
      onPress={() => Keyboard.dismiss()}
    />
  );
};

export default Home;