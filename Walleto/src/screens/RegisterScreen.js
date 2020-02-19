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
    Alert
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import api from '../service/api';

export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        name: '',
        cpf: '',
        email: '',
        password: '',
        birthday: '',
        motherName: '',
        image: '',
        address: {
            zipcode: '',
            street: '',
            neighborhood: '',
            number: '',
            complement: ''
        },
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

    getForm() {

        if (this.state.name == '') {
            this.setAlert("Digite seu nome!");
            return false;
        } else if (this.state.cpf == '') {
            this.setAlert("Digite seu CPF!");
            return false;
        } else if (this.state.email == '') {
            this.setAlert("Digite seu email!");
            return false;
        } else if (this.state.password == '') {
            this.setAlert("Digite sua senha!");
            return false;
        } else if (this.state.birthday == '') {
            this.setAlert("Digite sua data de nascimento!");
            return false;
        } else if (this.state.motherName == '') {
            this.setAlert("Digite o nome de sua mãe!");
            return false;
        } else if (this.state.address.zipcode == '') {
            this.setAlert("Digite seu cep!");
            return false;
        } else if (this.state.address.street == '') {
            this.setAlert("Digite seu endereço!");
            return false;
        } else if (this.state.address.neighborhood == '') {
            this.setAlert("Digite seu bairro!");
            return false;
        } else if (this.state.address.number == '') {
            this.setAlert("Digite seu número!");
            return false;
        }

        return true;
    }

    async handleSubmit() {

        const user = {
            name: this.state.name,
            cpf: this.state.cpf,
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.birthday,
            motherName: this.state.motherName,
            image: this.state.image,
            address: {
                zipcode: this.state.address.zipcode,
                street: this.state.address.street,
                neighborhood: this.state.address.neighborhood,
                number: this.state.address.number,
                complement: this.state.address.complement
            },
        };

        if (this.getForm()) {
            const { navigation } = this.props

            const response = await api.post('/users/sign', user);

            const { statusCode, body, data, message } = response.data;

            if (data.errors) {
                this.setAlert(JSON.stringify(data.errors))
            } else {
                this.setAlert(message)
                navigation.navigate('LoginScreen', {})
            }
        }

    }

    render() {
        const { navigation } = this.props
        return (
            <ScrollView style={styles.box}>
                <View style={styles.boxLogo}>
                    <Image source={require('./../assets/logo.png')} style={styles.logo} />
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia dapibus enim. </Text>
                <View style={styles.buttonBox}>
                    <View style={{ width: '100%', padding: 8, alignItems: 'center', backgroundColor: '#45554B' }}>
                        <Text style={{ marginBottom: 16, color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>Criar conta</Text>
                    </View>
                    <View style={styles.inputsBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome."
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu CPF."
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.cpf}
                            onChangeText={(cpf) => this.setState({ cpf })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email."
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Criar senha."
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Data de nascimento"
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.birthday}
                            onChangeText={(birthday) => this.setState({ birthday })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Nome da mãe"
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.motherName}
                            onChangeText={(motherName) => this.setState({ motherName })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="CEP"
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.address.zipcode}
                            onChangeText={(zipcode) => this.setState({ address: { ...this.state.address, zipcode } })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Endereço"
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.address.street}
                            onChangeText={(street) => this.setState({ address: { ...this.state.address, street } })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Bairro"
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.address.neighborhood}
                            onChangeText={(neighborhood) => this.setState({ address: { ...this.state.address, neighborhood } })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Número"
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.address.number}
                            onChangeText={(number) => this.setState({ address: { ...this.state.address, number } })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Complemento"
                            placeholderTextColor="#FFF"
                            selectionColor="#FFF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.address.complement}
                            onChangeText={(complement) => this.setState({ address: { ...this.state.address, complement } })}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                            <Text style={styles.textButton}>></Text>
                        </TouchableOpacity>

                    </View>

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
        marginTop: 100,
    },
    inputsBox: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#324137',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },
    textInput: {
        marginLeft: 16,
        fontSize: 15,
        color: '#FFF',
        textTransform: 'uppercase',
        marginBottom: 6
    },
    input: {
        fontSize: 16,
        color: '#FFF',
        padding: 16,
        width: '100%',
        height: 54,
        marginTop: 16,
        borderBottomColor: '#FFF', // Add this to specify bottom border color
        borderBottomWidth: 2     // Add this to specify bottom border thickness
    },
    button: {
        marginTop: 16,
        backgroundColor: '#526C5B8A',
        width: '100%',
        margin: 16,
        borderRadius: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16
    },
    textButton: {
        fontSize: 16,
        color: '#FFFFFF8A',
        fontWeight: 'bold'
    }
});