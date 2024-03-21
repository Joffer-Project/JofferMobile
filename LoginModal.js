import React from 'react';
import { Modal } from 'react-native';
import LoginScreen from './components/LoginScreen';

const LoginModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <LoginScreen />
    </Modal>
  );
};

export default LoginModal;
