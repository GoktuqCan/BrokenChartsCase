import React, { useCallback } from 'react';
import RightArrow from 'assets/icons/RightArrow';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Activity } from 'state/home/types';
import { colors } from 'styles/colors';
import { getActivityDescription } from 'utils/StringUtils';

export type SearchItemType = Activity & { icon: any };

export type SearchItemProps = {
  item: SearchItemType;
  onSelect: (activity: Activity) => void;
};

const SearchItem: React.FC<SearchItemProps> = ({ item, onSelect }) => {
  const onPress = useCallback(() => {
    onSelect(item);
  }, [item, onSelect]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <item.icon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.activity}</Text>
        <Text style={styles.subText}>{getActivityDescription(item)}</Text>
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
