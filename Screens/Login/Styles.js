import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors/Color';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  welcomeStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  welcomeContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  welcomeSubtitleContainer: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  welcomeSubtitleStyle: {
    fontSize: 16,
    color: Colors.grey,
  },
  inputContainer: {
    width: '95%',
    marginTop: 16,
    alignSelf: 'center',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputCont: {
    flex: 2,
  },
  buttonContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 16,
  },
  loginButton: {
    backgroundColor: Colors.COLOR_THEME_SECONDARY,
  },
  buttonTile: {
    color: Colors.white,
  },
});
export default Styles;
