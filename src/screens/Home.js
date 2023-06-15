import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ListarReceitas from '../Components/listaReceitas/listaReceitas';
import receitas from '../Components/Receitas/Receitas';

function Home(){
  return(
    <View style={styles.container}>
      <FlatList 
            data = { receitas }
            keyExtractor={ ( item ) => String(item.id) }
            renderItem= { ( { item } ) => <ListarReceitas { ...item } />}        
        />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 30,
    backgroundColor: '#fff'
  },

  title:{
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#1c1c1c'
  }

})