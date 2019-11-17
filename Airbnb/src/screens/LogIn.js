import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import colors from "../styles/colors";
import Notification from "../components/Notification";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAdress: "",
      validPassword: false
    };
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.toogleNextButtonState = this.toogleNextButtonState.bind(this);
  }
  handleNextButton() {
    if (this.state.emailAdress === 'cnrsbtogll@gmail.com' && this.state.validPassword) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }
  }
  handleCloseNotification() {
    this.setState({ formValid: true });
  }
  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
  }
  handlePasswordChange(password) {
    if (!this.state.validPassword) {
      if (password.length > 4) {
        this.setState({ validPassword: true });
      }
    } else if (password <= 4) {
      this.setState({ validPassword: false });
    }
  }

  toogleNextButtonState() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }
  render() {
    const { formValid } = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
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
              onChangeText={this.handleEmailChange}
            />
            <InputField
              labelText="ŞİFRE"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handlePasswordChange}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
              disabled={this.toogleNextButtonState()}
            />
          </View>
          <View
            style={[
              styles.notificationWrapper,
              { marginTop: notificationMarginTop }
            ]}
          >
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
    flex: 1
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
  },
  notificationWrapper: {
    position: "absolute",
    bottom: 0,
    zIndex:9,
  }
});
