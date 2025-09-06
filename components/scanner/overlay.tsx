import { StyleSheet, Text, View } from 'react-native';

export default function Overlay() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan a QR code</Text>
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
