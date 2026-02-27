import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return(
    <View style={styles.container}>
      <Text>Creating A Navigation using the File Based Routing</Text>
      <Link href='/FruitList'>Fruit</Link>
      <Link href='/Form'>Form</Link>
      <Link href='/counter'>Counter</Link>
      <Link href='/GreetingCard'>GreetingCard</Link>
  </View>
)};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
   
  },
});
