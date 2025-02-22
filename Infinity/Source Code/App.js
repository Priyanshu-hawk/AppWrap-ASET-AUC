import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// import { Button } from 'native-base';
// import { Button, Center, NativeBaseProvider } from "native-base"
var itemArray = new Array(9).fill('empty')
let play1 = false
let play2 = true

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  drawItem = itemNumber => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber] }, () => { })
    }
    this.winGame();
  }
  chooseItemIcon = itemNumber => {
    if (itemArray[itemNumber] !== "empty")
      return itemArray[itemNumber] ? "cross" : "circle";
    return "pencil"
  }
  chooseItemColor = itemNumber => {
    if (itemArray[itemNumber] !== "empty")
      return itemArray[itemNumber] ? "red" : "green";
    return "black"
  }
  resetGame = () => {
    itemArray.fill("empty");
    this.setState({ winMessage: '' })
    play1 = !play1
    play2 = !play2
    this.forceUpdate();

  }
  winGame = () => {
    if ((itemArray[0] !== "empty") && (itemArray[0] === itemArray[1]) && (itemArray[1] === itemArray[2])) {
      // this.setState({winMessage : (itemArray[0] ? 'Cross': 'Circle').concat(' win the game')})
      Alert.alert((itemArray[0] ? 'Cross' : 'Circle').concat(' win the game'));
      this.resetGame();
    }
    else if ((itemArray[3] !== "empty") && (itemArray[3] === itemArray[4]) && (itemArray[4] === itemArray[5])) {
      //  this.setState({winMessage : (itemArray[3] ? 'Cross': 'Circle').concat(' win the game')})
      Alert.alert((itemArray[3] ? 'Cross' : 'Circle').concat(' win the game'));
      this.resetGame();
    }
    else if ((itemArray[6] !== "empty") && (itemArray[6] === itemArray[7]) && (itemArray[7] === itemArray[8])) {
      //  this.setState({winMessage : (itemArray[6] ? 'Cross': 'Circle').concat(' win the game')})
      Alert.alert((itemArray[6] ? 'Cross' : 'Circle').concat(' win the game'));
      this.resetGame();
    }
    else if ((itemArray[0] !== "empty") && (itemArray[0] === itemArray[3]) && (itemArray[3] === itemArray[6])) {
      //  this.setState({winMessage : (itemArray[0] ? 'Cross': 'Circle').concat(' win the game')})
      Alert.alert((itemArray[0] ? 'Cross' : 'Circle').concat(' win the game'));
      this.resetGame();
    }
    else if ((itemArray[2] !== "empty") && (itemArray[2] === itemArray[5]) && (itemArray[5] === itemArray[8])) {
      //  this.setState({winMessage : (itemArray[2] ? 'Cross': 'Circle').concat(' win the game')})
      Alert.alert((itemArray[2] ? 'Cross' : 'Circle').concat(' win the game'));
      this.resetGame();
    }
    else if ((itemArray[1] !== "empty") && (itemArray[1] === itemArray[4]) && (itemArray[4] === itemArray[7])) {
      // this.setState({winMessage : (itemArray[1] ? 'Cross': 'Circle').concat(' win the game')})
      Alert.alert((itemArray[1] ? 'Cross' : 'Circle').concat(' win the game'));
      this.resetGame();
    }
    else if ((itemArray[0] !== "empty") && (itemArray[0] === itemArray[4]) && (itemArray[4] === itemArray[8])) {
      //  this.setState({winMessage : (itemArray[0] ? 'Cross': 'Circle').concat(' win the game')})
      Alert.alert((itemArray[0] ? 'Cross' : 'Circle').concat(' win the game'));
      this.resetGame();
    }
    else if ((itemArray[2] !== "empty") && (itemArray[2] === itemArray[4]) && (itemArray[4] === itemArray[6])) {
      //  this.setState({winMessage : (itemArray[2] ? 'Cross': 'Circle').concat(' win the game')})
      Alert.alert((itemArray[2] ? 'Cross' : 'Circle').concat(' win the game'));
      this.resetGame();
    }
    else if ((itemArray[0] !== "empty") && (itemArray[1] !== "empty") && (itemArray[2] !== "empty") && (itemArray[3] !== "empty") && (itemArray[4] !== "empty") && (itemArray[5] !== "empty") && (itemArray[6] !== "empty") && (itemArray[7] !== "empty") && (itemArray[8] !== "empty")) {
      Alert.alert("Tie");
      this.resetGame();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.brandDiv} >
          <Text style={styles.brand}>Tic-Tac-Toe by Team Infinity{"\n"} For AppWrap , App Town Club</Text>
          <View style={styles.for_img}>
            <Image source={require('./assets/disp_img.png')} />
          </View>
        </View>
        <View>

          <Text style={styles.brand}>Player 1 - {
            play1 ? <Entypo
              name="cross"
              size={30}
            /> : <Entypo
              name="circle"
              size={30}
            />
          }</Text>
          <Text style={styles.brand}>Player 2 - {
            play2 ? <Entypo
              name="cross"
              size={30}
            /> : <Entypo
              name="circle"
              size={30}
            />
          }</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(0)}>
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)}>
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)}>
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)}>
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)}>
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)}>
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)}>
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)}>
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)}>
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        <Button
          onPress={() => this.resetGame()}
          title="Reset Game"
        />
        {/* <Button full rounded primary style={styles.button} onPress={()=>this.resetGame()}>
        <Text>Reset Game</Text>
      </Button>  */}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    marginTop: 30
  },
  row: {
    flexDirection: "row",
  },
  item: {
    borderColor: "black",
    borderWidth: 2,
    padding: 30
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff"

  },
  button: {
    margin: 20,
    padding: 20
  },
  brand: {
    //marginTop: -80,
    padding: 0,
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  brandDiv: {
    marginTop: -20
  },
  for_img: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  play1_left: {

  },
  play2_right: {

  }
});
