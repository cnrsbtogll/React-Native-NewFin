import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Text,StyleSheet, View, TouchableHighlight } from 'react-native'

export default class RoundedButton extends Component {
    render() {
        const {text}=this.props;
        return (
            <TouchableHighlight style={styles.wrapper}>
                <Text style={styles.buttonText}> {text} </Text>
            </TouchableHighlight>
                
           
        )
    }
}

RoundedButton.PropTypes={
    text:PropTypes.string.isRequired,
};

const styles=StyleSheet.create({
    wrapper:{

    },
    buttonText:{
        fontSize:17,
        width:'100%',
        textAlign:'center'
    }
})