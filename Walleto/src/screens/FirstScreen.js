import React, { Component } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class FirstScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.box}>
                <View style={styles.boxLogo}>
                    <Image source={require('./../assets/logo.png')} style={styles.logo} />
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia dapibus enim. </Text>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen', {})}>
                        <Text style={styles.textButton}>Entrar</Text>
                        <Text style={styles.textButton}>></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen', {})}>
                        <Text style={styles.textButton}>Criar conta</Text>
                        <Text style={styles.textButton}>></Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#526C5B'
    },
    logo: {
        width: 160,
        height: 160
    },
    boxLogo: {
        alignItems: 'center'
    },
    text: {
        margin: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'justify'
    },
    buttonBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    button: {
        backgroundColor: '#45554B',
        width: '100%',
        height: 76,
        margin: 16,
        borderRadius: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16
    },
    textButton: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold'
    }
});