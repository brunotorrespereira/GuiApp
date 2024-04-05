

import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import api from '../../services/api';



interface Filme {
  id: number;
  nome: string;
  foto: string;
  sinopse: string;
  
}



interface PesquisaProps {
  adicionarFilme: (filme: Filme) => void;
}

const Pesquisa: React.FC<PesquisaProps> = ({ adicionarFilme }) => {
  const [nome, setNome] = useState('');
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme | null>(null);

  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);


  const handlePesquisarFilme = async () => {
    try {
      const response = await api.get(`r-api/?api=filmes&nome=${nome}`);
      const filmesFiltrados: Filme[] = response.data.filter((filme: Filme) =>
        filme.nome.toLowerCase().includes(nome.toLowerCase())
        )
      
      setFilmes(filmesFiltrados);
    } catch (error) {
      console.error('Erro ao pesquisar filme:', error);
    }
  };

  // const handleLeiaMais = (filme: Filme) => {
  //   setFilmeSelecionado(filme);
  //   setModalVisible(true);
  // };

  const handleSelecionarImagem = (foto: string) => {
    setImagemSelecionada(foto);
  };

  

  return (
    <View style={styles.container}>

      <View style={styles.viewInput}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme"
        onChangeText={(text) => { 
          if(text.length > 0){
            setNome(text)
          }else {
             setNome('')
             handlePesquisarFilme()
            }}
        }
        value={nome}
      />
    
    <TouchableOpacity style={styles.botao} onPress={handlePesquisarFilme}>
     <Text style={styles.botaoTexto}>Search</Text>
    </TouchableOpacity>

    </View>
    {imagemSelecionada === null ? (
      <FlatList
        data={filmes}
         renderItem={({ item }) => (
         <TouchableOpacity onPress={() => handleSelecionarImagem(item.foto)}>
          <View style={styles.itemContainer}>
        <Image source={{ uri: item.foto }} style={styles.itemImage} />
        <Text style={styles.titulo}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
    )}
      />
      ): (
       <View style={styles.itemContainer2}>
        <Image source={{ uri: imagemSelecionada}} style={styles.imagemSelecionada} />
        <TouchableOpacity style={styles.voltarBotao} onPress={() => setImagemSelecionada(null)}>
        <Text style={styles.titulo2}>voltar</Text>
        </TouchableOpacity>
      </View>
      )
         }
    </View>
    
 )}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
  
    paddingTop: 20,
    backgroundColor:'#191a1b',
    
  },
  input: {
    width:300,
    height:45,
    borderColor:'gray',
    borderWidth: 1,
    padding:10,
    color:'#f5f5f5',
    marginLeft:8,
    marginTop:20
  
  },
  itemContainer: {
    alignItems:'center',
    marginBottom: 5,
    paddingHorizontal: 10,
    flexDirection:'row'
  },
  itemImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  viewInput:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20

  },
  botao:{
    backgroundColor:'#00FF00',
    height:45,
    width:95,
    opacity:1,
    padding:10,
    marginLeft:4,
    borderTopLeftRadius:5,
    borderTopEndRadius:5,
    marginTop:20
  },
    
  itemContainer2:{
    alignItems:'center',
    marginBottom: 5,
    paddingHorizontal: 10,
    flexDirection:'row'
  },
  botaoTexto:{
    color:'#000',
    textAlign:'center',
    fontSize:18
  },
  lista:{
    
  },
  titulo:{
    color:'#fff',
    fontSize:18,
    // textAlign:'center',
    // marginTop:7
  
  },

 imagemSelecionada:{
    width: 200, 
    height: 200, 
    resizeMode: 'cover', 
 },
 voltarBotao:{
  height:40,
  width:80,
  backgroundColor:'#00FF00',
  marginLeft:40,
  borderRadius:4,
  
 },
 titulo2:{
  color:'#000',
  textAlign:'center',
  marginTop:7
 }
  
});

export default Pesquisa;

















