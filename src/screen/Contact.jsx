import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Information</Text>
      <Text style={styles.contactItem}>Email: alfinkmail89@gamial.com</Text>
      <Text style={styles.contactItem}>Phone: 0873-4564-7890</Text>
      <Text style={styles.contactItem}>Address: Pamekasan, Jawa timur</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  contactItem: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black'
  },
});

export default Contact;
