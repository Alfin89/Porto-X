import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Me</Text>
            <View style={styles.contentContainer}>
                <Text style={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Text style={styles.content}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "red"
    },
    contentContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
        color: "black",
    },
});

export default About;
