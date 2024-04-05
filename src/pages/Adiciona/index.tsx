

import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback,Keyboard  } from 'react-native';
import { userSchema } from '../../zod';
// import { number, string } from 'zod';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Adiciona: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroValidacao, setErroValidacao] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleSubmit = () => {
  const senhaNumerica = parseInt(senha)

    const formData = {
      email: email,
      senha: senhaNumerica,
    };


    const validationResult = userSchema.safeParse(formData);

    if (validationResult.success) {
      
      if (email === 'brunopt@live.com' && senha ===  '123456') {
        console.log('Formulário válido:', validationResult.data);
        setErroValidacao('');
        setEmail('');
        setSenha('');

      } else {
        console.log('Erro de validação: Email ou senha inválidos');
        setErroValidacao('Email ou senha inválidos');
      }

    } else {
      console.log('Erro de validação:', validationResult.error);
      setErroValidacao(validationResult.error.message);
    }
  };


  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
   
  const handleToggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };


  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
      <Text style={styles.comecar}>Começar</Text>
      <Text style={styles.entrar}>Entrar</Text>
      <Text style={styles.texto}>Digite o endereço de e-mail e a senha de sua conta Max ou HBO Max</Text>

      <Text style={styles.titulo}>Endereço de e-mail</Text>
      <TextInput
        placeholder="Digite seu Email..."
        placeholderTextColor="grey"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <Text style={styles.titulo}>Senha</Text>

      <View>
      <TextInput
        placeholder="Digite sua Senha"
        placeholderTextColor="grey"
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        secureTextEntry={!senhaVisivel}
      />
      <TouchableOpacity onPress={handleToggleSenhaVisivel} style={styles.iconContainer}>
            <Icon name={senhaVisivel ? 'visibility' : 'visibility-off'} size={20} color="grey" />
          </TouchableOpacity>

      </View>

      <Text style={styles.senha}>Esqueceu a senha?</Text>

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      {erroValidacao !== '' && (
      <Text style={styles.erro}>{erroValidacao}</Text>
      )}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191a1b',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 10,
    margin: 10,
    borderRadius: 4,
    color: '#fff',
    fontSize: 18
  },
  titulo: {
    color: '#fff',
    fontSize: 18,
    margin: 10
  },
  botao: {
    width: 380,
    height: 55,
    backgroundColor: '#f3eeee',
    borderRadius: 8,
    marginLeft: 10,
    marginTop: 35
  },
  botaoTexto: {
    textAlign: 'center',
    marginTop: 13,
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    fontStyle: 'italic'
  },
  comecar: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 50,
    fontSize: 40,
    fontWeight: '700'
  },
  entrar: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 20,
    color: '#faefef',
    margin: 20
  },
  senha: {
    color: '#1E90FF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10
  },
  erro: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
    textAlign:'center'
    
  },
  inpuContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer:{
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    marginRight:10
  }
});

export default Adiciona;





















