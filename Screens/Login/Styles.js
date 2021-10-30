import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors/Color';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.grey,
  },
  welcomeContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  welcomeSubtitleContainer: {
    marginHorizontal: 16,
  },
  welcomeSubtitleStyle: {
    fontSize: 16,
  },
});
export default Styles;
