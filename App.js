import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [fact, setFact] = useState('');

  const facts = [
    "I gufi non possono muovere gli occhi, quindi girano la testa fino a 270°.",
    "Il cuore di una balena blu può pesare quanto un'automobile.",
    "I polpi hanno 3 cuori e sangue blu.",
    "Le banane sono bacche, ma le fragole no.",
    "Il 90% delle specie marine deve ancora essere scoperto.",
    // ... aggiungine altre qui ...
  ];

  const showFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
  };

  useEffect(() => {
    showFact();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💡 CurioPing</Text>
      <Text style={styles.fact}>{fact}</Text>
      
      <TouchableOpacity style={styles.button} onPress={showFact}>
        <Text style={styles.buttonText}>🎲 Nuova Curiosità</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#101820',
  },
  title: {
    fontSize: 32,
    color: '#FEE715',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fact: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FEE715',
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#101820',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
