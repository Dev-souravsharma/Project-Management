import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors/Color';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  cardStyle: {
    width: '47%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  cardTitle: {
    color: Colors.white,
  },
  card: {
    backgroundColor: Colors.white,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 30,
    borderRadius: 10,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
  },
});
export default Styles;
