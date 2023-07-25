import React, { useCallback } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'styles/colors';
import Profile from 'assets/images/Profile.png';
import HeaderTitle from 'components/HeaderTitle';
import ArrowLeft from 'assets/icons/ArrowLeft';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.titleContainer}>
        <Pressable onPress={onBackPress}>
          <ArrowLeft />
        </Pressable>
        <HeaderTitle style={styles.title}>Bored API</HeaderTitle>
        <Image source={Profile} style={styles.image} />
      </View>
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
    marginBottom: 12,
  },
  image: {
    width: 32,
    height: 32,
  },
  title: {
    flex: 1,
    marginLeft: 14,
  },
});

export default ChatHeader;
