import React, { Component } from 'react';
import CheckBox from 'react-native-check-box';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    ScrollView,
    FlatList,
    Alert
} from 'react-native';
import api from '../service/api';

export default class ListPaymentScreen extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        total: 0,
        list: [],
        pagar: []
    };

    async componentDidMount() {
        const response = await api.post('/bills/getBillsByStatusOfPaymentMock', {});
        const { data } = response.data;
        this.setState({ list: data })
    }

    setPayment(id) {
        const { list, total } = this.state;

        let totalNovo = total;

        list.map(obj => {
            if (obj.id === id) {
                obj.isPaid = !obj.isPaid;
                if (obj.isPaid) {
                    totalNovo += parseFloat(obj.price);
                }
            }
        })

        this.setState({ list, total: totalNovo })
    }

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
        const { list } = this.state;
        let pagar = []
        list.map(obj => {
            if (obj.isPaid) {
                pagar.push({ id: obj.id });
            }
        });
        console.log(pagar);
        const response = await api.post('/bills/getBillsByStatusOfPaymentMock', pagar);
        const { data, statusCode } = response.data;
        if (statusCode == 200) {
            this.setAlert("Contas pagas com sucesso!")
        }
        this.setState({ list: data })
    }

    render() {

        const { list, total } = this.state;
        const { name, email, depositedMoney } = this.props.route.params;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../assets/topo.png')} resizeMode='cover' style={styles.topo}>
                    <Image source={require('./../assets/logo.png')} style={styles.logo} />
                    <View style={styles.boxUser}>
                        <Image source={require('./../assets/user.png')} style={styles.userImage} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userEmail}>{email}</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.titleBox}>Total: R$ {total.toFixed(2)}</Text>
                        <Text style={styles.titleBox}>Em conta: R$ {depositedMoney}</Text>
                    </View>
                </ImageBackground>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.boxSeparate}>
                        <FlatList
                            style={{ width: '100%', height: 300 }}
                            data={list}
                            renderItem={({ item }) => (
                                <View style={styles.miniBox}>
                                    <Text>{item.name} - R$ {item.price}</Text>
                                    {item.isPaid ? <Text style={{ padding: 10 }}>PAGA</Text> :
                                        <CheckBox
                                            style={{ flex: 1, padding: 10 }}
                                            onClick={() => { this.setPayment(item.id) }}
                                            isChecked={item.isPaid}
                                            leftText={" "}
                                            checkBoxColor={"#526C5BDE"}
                                        />}
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
                            <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>Pagar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100
    },
    userImage: {
        width: 44,
        height: 44
    },
    container: {
        flex: 1,
        backgroundColor: '#526C5B42',
    },
    topo: {
        paddingTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 306
    },
    box: {
        borderRadius: 18,
        shadowColor: '#712CE229',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#FFF',
        width: 343,
        height: 85,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 16,
        paddingLeft: 16
    },
    boxUser: {
        width: 343,
        marginTop: 19,
        marginBottom: 34,
        flexDirection: 'row',
    },
    userName: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    userEmail: {
        color: '#FFF',
        fontSize: 12
    },
    titleBox: {
        color: '#526C5B',
        fontSize: 14,
        fontWeight: '500',
    },
    boxSeparate: {
        borderRadius: 18,
        shadowColor: '#712CE229',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#FFF',
        width: 343,
        alignItems: 'center',
        paddingRight: 16,
        paddingLeft: 16,
        paddingBottom: 16,
        marginTop: 8
    },
    miniBox: {
        borderRadius: 18,
        shadowColor: '#712CE229',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#FFF',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 10
    },
    button: {
        marginTop: 40,
        backgroundColor: '#526C5B',
        width: '100%',
        alignItems: 'center',
        padding: 8,
        borderRadius: 16
    }
});
