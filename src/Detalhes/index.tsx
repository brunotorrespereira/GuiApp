
// import React from 'react';
// import { View,Text, StyleSheet } from 'react-native';

// export default function Modal() {
//  return (
//    <View>
//    <Text>Detalhes do Filme</Text>
//    </View>
//   );
// }

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface DetalhesProps {
  visible: boolean;
}

const Detalhes: React.FC<DetalhesProps> = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.modalContainer}>

        <TouchableOpacity style={styles.btnVoltar} onPress={ props.voltar}>
          <Text style={{color:'#fff',fontSize:16}}>Voltar</Text>
        </TouchableOpacity>


        <Text style={styles.titulo}>{props.filmes.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.filmes.sinopse}</Text>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:10,
    alignItems:'center',
    justifyContent:'flex-end'
  },
  modalContainer:{
    width:'90%',
    height:'80%',
    backgroundColor:'#121212',
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  btnVoltar:{
    backgroundColor:'#E52246',
    padding:10,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  titulo:{
    textAlign:'center',
    color:'#fff',
    padding:10,
    fontSize:28,
    fontWeight:'bold'
  },
  sinopse:{
    color:'#fff',
    fontSize:18,
    marginBottom:8,
    marginLeft:10
  },
  descricao:{
    color:'#fff',
    marginLeft:10,
    marginRight:10,
  }

});

export default Detalhes;
