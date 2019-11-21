import React, { Component } from "react";
import PropTypes from "prop-types";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, StyleSheet, View } from "react-native";

//const size = iPhoneSize();
const buttonSize = 60;
const buttonWrapperPadding = 0;

// if (size === 'small') {
//   buttonSize = 50;
//   buttonWrapperPadding = 20;
// }

export default class NextArrowButton extends Component {
  render() {
    const { disabled, handleNextButton } = this.props;
    const opacityStyle = disabled ? 0.2 : 0.6;
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[{ opacity: opacityStyle }, styles.button]}
          onPress={handleNextButton}
          disabled={disabled}
        >
          <Icon
            name="angle-right"
            color={colors.green01}
            size={32}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20,
    paddingTop: buttonWrapperPadding
  },
  icon: {
    marginRight: -2,
    marginBottom: -2
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.white
  }
});
