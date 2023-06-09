import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AuthenticationScreen = () => {

    return (
        <View >
            <Image 
                source='C:\Users\97253\HackTauSmartCity\SmartCity\sources\pic.jpeg'
                style={styles.image}
                resizeMode='contain'
            />

            <Icon name='checkmark-circle' size={60} color='green' />

            <TouchableOpacity style={styles.nextButton} onPress={handleNextButton}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '50%',
    },
    nextButton: {
        backgroundColor: '#0077B6', // Ocean Blue color
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    }
});

export default AuthenticationScreen;