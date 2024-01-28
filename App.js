import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Grocer-Easy</Text>
      <Text style={styles.h2}>Bringing the Market to Your Doorstep.</Text>
      <View style={styles.btn}>
      <Button
        title="Start Shopping"
        color='rgba(12, 188, 139, 1)'
       />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1:{
    fontSize:32,
    color:'rgba(12, 188, 139, 1)',
    fontWeight:"800",
  },
  h2:{
    fontSize:16,
    fontWeight:"600",
    color:"grey"
  },
  btn:{
    fontWeight:"bold",
    textAlign:"center",
    textTransform:"capitalize",
    marginTop:16, 
  }

});

