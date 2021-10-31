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
});
export default Styles;
