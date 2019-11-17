import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import colors from "../styles/colors";
import Notification from '../components/Notification';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

export default class LogIn extends Component {
    constructor(props){
        super(props);
        this.state={
            formValid:false,
        }
        this.handleCloseNotification=this.handleCloseNotification.bind(this);
    }
  handleNextButton() {
    alert("next button basıldı");
  }
  handleCloseNotification(){
      this.setState({formValid:true})
  }
  render() {
      const {formValid}=this.state;      
      const showNotification=formValid?false:true;
      const background=formValid ? colors.green01 : colors.darkOrange; 
    return (
      <KeyboardAvoidingView 
        style={[{ backgroundColor:background},styles.wrapper]}
        //behavior="padding"
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
              inputType="email"
              customStyle={{ marginBottom: 30 }}
            />
            <InputField
              labelText="ŞİFRE"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton handleNextButton={this.handleNextButton} />
          </View>
          <View style={showNotification?{marginTop:10 }: {}}>
              <Notification
                showNotification={showNotification}
                handleCloseNotification={this.handleCloseNotification}
                type="Error"
                firstLine="Bu giriş bilgileri doğru değil."
                secondLine="Lütfen tekrar deneyiniz."
              />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: "300",
    marginTop: 30
  },
  nextButton: {
    //position: "absolute",
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  }
});
