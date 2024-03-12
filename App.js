import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Details(){
  return(
    <Text>Hi Mohammad, this is Ayham</Text>
  )
}

function Header(){
  return(
    <Text>This is a Header</Text>
    // New Comment Added
    );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
