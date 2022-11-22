import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text,TouchableHighlight,TouchableOpacity } from 'react-native';

export default function Listitem({el,deleteHandler}) {
return(

<TouchableOpacity onPress={()=> deleteHandler(el.key) }>
<Text style={styles.text}>{el.text}

</Text>

</TouchableOpacity>

);

}
const styles=StyleSheet.create({

text:
{
    padding:20,
    textAlign:'center',
    borderRadius:5,
    backgroundColor:'#fafafa',
    borderWidth:1,
    marginTop:20,
    width:'60%',
    marginLeft:'20%'
    
}


});


