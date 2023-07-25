import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from 'styles/colors';
import RightArrow from 'assets/icons/RightArrow';

type Props = {
  leftIcon: React.ReactElement;
  title: string;
  description: string;
  onPress?: () => void;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  notFound?: boolean;
};

const HistoryItem: React.FC<Props> = ({
  leftIcon,
  title,
  description,
  onPress,
  loading,
  style,
  disabled,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        loading ? styles.loadingContainer : null,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? <ActivityIndicator color={colors.grey} /> : leftIcon}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{loading ? 'Loading...' : title}</Text>
        <Text style={styles.description}>
          {loading ? 'Searching for activities' : description}
        </Text>
      </View>
      {!disabled && !loading ? <RightArrow color={colors.textPrimary} /> : null}
    </Pressable>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.textPrimary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingContainer: {
    borderColor: colors.bgSeparator,
  },
  icon: {
    marginLeft: 8,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  description: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
