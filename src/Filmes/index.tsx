
// import React from 'react';
// import { View,Text } from 'react-native';

// export default function Filmes({data}) {
//  return (
//    <View>
//       <Text>{data.nome}</Text>
//    </View>
//   );
// }

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Detalhes from '../Detalhes';


interface FilmeProps {
  data: {
    nome: string;
  };
}

const Filmes: React.FC<FilmeProps> = ({ data }) => {
  const [visibleModal, setVisibleModal]  = useState(false)

  return (
    <View>

        <View style={styles.card}>
           <Text style={styles.titulo}>{data.nome}</Text>

           <Image
           source={{ uri: data.foto}}
           style={styles.capa}
           />
           <View style={styles.areaBotao}>
             <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
                <Text style={styles.botaoTexto}>Leia Mais</Text>
             </TouchableOpacity>
           </View>
           <Modal transparent={true} animationType='slide' visible={visibleModal}>
             <Detalhes filmes={data} voltar={() => setVisibleModal(false)}/>

           </Modal>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#fff',
    margin:15,
    elevation: 2
  },
  titulo:{
    padding:15,
    fontSize:18
  },
  capa:{
    height:250,
    zIndex:2
  },
  areaBotao:{
    alignItems:'flex-end',
    marginTop:-45,
    zIndex:9
  },
  botao:{
    width:100,
    backgroundColor:'#09a6ff',
    opacity:1,
    padding:8,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5
  },
  botaoTexto:{
    color:'#fff',
    textAlign:'center'
  }
});

export default Filmes;
