import TinderCard from 'react-tinder-card'
import {View, TextInput, Button, Text, StyleSheet, ImageBackground} from 'react-native';
import { useState } from 'react';
import NavBar from '../Components/NavBar';


const db = [
    {
      name: 'Drw',
      img: require('../Components/Images/drw.jpg')
    },
    {
      name: 'Morgan Stanley',
      img: require('../Components/Images/morganStanley.jpg')
    }
    
  ]


export default function  HomePage(){

const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HIRED OR FIRED</Text>
      <View style={styles.cardContainer}>
        {characters.map((character) =>
          <TinderCard key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <View style={styles.card}>
              <ImageBackground style={styles.cardImage} source={character.img}>
                <Text style={styles.cardTitle}>{character.name}</Text>
                
              </ImageBackground>
            </View>
          </TinderCard>
        )}
      </View>
      {lastDirection ? <Text style={styles.infoText}>You swiped {lastDirection}</Text> : <Text style={styles.infoText} />}

      <Text> About Us: </Text>
      

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      header: {
        marginTop:60,
        color: '#000',
        fontSize: 30,
        marginBottom: 30,
      },
      cardContainer: {
        width: '90%',
        maxWidth: 260,
        height: 300,
      },
      card: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 260,
        height: 300,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        resizeMode: 'cover',
      },
      cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,
      },
      cardTitle: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        color: '#fff',
        fontSize:20,
        fontWeight:"bold"
      },
      infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
      }});