import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class AppCronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      ultimoTempo: 0,
      btnTexto: "Play",
    };
    this.play = this.play.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  play() {
    if (this.state.numero !== 0) {
      clearInterval(this.intervalID);
      this.setState({
        ultimoTempo: this.state.numero.toFixed(2),
        numero: 0,
        btnTexto: "Play",
        texto: "",
      });
    } else {
      this.intervalID = setInterval(() => {
        this.setState({
          numero: this.state.numero + 0.1
        })
      }, 100);
      this.setState({
        btnTexto: "Pare"
      });
    }
  }

  limpar() {
    this.setState({
      numero: 0,
      ultimoTempo: 0,
      btnTexto: "Play"
    });
    clearInterval(this.intervalID);
  }

  render() {
    return(
      <View style={style.container}>
        <View style={styleCronometro.resultado}>
          <Text style={styleCronometro.txtResultado}>Ultimo Tempo: {this.state.ultimoTempo}</Text>
        </View>
        <Image 
          source={require('@/src/images/relogio.png')}
          style={styleCronometro.imagem}>
        </Image>
        <Text style={styleCronometro.txtNumero}>{this.state.numero.toFixed(1)}</Text>
        <View style={styleCronometro.acoes}>
          <TouchableOpacity style={styleCronometro.btn}>
            <Text style={styleCronometro.txtButton} onPress={this.play}>{this.state.btnTexto}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleCronometro.btn}>
            <Text style={styleCronometro.txtButton} onPress={this.limpar}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styleCronometro = StyleSheet.create({
  resultado: {
    borderWidth: 4,
    borderColor: '#e1cf0a',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    width: 160,
    marginLeft: -150,
    position: "absolute",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  txtResultado: {
    fontSize: 14,
    fontWeight: "600"
  },
  imagem: {
    width: 500,
    height: 500
  },
  txtNumero: {
     marginTop: -280,
     fontSize: 70,
     fontWeight: 200
  },
  txtButton: {
    fontSize: 15,
    fontStyle: "bold"
  },
  acoes: {
    flexDirection: "row",
    gap: 100
  },
  btn: {
    backgroundColor: "#ffffff",
    width: 100,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 130,
    justifyContent: "space-evenly",
    padding: 10
  }
});

export default AppCronometro;