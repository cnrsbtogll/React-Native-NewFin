import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LoggedOut';

const newfinLogo = require('../img/NewFin-logo.png');

export default class LoggedOut extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In" />,
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
  });

  static onFacebookPress() {
    alert('Facebook button pressed');
  }

  static onCreateAccountPress() {
    this.props.navigation.navigate('LogIn')
  }

  static onMoreOptionsPress() {
    alert('More options button pressed');
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={newfinLogo}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>
Welcome to NewFin.
          </Text>
          
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            textColor={colors.white}
            handleOnPresss={() => this.props.navigation.navigate('LogIn')} 
          />

          
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account 
            </Text>
           
            <Text style={styles.termsText}>
              {"I agree to NewFin's "}
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Terms of Service
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              ,
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Payments Terms of Service
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              ,
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Privacy Policy
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              , and
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Nondiscrimination Policy
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              .
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}