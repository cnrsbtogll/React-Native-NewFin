import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from '../components/form/InputField';
import colors from '../styles/colors';
import { Text, 
        StyleSheet, 
        View,
        ScrollView,
        KeyboardAvoidingView } from 'react-native';


export default class LogIn extends Component {
    render() {
        return (
            <KeyboardAvoidingView 
            style={styles.wrapper}
            > 
            <View style={styles.scrollViewWrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.loginHeader}>Giriş</Text>
                    <InputField
                    labelText="E POSTA ADRESİ"
                    labelTextSize={14}
                    labelColor={colors.white}
                    textColor={colors.white}
                    borderBottomColor={colors.white}
                    />
                    <InputField
                    labelText="ŞİFRE"
                    labelTextSize={14}
                    labelColor={colors.white}
                    textColor={colors.white}
                    borderBottomColor={colors.white}
                    />
                </ScrollView>    
            </View>    
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1,
        backgroundColor:colors.green01,
    },
    scrollViewWrapper:{
        marginTop:70,
        flex:1
    },
    scrollView:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        flex:1
    },
    loginHeader:{
       fontSize:34,
       color:colors.white,
       fontWeight:'300', 
       marginTop:30,
    }
})
