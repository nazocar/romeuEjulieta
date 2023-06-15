import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Detalhes(props){
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={ props.voltar } >
                    <Text style={styles.texto}>Voltar</Text>
                </TouchableOpacity>
                
                <Text style={styles.titulo}>{ props.receita.nome }</Text>
                <Text style={styles.details}>Categoria: { props.receita.categoria }</Text>
                <Text style={styles.details}>Dificuldade: { props.receita.nivel }</Text>
                <Text style={styles.details}>Tempo de preparo: { props.receita.tempo }</Text>

                <Text style={styles.tituloIngredients}>Ingredientes { props.receita.porcoes }:</Text>
                <Text style={styles.ingredients}>{ props.receita.ingredientes }</Text>

                <Text style={styles.tituloPreparo}>Modo de preparo:</Text>
                <Text style={styles.preparo}>{ props.receita.preparo }</Text>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        marginTop: 30,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    modalContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    btnVoltar:{
        backgroundColor: '#fff',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },


    texto:{
        color: '#B65151',
        fontSize: 14,
        fontWeight: 'bold'
    },

    titulo:{
        textAlign: 'center',
        color: '#000000',
        padding: 10,
        fontSize: 26,
        fontWeight: 'bold',
        letterSpacing: 2,
    },

    details:{
        paddingLeft: 14,
        color: '#000000'
    },

    tituloIngredients:{
        marginTop: 30,
        paddingLeft: 14,
        color: '#7E1F1F',
        fontWeight: 'bold'
    },

    ingredients:{
        marginTop: 10,
        paddingLeft: 14,
        color: '#000000'
    },

    tituloPreparo:{
        marginTop: 30,
        paddingLeft: 14,
        color: '#7E1F1F',
        fontWeight: 'bold'
    },

    preparo:{
        marginTop: 10,
        paddingLeft: 14,
        color: '#000000'
    }
    
});

export default Detalhes;