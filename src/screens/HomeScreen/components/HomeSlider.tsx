import React from 'react';
import { Text } from 'react-native';
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
      <Text>{label}</Text>
      <Slider
        {...restOfProps}
        minimumTrackTintColor={colors.sliderBlue}
        maximumTrackTintColor={colors.sliderGrey}
      />
    </>
  );
};

export default HomeSlider;
