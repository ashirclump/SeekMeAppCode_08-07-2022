import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from 'react-native';
  import React, {Component} from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Left from 'react-native-vector-icons/AntDesign';
  
  // const [isSelected, setSelection] = useState(false);
  function Aadhaar ()
  {
    render() 
      return (
        <View style={style.container}>
          <View style={style.body}>
            <TouchableOpacity>
              <View
                style={{
                  height: 45,
                  width: 45,
                  // color:"",
                  backgroundColor: '#F3F3F3',
                  borderRadius: 15,
                  justifyContent: 'center',
                  marginTop: 10,
                  marginLeft: 25,
                }}>
                <Left
                  name="left"
                  size={18}
                  color="black"
                  style={{
                    // height: 38,
                    // alignSelf: 'center',
                    // borderWidth:1,
                    // marginBottom: 5,
                    marginLeft: 10,
                  }}
                />
                  <Text
            style={{
              height: 28,
              width: 140,
              alignSelf: 'center',
              marginTop: 15,
              marginBottom: 25,
              backgroundColor: 'white',
              position: 'absolute',
            }}
          />
        
              </View>
            </TouchableOpacity>

            <TextInput
              style={style.red}
              placeholder="Aadhar number"
              placeholderTextColor="#79747E"
            />
          </View>
          
  
            
  
          <View style={style.footer}>
            {/* <View> */}
            <TouchableOpacity
         mode="contained" onPress={() => navigation.navigate('Pan')}
          >
              <View style={[style.btn]}>
                <Text style={{color: '#ffffff'}}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  
  const style = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      height: '98%',
      margin:2
    },
    body: {
      flex: 1,
      backgroundColor: '#fff',
    },
    footer: {
      // marginLeft: 16,
      // marginRight: 10,
      // margin: 6,
      // height: 47,
      // width: 310,
      // top:280,
      backgroundColor: '#fff',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
      height: 47,
      width: 310,
      backgroundColor: '#5E17EB',
      justifyContent: 'center',
      // flexDirection: "row",
      alignItems: 'center',
      borderRadius: 10,
    },
    red: {
      marginLeft: 16,
      marginRight: 10,
      // margin: 6,
      height: 47,
      width: 310,
      borderWidth: 1,
      borderRadius: 12,
      padding: 10,
      top: 30,
    },
    box: {
      borderWidth: 1.5,
      borderColor: '#79747E',
      //   margin: 10,
      height: 140,
      width: 140,
      borderStyle: 'dashed',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
  
    row: {
      flexDirection: 'row',
      // margin: 10,
      justifyContent: 'space-evenly',
      backgroundColor: '#fff',
      marginBottom: 290,
    },
  });
  export default Aadhaar;