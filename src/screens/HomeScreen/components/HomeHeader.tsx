import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'styles/colors';
import Profile from 'assets/images/Profile.png';
import TypeSlider from './TypeSlider';
import HeaderTitle from 'components/HeaderTitle';

const HomeHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.titleContainer}>
        <HeaderTitle>Bored API</HeaderTitle>
        <Image source={Profile} style={styles.image} />
      </View>
      <TypeSlider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgSecondary,
    borderWidth: 1,
    borderColor: colors.bgSeparator,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
  },
  image: {
    width: 32,
    height: 32,
  },
});

export default HomeHeader;
