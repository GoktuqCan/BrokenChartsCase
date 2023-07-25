import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from 'styles/colors';
import Profile from 'assets/images/Profile.png';

type Props = {
  isRight: boolean;
  text: string;
};

const ChatItem: React.FC<Props> = ({ text, isRight }) => {
  return (
    <View style={[styles.container, isRight ? styles.reverse : null]}>
      {!isRight ? <Image source={Profile} style={styles.image} /> : null}
      <View style={[styles.item, isRight ? styles.reverseItem : null]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  reverse: {
    justifyContent: 'flex-end',
  },
  item: {
    backgroundColor: colors.bgSecondary,
    borderWidth: 0.5,
    borderColor: colors.bgSeparator,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 20,
    marginLeft: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 32,
  },
  reverseItem: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,
    marginRight: 0,
  },
  text: {
    fontSize: 14.5,
    color: colors.textPrimary,
    fontWeight: '400',
  },
  image: {
    width: 24,
    height: 24,
  },
});
