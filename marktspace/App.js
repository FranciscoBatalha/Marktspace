import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>marktspace</Text>
        <Text style={styles.subtitle}>Seu espaço de compra e venda</Text>
        <Text style={styles.prompt}>Acesse sua conta</Text>
        <TextInput
          style={styles.input}
          placeholder="E-Mail"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Lógica para lidar com o pressionamento do botão
            }}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Ainda não tem acesso?</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            // Lógica para lidar com o pressionamento do botão de cadastro
          }}
        >
          <Text style={styles.signupButtonText}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 40,
    paddingLeft: 50,
    paddingRight: 50,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 60,
  },
  prompt: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '250px',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;



