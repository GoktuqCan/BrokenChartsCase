import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Slider, { SliderProps } from '@react-native-community/slider';
import { colors } from 'styles/colors';

type Props = {
  label: string;
};

const HomeSlider: React.FC<Props & SliderProps> = ({
  label,
  ...restOfProps
}) => {
  return (
    <>
      <Text style={styles.text}>{label}</Text>
      <Slider
        {...restOfProps}
        minimumTrackTintColor={colors.sliderBlue}
        maximumTrackTintColor={colors.sliderGrey}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    lineHeight: 22,
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
});

export default HomeSlider;
