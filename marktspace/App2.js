import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const MyScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Boas vindas!</Text>
      <Text style={[styles.text, styles.centerText]}>Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
      <Image source={require('./assets/logoCadastro.png')} style={styles.image} />
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-Mail" />
      <TextInput style={styles.input} placeholder="Telefone" />
      <TextInput style={styles.input} placeholder="Senha" />
      <TextInput style={styles.input} placeholder="Confirmar senha" />
      <Button title="Enviar" onPress={() => console.log('Botão clicado')} style={[styles.input, styles.pinkButton]} />
      <Text style={styles.text}>Ja tem uma conta?</Text>
      <Button title="Botão com Placeholder" onPress={() => console.log('Botão com espaço reservado clicado')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 35,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    marginVertical: 10,
  },
  centerText: {
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  pinkButton: {
    backgroundColor: 'pink',
  },
});

export default MyScreen;

