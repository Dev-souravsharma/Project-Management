import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors/Color';
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
});
export default Style;
