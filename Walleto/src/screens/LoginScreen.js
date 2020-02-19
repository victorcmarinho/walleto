import React, { Component } from 'react'
import {
    Platform,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import api from '../service/api';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        email: '',
        password: '',
    };

    setAlert(message) {
        Alert.alert(
            '',
            message,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    }

    async handleSubmit() {

        const { email, password } = this.state;
        const { navigation } = this.props

        const response = await api.post('/users/login', {
            email,
            password
        });

        const { statusCode, body, data, message } = response.data;

        if (statusCode === 500) {
            this.setAlert(body.error)
        } else {
            this.setAlert(message)
            navigation.navigate('HomeScreen', { name: data.user[0].name, email: data.user[0].email, depositedMoney: data.user[0].depositedMoney })
        }

    }

    render() {
        const { email, password } = this.state
        return (
            <ScrollView style={styles.box}>
                <View style={styles.boxLogo}>
                    <Image source={require('./../assets/logo.png')} style={styles.logo} />
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia dapibus enim. </Text>
                <View style={styles.buttonBox}>
                    <View>
                        <Text style={styles.textInput}>Login</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu e-mail"
                            placeholderTextColor="#000"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={email}
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <Text style={styles.textInput}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu senha"
                            placeholderTextColor="#000"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
                        <Text style={{ color: '#FFF', fontSize: 15 }}> SIGN IN </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        marginTop: 50,
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
        padding: 16,
        marginTop: 100
    },
    textInput: {
        marginLeft: 16,
        fontSize: 15,
        color: '#FFF',
        textTransform: 'uppercase',
        marginBottom: 6
    },
    input: {
        backgroundColor: '#ffffff30',
        borderRadius: 24,
        fontSize: 16,
        color: '#000',
        padding: 16,
        width: 266,
        height: 54,
        marginBottom: 16,
    },
    button: {
        marginTop: 100,
        width: 266,
        borderRadius: 24,
        borderColor: '#FFF',
        borderWidth: 2,
        padding: 13,
        alignItems: 'center'
    },
});