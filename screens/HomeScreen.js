import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, TextInput, Image, Button,Input } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { auth } from '../firebase'
import firebase from "../firebase";
import { getFirestore } from "../firebase"; 
import {db} from "../firebase";
import React, {  useState,Component } from 'react';
 import {firebaseConfig} from '../firebase';

 var em='';
 var userId='';
auth.onAuthStateChanged((user)=>{
  if (user) {
    // User logged in already or has just logged in.
      em=user.email;
       userId=user.uid;

  } else {
    // User not logged in or has just logged out.
  }
})

const HomeScreen = () => {

  let aboba1='';

  const userId = firebase.auth().currentUser.uid;



let aboba2='';


const dbRef = firebase.database().ref();
/*

dbRef.child("users").child(userId).get().then((snapshot) => {
  if (snapshot.exists()) {
   
    aboba2=snapshot.val();
     console.log(aboba2);
   
    
    
   
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

*/

const database=firebase.database();
const name=database.ref('users').child(userId);
 console.log(database.ref('value'));
name.on('value',(elem)=>{ aboba1=elem.val();});
  setTimeout(()=>{console.log(aboba1)},2000);




/*

const database=firebase.database();
const name=database.ref('name');
 console.log(database.ref('value'));
name.on('value',(elem)=>{ aboba1=elem.val();});
  setTimeout(()=>{console.log(aboba1)},2000);
 */

  


  
  





  
 










  

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  
  
  function writeUserData( value) {
    firebase.database().ref('users/'+userId ).set({
     
   
      value:value,
      
    });
  }

  const sendData =()=>{
    const{email,value}=this.state;
    const db=firebase.database();
    db.ref(email).push(value);



  }
  
  const [value ,setValue] = useState('');
  
  






  return (
 



    <View style={styles.container}>
      <Text style={{justifyContent:'flex-start'}}>Email: {auth.currentUser?.email}</Text>
      

      <TextInput 
          placeholder="Text"
          value={value}
          onChangeText={value => setValue( value)}
          
  

         />

        <Text>
        {aboba2}
        </Text>
     
      
<View>


  <Button title='Get data' onPress={writeUserData(value)}/>
</View>
<Text>{aboba2}</Text>





      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
