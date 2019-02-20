import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    fontSize: 30,
    color: "purple"
  },
  numberView: {
    width: 250,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  userNameView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30
  },
  textView: {
    marginHorizontal: 20,
    fontSize: 20,
    color: "green"
  }
});
