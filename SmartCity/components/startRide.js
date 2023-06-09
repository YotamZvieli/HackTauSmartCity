import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, PanResponder } from 'react-native';

const StartRide = ({setIsLoggedIn}) => {
  const [plateNumber, setPlateNumber] = useState('');
  const [favoritePlates, setFavoritePlates] = useState(['ABC123', 'XYZ789']); // Sample data

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: () => {
        if (pan.x._value > 200) { // if swiped more than half of the button's width
          authenticateRide();
        }
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        }).start();
      }
    })
  ).current;

  const authenticateRide = () => {
    // Your code to authenticate ride
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Start New Ride</Text>

      <View style={{ borderColor: '#000', borderWidth: 1, borderRadius: 5, marginVertical: 10 }}>
        <TextInput
          style={{ height: 40, paddingLeft: 10 }}
          onChangeText={setPlateNumber}
          value={plateNumber}
          placeholder="Enter Plate Number"
        />
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Select from favorites:</Text>
      {favoritePlates.map((plate, index) => (
        <TouchableOpacity key={index} onPress={() => setPlateNumber(plate)}>
          <View style={{ borderColor: '#000', borderWidth: 1, borderRadius: 5, marginVertical: 10 }}>
            <Text style={{ fontSize: 16, paddingLeft: 10 }}>{plate}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <button onClick={(event)=>{setIsLoggedIn(2);}}
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          height: 50,
          width: 400,
          backgroundColor: '#000',
          justifyContent: 'center',
          borderRadius: 5
        }}
        {...panResponder.panHandlers}
      >
        <Text style={{ color: '#FFF', textAlign: 'center' }}>Slide to Authenticate</Text>
      </button>
    </View>
  );
};

export default StartRide;