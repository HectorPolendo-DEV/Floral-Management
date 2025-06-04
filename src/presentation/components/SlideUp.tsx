import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Pressable,
  Platform
} from 'react-native';

const { height } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SlideUp: React.FC<Props> = ({ visible, onClose, children }) => {
  const translateY = useRef(new Animated.Value(height)).current;
  const [internalVisible, setInternalVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      setInternalVisible(true);
      translateY.setValue(height);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: Platform.OS !== 'android' // ⚠️ workaround: en Android a veces falla
      }).start();
    } else if (internalVisible) {
      Animated.timing(translateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: Platform.OS !== 'android'
      }).start(() => {
        setInternalVisible(false);
        setShouldRender(false);
      });
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <Modal
      transparent
      visible={true}
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <Pressable
          style={styles.backdrop}
          onPress={onClose}
          android_disableSound={true}
        />
        <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000055'
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: 200
  }
});

export default SlideUp;
