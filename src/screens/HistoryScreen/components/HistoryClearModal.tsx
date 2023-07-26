import React, { useCallback } from 'react';
import Trash from 'assets/icons/Trash';
import Button from 'components/Button';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { clearHistory } from 'state/history/actions';
import { colors } from 'styles/colors';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const HistoryClearModal: React.FC<Props> = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const onClearPress = useCallback(() => {
    dispatch(clearHistory());
    onClose();
  }, [dispatch, onClose]);

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.container}>
        <Trash width={44} height={44} />
        <Text style={styles.title}>Delete history</Text>
        <Text style={styles.description}>
          Are you sure to remove all history items, this action is irreversible!
        </Text>
        <View style={styles.buttonsContainer}>
          <Button style={styles.button} label="Cancel" onPress={onClose} />
          <View style={styles.buttonSeparator} />
          <Button
            style={styles.button}
            dark
            label="Delete"
            onPress={onClearPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default HistoryClearModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: colors.bgPrimary,
    borderRadius: 12,
    alignItems: 'center',
  },
  title: {
    marginTop: 12,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: colors.textPrimary,
  },
  description: {
    marginTop: 4,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 22,
  },
  buttonSeparator: {
    width: 8,
  },
  button: {
    flex: 1,
  },
});
