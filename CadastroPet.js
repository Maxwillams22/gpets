import React , {Component} from 'react';
import {Text, View, StyleSheet , Alert} from 'react-native';
import FormPet from './FormPet'
import qs from  'query-string'

export default class CadastroPet extends Component{
    onSave (data) {
        fetch('https://pets-unipe.herokuapp.com/pets', {
          method: 'POST',
          body: qs.stringify(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(T => T.json())
          .then(() => Alert.alert('cadastro','cadastrado'))
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Cadastro do Animal</Text>
                <FormPet/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})