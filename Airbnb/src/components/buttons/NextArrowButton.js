import React, { Component } from "react";
import PropTypes from "prop-types";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, StyleSheet } from "react-native";

export default class NextArrowButton extends Component {
  render() {
    const { disabled, handleNextButton } = this.props;
    const opacityStyle = disabled ? 0.2 : 0.6;
    return (
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
    );
  }
}
NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
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
