import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button,input,document } from 'react-native';
import { auth } from '../firebase';



const LoginScreen = () => {


  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const [isVal, setisVal] = useState(true);
  const [isValPas, setisValPas] = useState(true);

  function onInput() {
    console.log(email)
    if (isEmailValid(email)) {

    setisVal(true);
      
    } else {
      
console.log('fail');
setisVal(false);
    }
  }


  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);}



  const handleSignUp = () => {

    if (isEmailValid(email)&&password.length>5) {

      setisVal(true);
      setisValPas(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {

        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        
      })
      .catch(error => alert(error.message))
    }else
    {


    if (isEmailValid(email)){
      setisVal(true);
    }else
    {
      setisVal(false);
      alert('Неверно введённый email');
    }
    if (password.length>5)
    {
      setisValPas(true);
    }
    else
    {
      setisValPas(false);
      alert('Минимальная длина 6 символов');
    }
  }




  }

  const handleLogin = () => {
    
    if (isEmailValid(email)&&password.length>5) {
      setisVal(true);
      setisValPas(true);
      auth
      .signInWithEmailAndPassword(email, password)
     
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert('Убедитесь в верности внесённых данных ' ))
       
      } else
      {


      if (isEmailValid(email)){
        setisVal(true);
      }else
      {
        setisVal(false);
        alert('Неверно введённый email');
      }
      if (password.length>5)
      {
        setisValPas(true);
      }
      else
      {
        setisValPas(false);
        alert('Минимальная длина 6 символов');
      }
    }



      
        
  
  

      
  }


  const [hidePass, setHidePass] = useState(true);

  



  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >



      <View style={styles.inputContainer}>
        <TextInput  id="email"
      keyboardType='email-address'
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
           borderColor={isVal?"green":"red"}


        />

 



<View style={styles.pashidecon}>

        <TextInput style={styles.inputpas}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          borderColor={isValPas?"green":"red"}
          secureTextEntry={hidePass ? true : false}

         />
        

      

        <TouchableOpacity  style={{ 
    
 
    }} onPress={() => setHidePass(!hidePass)} >
     <Image
        style={styles.buttonHide}
        source={require('../pic/3.png')    }
      /> 
        
        </TouchableOpacity>





        </View>
      </View>

      

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>



        
      </View>
    </KeyboardAvoidingView>
  )
}


export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '70%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderWidth:1,
   
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonHide:{
   
    fontWeight: '600',
    fontSize: 16,
    
   
    borderWidth: 1,
    backgroundColor: 'transparent',
      marginLeft:5,
      width: 30,
      height: 30,
      resizeMode: 'contain',
      borderRadius: 30,
    
  
    
    
    


  },
pashidecon:{
  
  flexDirection:'row',
  alignItems: 'center',
},
inputpas:{
  backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width:'100%',
    borderWidth:1,

}


})