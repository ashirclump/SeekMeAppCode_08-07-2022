import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
const Home = () => {

  return (
<View style={{backgroundColor:'#ffffff',height:700}}>
        <View style={style.container}>
        <Image
          source={require('./images/Logo.png')}
          style={{height: 40, width: 200, alignSelf: 'center',justifyContent:'center',backgroundColor:'#ffffff'}}
        />
      </View>
      <TouchableOpacity>
              {/* // onPress={() => navigation.navigate('RegisterFirst')} */}
          {/* <View style={style.btn}> */}
          <View
            style={{
              marginLeft: 16,
              marginRight: 10,
              marginTop: 50,
              margin: 6,
              height: 47,
              width: 310,
              backgroundColor: '#fff',
              borderRadius: 10,
              // flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
          </View>
        </TouchableOpacity>
      </View> 
    );
  }

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop:300,
    // flex:1,
  },
});    
      
export default Home;