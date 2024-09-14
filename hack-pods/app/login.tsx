import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt with:', email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/LoginAssets/Logo.png')} style={styles.logo} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A1A1A1"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A1A1A1"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        
        {/* Custom Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.socialLogin}>
          <TouchableOpacity onPress={() => console.log('Login with Google')}>
            <Image source={require('../assets/LoginAssets/Google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Login with GitHub')}>
            <Image source={require('../assets/images/icon.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink} onPress={() => console.log('Navigate to Signup')}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B207',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B207',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
    padding: 20,
    alignItems: 'center',
    paddingTop: 35,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    color: '#A1A1A1',
  },
  loginButton: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#00B207',
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    color: '#00B207',
    fontWeight: 'bold',
  },
});

export default LoginPage;
