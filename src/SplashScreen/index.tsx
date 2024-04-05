import React, { useEffect } from 'react';
import { View, StyleSheet, Image} from 'react-native';

interface SplashScreenProps {
  loadFunction: () => Promise<void>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ loadFunction }) => {
  useEffect(() => {
    const showSplashScreen = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      loadFunction();
    };

    showSplashScreen();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/animation/splash.png')} style={styles.splashImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default SplashScreen;
