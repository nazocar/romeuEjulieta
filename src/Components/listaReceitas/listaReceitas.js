import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../Detalhes';

function ListarReceitas( data ){

    const [ verModal, setVerModal ] = useState(false);

    return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={ () => setVerModal(true)}>
                        <Image source={{uri: data.imagem}} style={styles.img} />
                        <Text style={styles.name}>{ data.nome }</Text>
                    </TouchableOpacity>

                    <Modal animationType='slide' visible={verModal} transparent={ true }>
                        <Detalhes receita={ data } voltar={ () => setVerModal(false)} />
                    </Modal>
                </View>
    );
};

export default ListarReceitas;

const styles = StyleSheet.create({
    container:{
        paddingBottom: 20
        
    },

    img:{
        width: 350,
        height: 300,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },


    name:{
        fontSize: 17,
        fontWeight: 'bold',
        flex: 1,
        padding: 9,
        backgroundColor: '#B65151',
        color: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -38,
        textAlign: 'center'
    },

})