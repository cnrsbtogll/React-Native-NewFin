import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import { Text, 
        StyleSheet, 
        View,
        TextInput,
        TouchableOpacity } from 'react-native';

export default class InputField extends Component {
    render(){
        const {labelText,labelTextSize,labelColor,textColor,borderBottomColor}=this.props;
        const fontSize=labelTextSize || 14;
        const color=labelColor || colors.white;
        const inputColor=textColor || colors.white;
        const borderBottom=borderBottomColor|| 'transparent'; 
        return(
        <View style={styles.wrapper}>
        <Text style={[{color,fontSize},styles.label]}>{labelText}</Text>
        <TextInput
            // autoCorrect="False"
            style={[{color:inputColor, borderBottomColor:borderBottom},styles.inputField]}
        />
        </View> 
        );
    }
}

InputField.propTypes={
    labelText:PropTypes.string.isRequired,
    labelTextSize:PropTypes.number,
    labelColor:PropTypes.string,
    textColor:PropTypes.string,
    borderBottomColor:PropTypes.string,
};

const styles=StyleSheet.create({
    wrapper:{
        display:'flex',
    },
    label:{
        fontWeight:"700",
        //marginBottom:2,
        marginTop:25,
    },
    inputField:{
        borderBottomWidth:1,
        borderBottomColor:colors.white,
        //paddingTop:5,
        paddingBottom:5,
        
    },
})