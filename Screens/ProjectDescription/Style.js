import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors/Color';
const Styles = StyleSheet.create({
  contaniner: {
    flex: 1,
    color: Colors.white,
  },
  card: {
    padding: 16,
    backgroundColor: Colors.white,
    elevation: 7,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    color: Colors.COLOR_THEME_SECONDARY,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: Colors.grey,
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleContainer: {
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  image: {
    flex: 4,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  titleStyle: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: '600',
  },
  header: {
    marginHorizontal: 18,
    flex: 1,
  },
  subTitleStyle: {
    color: Colors.grey,
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 12,
  },
  buttonStyle: {
    backgroundColor: Colors.COLOR_THEME_SECONDARY,
  },
  buttonStyleLogin: {
    backgroundColor: Colors.COLOR_THEME,
  },
  buttonTitle: {
    color: Colors.white,
  },
  VStack: {
    flex: 2,
    paddingHorizontal: 16,
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
    flex: 1,
  },
  buttonContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: Colors.COLOR_THEME_SECONDARY,
  },
  buttonTile: {
    color: Colors.white,
  },
  indicator: {
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
export default Styles;
