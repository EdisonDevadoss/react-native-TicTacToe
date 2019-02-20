import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./tickTackGameStyleSheet";
import TickTackButton from "./tickTackButton";

class TickTackGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noButton: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
    this.currentUser = "X";
  }
  // Recive input value from user
  onUserClick = value => {
    const { noButton } = this.state;
    let val = noButton.indexOf(value);
    noButton[val] = this.currentUser;
    let list = noButton;
    this.setState({
      noButton: list
    });
    //Change User
    this.toogleUser();
  };
  //Change user function
  toogleUser() {
    this.isVictory(this.currentUser);
    if (this.currentUser == "X") {
      this.currentUser = "O";
    } else {
      this.currentUser = "X";
    }
  }
  //Check conditions
  isVictory = user => {
    const { noButton } = this.state;
    if (
      (noButton[0] == user && noButton[1] == user && noButton[2] == user) ||
      (noButton[3] == user && noButton[4] == user && noButton[5] == user) ||
      (noButton[6] == user && noButton[7] == user && noButton[8] == user) ||
      (noButton[0] == user && noButton[3] == user && noButton[6] == user) ||
      (noButton[1] == user && noButton[4] == user && noButton[7] == user) ||
      (noButton[2] == user && noButton[5] == user && noButton[8] == user) ||
      (noButton[0] == user && noButton[4] == user && noButton[8] == user) ||
      (noButton[6] == user && noButton[4] == user && noButton[2] == user)
    ) {
      //Success message
      alert(`
        ${user} is won
        ----------------
        Play agin
        `);
      this.setState({
        noButton: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      });
    } else if (
      noButton.every(value => {
        return typeof value == "string";
      })
    ) {
      //Match Draw
      alert(`Match Draw
        ----------------
        Play agin
        `);
      this.setState({
        noButton: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>TickTackGame Game </Text>
        <View style={styles.userNameView}>
          <Text style={styles.textView}>User X</Text>
          <Text style={styles.textView}>User O</Text>
        </View>
        <View style={styles.numberView}>
          {this.state.noButton.map((value, i) => {
            return (
              <TickTackButton
                key={i}
                buttonName={value}
                disabled={typeof value == "string"}
                onPress={this.onUserClick.bind(this, value)}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default TickTackGame;
