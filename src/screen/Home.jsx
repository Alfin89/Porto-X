import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import ImageComponent from '../components/ImageComponent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ImageBackground
      source={require('../image/bg.jpeg')} 
      style={styles.background}
    >
        <View style={styles.container}>
        <ImageComponent />
         <Text style={styles.heading}>Alfin kamil</Text>
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('About')}>
              <Text style={styles.buttonText}>About Me</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Contact')}>
              <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
        </View>
         
     </View>
      
    </ImageBackground>
      
    );
  }
}


const styles = StyleSheet.create({
background: {
    flex: 1,
    resizeMode: 'cover', // Menyesuaikan gambar dengan ukuran layar
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 15,
  },
  buttonContainer: {
        flexDirectionz: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#748E63',
        padding: 10,
        borderRadius: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
});