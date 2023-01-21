import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';

const BottomModal = ({
  modalVisible,
  setIsBottomModalVisible,
  handleMenuModal,
  handleShareModal,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={setIsBottomModalVisible}>
      <TouchableWithoutFeedback onPress={setIsBottomModalVisible}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.title}>Opciones del restaurante</Text>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={handleShareModal}>
            <Image
              source={require('../../assets/icons/share.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Compartir</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleMenuModal}>
            <Image
              source={require('../../assets/icons/restaurant-menu.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Ver menús</Text>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => {}}>
            <Image
              source={require('../../assets/icons/share.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Crear Evento</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => {}}>
            <Image
              source={require('../../assets/icons/restaurant-menu.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>
              Mostrar que estoy en este restaurante
            </Text>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => {}}>
            <Image
              source={require('../../assets/icons/share.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Crear Evento</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    backgroundColor: '#fff',
    height: 500,
    marginTop: 'auto',
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 30,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    height: 85,
    width: 165,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default BottomModal;
