import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

type ModalProps = {
  children: React.ReactNode;
  initialState: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
  fullScreen?: boolean;
  closable?: boolean;
  closeModal: () => void;
};

export const ModalComponent: React.FC<ModalProps> = ({
  children,
  initialState,
  padding = 'small',
  fullScreen = false,
  closable = true,
  closeModal,
}) => {
  const getPadding = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'small':
        return 10;
      case 'medium':
        return 20;
      case 'large':
        return 30;
      default:
        return 10;
    }
  };

  return (
    <Modal
      transparent={true}
      visible={initialState}
      animationType="slide"
      onRequestClose={closable ? closeModal : () => {}}
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.modalContainer,
            fullScreen ? styles.fullScreen : styles.partialScreen,
            { padding: getPadding() },
          ]}
        >
          {closable && (
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeText}>X</Text>
            </Pressable>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  fullScreen: {
    flex: 1,
    width: '100%',
  },
  partialScreen: {
    width: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});