import React from "react";
import PropTypes from "prop-types";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

//Single Button
class TickTackButton extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity {...this.props} style={styles.buttonStyle}>
          <Text style={{ fontSize: 20 }}>{this.props.buttonName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonStyle: {
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black"
  }
});
export default TickTackButton;
