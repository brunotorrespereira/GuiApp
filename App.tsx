
// import React,{useEffect,useState} from 'react';
// import { View, Text,StyleSheet,FlatList} from 'react-native';


// import api from './src/services/api';
// import Filmes from './src/Filmes';

// export default function App() {
// const [filmes, setFilmes] = useState([]);

// useEffect(() => {
//   async function LoadFilmes() {
//     try {
//       const response = await api.get('r-api/?api=filmes');
//       setFilmes(response.data);
//     } catch (error) {
//       console.error('Erro ao carregar filmes:', error);
//     }
//   }
//   LoadFilmes();

// }, []);


//  return (
//    <View style={styles.container}>
      
//       <FlatList
//       data={filmes}
//       keyExtractor={item => String(item.id)}
//       renderItem={({item}) => <Filmes data={item}/>}
      
//       />
//    </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//   }
// })
// useEffect(() => {

//   async function LoadFilmes(){
//    const response = await api.get('r-api/?api=filmes')
//    setFilmes(response.data);
//   }
// LoadFilmes();

// },[])







import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';
 

interface Filme {
  id: number;
  nome: string;
  foto: string;
}

const App: React.FC = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get('r-api/?api=filmes');
        setFilmes(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      }
    }
    loadFilmes();

  }, []);


  if(loading){
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center', flex:1}}>
           <ActivityIndicator color='#121212' size={45}/>
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={item => String(item.id)}
          renderItem={({item}: {item: Filme})  => <Filmes data={item} />}
        />
      </View>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
