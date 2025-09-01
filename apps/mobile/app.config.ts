import { EASConfig, ExpoConfig } from '@expo/config';

const createConfig = (): Omit<ExpoConfig, 'extra'> & { extra: { eas: EASConfig } & typeof extra } => {
  const projectId = '';

  const appId = 'com.rn.workshop.dev';

  const extra = {
    eas: { projectId } as EASConfig,
  };

  return {
    name: 'React Native Workshop Dev',
    slug: 'react-native-workshop-app',
    scheme: 'react-native-workshop-dev',
    version: '0.1.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      url: `https://u.expo.dev/${projectId}`,
    },
    ios: {
      bundleIdentifier: appId,
      supportsTablet: false,
      buildNumber: '1',
      config: {
        usesNonExemptEncryption: false,
      },
    },
    android: {
      package: appId,
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      edgeToEdgeEnabled: true,
    },
    plugins: [
      'expo-router',
      'expo-localization',
      [
        'expo-image-picker',
        {
          photosPermission: 'Allow React Native Workshop to access your photos',
          cameraPermissions: 'Allow React Native Workshop to access your camera',
        },
      ],
    ],
    newArchEnabled: true,
    extra,
  };
};

export default createConfig;
