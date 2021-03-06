import React, { useLayoutEffect, useEffect, useState, Component } from "react"

import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Dimensions } from "react-native"

import axios from 'axios';

export default function BodyRecipe(props) {
  const item = props.item;
  const navigation  = props.navigation;
  console.log(item);

  const [data, setData] = useState([]);

 
  async function sendFavorite(_fav) {
    await axios.post('https://delicious-recipes-dev.herokuapp.com/v1/favorites', {
      recipes: _fav
    })
    .then((response) => {
      if (response.status === 201) {
        alert(JSON.stringify(response.data))
      }
    })
    .catch(error => {
      alert(`An error has occurred ${ error.response.request._response}`);
      setIsLoading(false);
  });
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}> {item.title} </Text>
      {/* <Text style={styles.category}> {getName(item.categoryId)} </Text> */}

      <View style={styles.time} >        
        <Image 
          style={{marginTop: 10}}
          source={require('../assets/icons/time.png')}
        />
        <Text style={styles.textTime}> {item.time} minutes </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.push("Ingredients", {ingredients: item.ingredients})}
        >
        <Text style={styles.buttonText}> See ingredients</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity 
        style={styles.button}
        onPress={() => sendFavorite(item)}
        >
        <Text style={styles.buttonText}>Favorite</Text>
      </TouchableOpacity> */}

      <View style={styles.description}>
        <Text> {item.description} </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
    marginTop: -10,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: "#191d1b"
  },
  category: {
    color: "#39f0fd",
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
  }, 
  time: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  textTime: {
    marginTop: 12,
    fontWeight: 'bold'
  }, 
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 20,
    width: 300,
    height: 50,
    backgroundColor: '#000',
    borderColor: "#FFF",
  }, 
  buttonText: {
    color: "#FFF"
  },
  description: {
    marginTop: 40,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
})