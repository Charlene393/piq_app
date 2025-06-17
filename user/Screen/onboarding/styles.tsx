import { ImageBackground, StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@/themes/app.constant';  
import { commonStyles } from '@/styles/common.style';
import { external } from '@/styles/external.style';
import { BackArrow } from '@/utils/icons';
import color from '@/themes/app.colors';
import fonts from '@/themes/app.fonts';

const styles = StyleSheet.create({
  slideContainer: {
    ...commonStyles.flexContainer,
  },
  imageBackground: {
    width: '100%',
    height: windowHeight(300),
    marginBottom: windowHeight(40),
    resizeMode: 'stretch',
  },
  title:{
    ...commonStyles.mediumText23,
    marginTop: windowHeight(25),
    ...external.ti_center,
  },
  description:{
    ...commonStyles.regularText,
    paddingTop: windowHeight(12),
    width: '75%',
    ...external.as_center,
    fontSize: fontSizes.FONT18,
    lineHeight: windowHeight(10),
    ...external.ti_center,
  },
  backArrow:{
    width: windowHeight(34),
    height: windowHeight(34),
    borderRadius: windowHeight(34),
    backgroundColor: color.buttonBg,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: windowHeight(20),
    left: '50%',
    transform: [{ translateX: -windowWidth(17) }],
    position: 'absolute',
  },
  img:{
    width: '100%',
    height: windowHeight(180),
    marginTop: windowHeight(45),
  },
  activeStyle:{
    width: '7%',
    backgroundColor: color.buttonBg,
    height: windowHeight(10),
    borderRadius: windowHeight(5),
  },
  paginationStyle:{
    position: 'absolute',
    bottom: windowHeight(60), // Space for back arrow below
    left: 0,
    right: 0,
    height: windowHeight(20),
    flexDirection: 'row', // Dots on left and right
    alignItems: 'center',
    paddingHorizontal: windowWidth(20),
  },
  imageBgView:{
    ...commonStyles.flexContainer,
    ...external.js_end,
  },
  flagImage:{
    height: windowHeight(20),
    width: windowWidth(30),
    borderRadius: 15
  }, 
  downArrow:{
    paddingVertical: windowHeight(4),
    paddingHorizontal: windowWidth(5),
  },
  dropdownMenu:{
    borderRadius: 5,
    borderWidth: 0,
  },
  dropdownContainer:{
    width: windowWidth(180),
    borderWidth: 0,
    color: color.alertRed
  },
  labelStyle:{
    fontFamily: fonts.medium
  },
  dropdown:{
    borderWidth: 0,
    backgroundColor: 'transparent',
},
skipText:{
    color: color.regularText,
    paddingVertical: windowHeight(4),
    fontFamily: fonts.regular,
},
});

export {styles};
