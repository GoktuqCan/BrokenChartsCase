import React, { useCallback, useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from 'styles/colors';
import HomeHeader from './components/HomeHeader';
import HomeSlider from './components/HomeSlider';
import Button from 'components/Button';
import Random from 'assets/icons/Random';
import { useDispatch } from 'react-redux';
import { findActivity } from 'state/home/actions';

// Aimed for scalable approach. New fields can be added by just adding new entries to this object
const FIELDS = {
  price: { label: 'Price', min: 0, max: 1, fragment: 2 },
  participants: { label: 'Participants', min: 0, max: 10, fragment: 0 },
  accessibility: { label: 'Accessibility', min: 0, max: 1, fragment: 2 },
};

export type Fields = {
  [key in keyof typeof FIELDS]?: number;
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState<Fields>(
    Object.entries(FIELDS).reduce((prevValue, [key, value]) => {
      return { ...prevValue, [key]: value.min };
    }, {}),
  );

  const sliders = useMemo(() => {
    return Object.entries(FIELDS).map(([key, value]) => (
      <HomeSlider
        label={`${value.label}: ${fields[key].toFixed(value.fragment)}`}
        minimumValue={value.min}
        maximumValue={value.max}
        step={Math.pow(10, -value.fragment)}
        value={(fields as any)[key]}
        // There won't be performance issues because of the new function for every item.
        // Each component is in useMemo(). It wouldn't cause rerenders.
        onValueChange={newValue => {
          setFields(prevState => ({
            ...prevState,
            [key]: Number(newValue.toFixed(value.fragment)),
          }));
        }}
      />
    ));
  }, [fields]);
  const randomizeValues = useCallback(() => {
    const newFields = {
      price: 0,
      participants: 0,
      accessibility: 0,
    };
    Object.entries(FIELDS).forEach(([key, value]) => {
      (newFields as any)[key] = Number(
        (Math.random() * value.max).toFixed(value.fragment),
      );
    });
    setFields(newFields);
  }, []);
  const findActivityPress = useCallback(() => {
    dispatch(findActivity(fields));
  }, [dispatch, fields]);

  return (
    <>
      <HomeHeader />
      <View style={styles.wrapper}>
        {sliders}
        <Button
          label="Randomize Values"
          leftIcon={<Random />}
          style={styles.randomButton}
          onPress={randomizeValues}
        />
        <Button
          dark
          label="Find Activity"
          style={styles.findButton}
          onPress={findActivityPress}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.bgPrimary,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  randomButton: {
    marginTop: 32,
  },
  findButton: {
    marginTop: 8,
  },
});
