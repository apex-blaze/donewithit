import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginCard = () => {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  const btnHandler = () => {};
  return (
    <>
      <View style={styles.cardLogin}>
        <Text>Login</Text>
        <TextInput
          onChangeText={onChangeUsername}
          value={username}
          placeholder="username"
        />
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="password"
        />
        <Button title="Press me" onPress={() => btnHandler()} />
        <Text
          style={{ color: "green" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Forgot Password?
        </Text>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => {}}
        >
          Login with Facebook
        </Icon.Button>
        <Icon.Button name="google" backgroundColor="grey" onPress={() => {}}>
          Login with Google
        </Icon.Button>
        <Text style={{ color: "green" }}>Don't have an account?</Text>
        <Text
          style={{ color: "green" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Register
        </Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ddfd3",
    alignItems: "center",
    justifyContent: "center",
  },
  cardLogin: {
    backgroundColor: "#f9f3f3",
    alignItems: "center",
    width: "70%",
  },
});

export default LoginCard;
