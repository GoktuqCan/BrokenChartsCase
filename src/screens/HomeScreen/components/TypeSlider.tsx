import React, { useCallback } from 'react';
import { Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIVITY_TYPES } from 'state/constants';
import { selectType } from 'state/home/actions';
import { RootState } from 'state/types';
import { colors } from 'styles/colors';

type ItemProps = {
  isSelected: boolean;
  item: string;
  onChange: (type: string) => void;
  index: number;
};

const TypeItem: React.FC<ItemProps> = ({
  isSelected,
  item,
  onChange,
  index,
}) => {
  const onPress = useCallback(() => {
    onChange(item);
  }, [item, onChange]);

  return (
    <Pressable
      style={[
        styles.item,
        isSelected ? styles.selectedItem : null,
        index ? styles.nextItem : null,
      ]}
      onPress={onPress}
    >
      <Text style={[isSelected ? styles.selectedItemText : null]}>{item}</Text>
    </Pressable>
  );
};

const TypeSlider = () => {
  const dispatch = useDispatch();
  const { type } = useSelector(({ home }: RootState) => ({
    type: home.activityType,
  }));

  const onChange = useCallback(
    (newType: string) => {
      dispatch(selectType(newType));
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return (
        <TypeItem
          index={index}
          isSelected={type === item}
          item={item}
          onChange={onChange}
        />
      );
    },
    [onChange, type],
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      horizontal
      style={styles.list}
      renderItem={renderItem}
      data={Object.values(ACTIVITY_TYPES)}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 12,
    marginBottom: 8,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  item: {
    paddingHorizontal: 16,
    borderRadius: 17,
    height: 34,
    justifyContent: 'center',
    borderColor: colors.black,
    borderWidth: 1,
  },
  selectedItem: {
    backgroundColor: colors.black,
  },
  selectedItemText: {
    color: colors.white,
  },
  nextItem: {
    marginLeft: 10,
  },
});

export default TypeSlider;
