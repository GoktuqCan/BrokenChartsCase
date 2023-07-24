import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
} from 'react-native';
import { colors } from 'styles/colors';
import useKeyboardShow from 'hooks/useKeyboardShow';
import Clear from 'assets/icons/Clear';
import Search from 'assets/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from 'state/search/actions';
import { RootState } from 'state/types';

const SearchInput = () => {
  const { searchTerm } = useSelector(({ search }: RootState) => ({
    searchTerm: search.searchTerm,
  }));
  const dispatch = useDispatch();
  const isKeyboardShow = useKeyboardShow();
  const [isFocused, setIsFocused] = useState(false);
  const onCancelPress = useCallback(() => {
    Keyboard.dismiss();
  }, []);
  const onClearPress = useCallback(() => {
    dispatch(setSearchTerm(''));
    Keyboard.dismiss();
  }, [dispatch]);
  const onChangeText = useCallback(
    (value: string) => {
      dispatch(setSearchTerm(value));
    },
    [dispatch],
  );
  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          isFocused || searchTerm ? styles.focusedInputContainer : null,
        ]}
      >
        <Search color={isFocused || searchTerm ? colors.textPrimary : ''} />
        <TextInput
          style={styles.input}
          placeholder="Search Activity"
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          value={searchTerm}
        />
        {searchTerm ? (
          <Pressable onPress={onClearPress}>
            <Clear />
          </Pressable>
        ) : null}
      </View>
      {isKeyboardShow ? (
        <Pressable style={styles.cancelButton} onPress={onCancelPress}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.bgSeparator,
    height: '100%',
    flex: 1,
  },
  focusedInputContainer: {
    borderColor: colors.black,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  cancelButton: {
    marginLeft: 8,
  },
  cancelText: {
    color: colors.textSecondary,
  },
});

export default SearchInput;