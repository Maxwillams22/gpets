
import React from 'react'
import ListarPets from './ListagemPet'
import CadastroPet from './CadastroPet'
import EditarPet from './EditarPet'
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
 
export default class App extends React.Component {
  render () {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Switch>
            <Route path='/cadastro' component={CadastroPet} />
            <Route path='/:pageId' component={EditarPet} />
            <Route path='/' component={ListarPets} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}