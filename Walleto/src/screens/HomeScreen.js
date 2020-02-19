import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, Image, Alert } from 'react-native';

export default class HomeScreen extends Component {

  render() {

    const { navigation } = this.props
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
            <Text style={styles.titleBox}>Depositar</Text>
            <Text style={styles.titleBox}>R$ {depositedMoney}</Text>
          </View>
        </ImageBackground>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
          <ImageBackground source={require('./../assets/backgroundLine.png')} style={styles.backgroundLine}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('ListPaymentScreen', { name, email, depositedMoney })}>
              <Image style={{ marginLeft: 36, marginRight: 16, width: 20, height: 20 }} source={require('./../assets/iconCardWhite.png')} />
              <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>Pagar Conta &nbsp;&nbsp;&nbsp; ></Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

      </View >
    );
  }
}

//#bec4c0

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
    fontSize: 24,
    fontWeight: '500',
  },
  backgroundLine: {
    width: 343,
    height: 72,
    justifyContent: 'center',
    borderRadius: 50,
  }
});
