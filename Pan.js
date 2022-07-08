import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';
// import {CheckBox} from 'react-native-check-box';
const myAlert = () =>Alert.alert("Hurray ! You got 1 month Plus membership worth ₹999 for free.Enjoy the plus features and earn more everyday")

// const [isSelected, setSelection] = useState(false);
export default class Demo extends Component {

  render() {
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
            </View>
          </TouchableOpacity>
          <Image
            source={require('./images/Logo.png')}
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
          <TextInput
            style={style.red}
            placeholder="PAN"
            placeholderTextColor="#79747E"
          />
        </View>
        

        <View style={[style.row]}>
          <View style={[style.box]}>
            <AntDesign name="pluscircle" size={30} color="#5E17EB" />
            <Text style={{margin: 3, color: '#8C52FF', fontSize: 12}}>
              Front Picture
            </Text>
          </View>

          <View style={[style.box]}>
            <AntDesign name="pluscircle" size={30} color="#5E17EB" />
            <Text style={{margin: 3, color: '#8C52FF', fontSize: 12}}>
              Back Picture
            </Text>
          </View>
        </View>

        <View style={{bottom:70,padding:1,position:'absolute',marginLeft:15}}>
        <AntDesign name="checksquare" size={16} color="#5E17EB" />
        </View>


          <View style={{bottom:5,padding:1,justifyContent:'center',alignSelf:'center'}}>

            
          <Text style={{color:'#161616',fontSize:14}}>
            I hereby consent to receiving communications </Text>
            <Text style={{color:'#161616',fontSize:14}}> from SeekMe for any
            relevant opportunities
          </Text>
          </View>
          
          

        <View style={style.footer}>
          {/* <View> */}
          <TouchableOpacity onPress={myAlert}>           
           <View style={[style.btn]}>
              <Text style={{color: '#ffffff'}}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
    marginBottom: 250,
  },
});
