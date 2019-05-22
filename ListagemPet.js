/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';


export default class App extends React.Component {

  state = {
    gpets: []
  }


componentDidMount () {
  fetch('https://pets-unipe.herokuapp.com/pets', { method: 'GET'})
  .then(T => T.json())
  .then(gpets => this.setState({ gpets }))
}


  render() {
    const {gpets} = this.state
    return (
      <View>
        <Text>Animais de Estimação</Text>
        <Button title='Adicionar' onPress={() => console.log('criou o animal')} />
        <View>
          {gpets.map((gpet, key) => (
            <View key={key}>
              <Text>{gpet.name}o</Text>
              <Text>{gpet.raca}o</Text>
              <Button title='Editar' onPress={() => this.props.history.push('/' + gpet._id)} />
              <Button title='Excluir' onPress={() => this.onDelete(gpet._id)} />
              </View>
          ))}
        </View>
      </View>
    );
  }
}

