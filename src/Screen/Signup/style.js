import {Colors} from '../../assets';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    color: Colors.white,
    fontWeight: 'bold',
    marginBottom:22
  },
  inputContainer:{
    backgroundColor:'coral',
    width:"78%"
  },
  btnContainer:{
    marginTop:35,
     
  }
 
 
});

export default styles;
