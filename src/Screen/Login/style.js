import {Colors} from '../../assets';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 27,
  },
  heading: {
    fontSize: 40,
    color: Colors.white,
    fontWeight: 'bold',
  },
  HText: {
    color: Colors.grey,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    width: '78%',
    marginBottom: 79,
  },
  forgotText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
  },

  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 7,
  },
});

export default styles;
