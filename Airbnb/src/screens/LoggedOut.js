import React, {Component} from 'react';
import colors from '../styles/colors'
import { StyleSheet, Text, View, Image} from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton';


export default class LogeddOut extends Component{
  render() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
            <Image 
            source={require('../img/airbnb-logo.png')}
            style={styles.logo}
            />
            <Text style={styles.welcomeText}> Airbnb'ye hoş geldiniz.</Text>       
            <RoundedButton text="Facebook ile bağlan"/>
            </View>
        </View>
     );
  }
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:colors.green01,
    },
    welcomeWrapper:{
        flex:1,
        marginTop:30,
        padding:20
    },
    logo:{
        width:50,
        height:50,
        marginTop:30,
        marginBottom:40
    },
    welcomeText:{
        fontSize:30,
        color:colors.white,
        fontWeight:'300',
        marginBottom:40
    }
})

