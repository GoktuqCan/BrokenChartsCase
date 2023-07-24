import React, { useMemo } from 'react';
import RightArrow from 'assets/icons/RightArrow';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ACTIVITY_TYPES } from 'state/constants';
import { Activity } from 'state/home/types';
import { colors } from 'styles/colors';

export type SearchItemType = Activity & { icon: any };

export type SearchItemProps = {
  item: SearchItemType;
};

const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const subText = useMemo(() => {
    return `${(ACTIVITY_TYPES as any)[item.type]} • ${
      item.participants
    } Person • ${item.price > 0.5 ? 'Expensive' : 'Cheap'}`;
  }, [item.participants, item.price, item.type]);

  return (
    <Pressable style={styles.container}>
      <View style={styles.iconContainer}>
        <item.icon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.activity}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
      <RightArrow style={styles.rightArrow} />
    </Pressable>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 48,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  subText: {
    marginTop: 4,
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '400',
  },
  rightArrow: {
    marginTop: 14,
    marginRight: 16,
  },
});
