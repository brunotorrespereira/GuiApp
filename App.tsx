
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import api from './src/services/api';
import Filmes from './src/Filmes'; 

import Icon from 'react-native-vector-icons/MaterialIcons'
  

 
// import FilmesList from './src/pages/FilmesList'
import Pesquisa from './src/pages/Pesquisa';
import Adiciona from './src/pages/Adiciona';
import SplashScreen from './src/SplashScreen';

interface Filme {
  id: number;
  nome: string;
  foto: string;
  sinopse: string;
}


const Tab = createBottomTabNavigator();

const icons = {
  Filmes:{
    name: 'home'
  },
  Pesquisa: {
    name:'search'
  },
  Adiciona:{
    name: 'add-circle-outline'
  }
}

const App: React.FC = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true)



  if(loading){
  return (
    <SplashScreen loadFunction={async () => {
      try {
        const response = await api.get('r-api/?api=filmes');
        setFilmes(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      }
    }} />
  )

}else{
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) =>({
          tabBarIcon: ({ color, size}) => {
            const {name} = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })}
        >        
        <Tab.Screen name="Filmes" options={{ title: 'Filmes' }}>
            {() => (
              <View style={styles.container}>
              <FlatList
                data={filmes}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Filmes data={item} />}
              />
            </View>
          )}
        </Tab.Screen>
          <Tab.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false}} />
          <Tab.Screen name="Adiciona" component={Adiciona} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#191a1b',
  },
});

export default App;


















{/* // import React from 'react';
// import { View,Text } from 'react-native';
// import {} from './src/zod'

// const App: React.FC = () => { */}
{/* //   return (
//    <View>
//     <Text>BRUNO</Text>
//    </View>
//   );
// }

// export default App; */}




{/* <Tab.Screen name="Filmes" options={{ title: 'Filmes' }}>
            {() => ( */}



        // loading //

        // useEffect(() => {
        //   async function loadFilmes() {
        //     try {
        //       const response = await api.get('r-api/?api=filmes');
        //       setFilmes(response.data);
        //       setLoading(false)
        //     } catch (error) {
        //       console.error('Erro ao carregar filmes:', error);
        //     }
        //   }
        //   loadFilmes();
      
        // }, []);
      
      
        // if(loading){
        //   return(
        //     <View style={{ alignItems: 'center', justifyContent: 'center', flex:1}}>
        //          <ActivityIndicator color='#121212' size={45}/>
        //     </View>
            
        //   )
        // }else{
      






