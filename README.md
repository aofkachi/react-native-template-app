# React Native Template App

A complete React Native template with authentication, bottom tab navigation, and theme system. Built with Expo and TypeScript.

## ✨ Features

- **Authentication Context** - Mock auth with login/logout/register (easily replaceable)
- **Bottom Tab Navigation** - Home, Profile, Settings tabs
- **Conditional Navigation** - Auth stack vs Main tabs
- **Theme System** - Colors, typography, spacing, responsive utilities
- **TypeScript** - Full type safety throughout

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or newer) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Java Development Kit (JDK)** - Required for Android builds
- **Android Studio** (for Android development) - [Download](https://developer.android.com/studio)
  - Android SDK
  - Android Emulator or physical device
- **ADB** (Android Debug Bridge) - Included with Android Studio

### Verify ADB Installation

```bash
# Check if ADB is installed
adb version

# If not found, add to PATH (macOS):
export PATH=$PATH:~/Library/Android/sdk/platform-tools
```

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd react-native-template-app
yarn install
```

### 2. Start Development Server

```bash
yarn start
# OR
npx expo start
```

This starts the Metro bundler. You'll see a QR code and menu options.

### 3. Run on Android

#### Option A: Using Expo (Recommended for Development)

```bash
# Start with Android option
yarn android
# OR
npx expo run:android
```

#### Option B: Using ADB with Emulator

```bash
# Verify device is connected
adb devices

# Run the app
npx expo run:android
```

#### Option C: Using ADB with Physical Device

1. **Enable Developer Options** on your Android device:
   - Go to Settings > About Phone
   - Tap "Build Number" 7 times

2. **Enable USB Debugging**:
   - Go to Settings > Developer Options
   - Enable "USB Debugging"

3. **Connect and Verify**:
   ```bash
   # Connect device via USB
   adb devices
   # Should show your device listed
   ```

4. **Run the App**:
   ```bash
   npx expo run:android
   ```

---

## 📱 Building for Production

### Create Development Build

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS
eas build:configure

# Build Android APK (for testing)
eas build --platform android --profile preview
```

### Install APK via ADB

```bash
# Download APK from EAS build link, then:
adb install path/to/your-app.apk

# To replace existing installation:
adb install -r path/to/your-app.apk
```

### Build Production AAB (for Play Store)

```bash
eas build --platform android --profile production
```

---

## 📁 Project Structure

```
react-native-template-app/
├── src/
│   ├── context/
│   │   ├── AuthenticationContext.tsx  # 🔐 Auth state (MOCK - replace for production)
│   │   └── ThemeContext.tsx           # 🎨 Theme provider
│   ├── navigation/
│   │   ├── types.ts                   # Navigation type definitions
│   │   ├── RootNavigator.tsx          # Conditional auth/main navigation
│   │   ├── AuthStack.tsx              # Login/Register stack
│   │   └── MainTabs.tsx               # Bottom tab navigator
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   ├── Home/
│   │   │   └── HomeScreen.tsx
│   │   ├── Profile/
│   │   │   └── ProfileScreen.tsx
│   │   └── Settings/
│   │       └── SettingsScreen.tsx
│   ├── theme/
│   │   ├── index.ts                   # Theme aggregator
│   │   ├── colors.ts                  # Color palette
│   │   ├── typography.ts              # Font styles
│   │   └── spacing.ts                 # Spacing system
│   ├── App.tsx                        # Main app component
│   └── index.ts                       # Entry point
├── package.json
├── app.json                           # Expo config
├── tsconfig.json                      # TypeScript config
└── README.md
```

---

## 🔄 Replacing Mock Authentication

The template uses mock authentication for development. To integrate real auth:

### Option 1: AWS Amplify

```bash
npm install aws-amplify @aws-amplify/react-native
```

Then modify `src/context/AuthenticationContext.tsx`:

```typescript
// Replace mock login with:
import { signIn, signUp, signOut, getCurrentUser } from 'aws-amplify/auth';

const login = async (email: string, password: string) => {
  const result = await signIn({ username: email, password });
  // Handle result
};
```

### Option 2: Firebase

```bash
npm install @react-native-firebase/app @react-native-firebase/auth
```

```typescript
// Replace mock login with:
import auth from '@react-native-firebase/auth';

const login = async (email: string, password: string) => {
  await auth().signInWithEmailAndPassword(email, password);
};
```

### Option 3: Supabase

```bash
npm install @supabase/supabase-js
```

```typescript
// Replace mock login with:
import { supabase } from './supabaseClient';

const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
};
```

> 💡 **Tip**: Search for `🔄 REPLACE THIS` comments in `AuthenticationContext.tsx` for all sections that need modification.

---

## 🛠️ Common ADB Commands

```bash
# List connected devices
adb devices

# Install APK
adb install app.apk

# Reinstall (replace existing)
adb install -r app.apk

# Uninstall app
adb uninstall com.yourcompany.templateapp

# View device logs
adb logcat

# Filter React Native logs
adb logcat *:S ReactNative:V ReactNativeJS:V

# Reverse port (for Metro bundler)
adb reverse tcp:8081 tcp:8081

# Take screenshot
adb exec-out screencap -p > screenshot.png

# Record screen
adb shell screenrecord /sdcard/demo.mp4
```

---

## 📝 Customization Guide

### Change App Name and Bundle ID

1. Edit `app.json`:
   ```json
   {
     "expo": {
       "name": "Your App Name",
       "slug": "your-app-name",
       "android": {
         "package": "com.yourcompany.yourapp"
       },
       "ios": {
         "bundleIdentifier": "com.yourcompany.yourapp"
       }
     }
   }
   ```

### Customize Theme Colors

Edit `src/theme/colors.ts`:
```typescript
export const colors = {
  primary: '#YOUR_BRAND_COLOR',
  // ...
};
```

### Add New Screens

1. Create screen in `src/screens/YourScreen/YourScreen.tsx`
2. Add to navigation types in `src/navigation/types.ts`
3. Register in appropriate navigator (`MainTabs.tsx` or `AuthStack.tsx`)

---

## 🐛 Troubleshooting

### "Metro bundler not found"
```bash
npx expo start --clear
```

### "ADB device unauthorized"
- Disconnect USB, revoke USB debugging authorizations on device
- Reconnect and accept the prompt on device

### "App crashes on launch"
```bash
# View crash logs
adb logcat *:S ReactNative:V ReactNativeJS:V
```

### "Cannot connect to Metro"
```bash
adb reverse tcp:8081 tcp:8081
```

---

## 📄 License

MIT License - Feel free to use this template for your projects!
