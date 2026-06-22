# Bedside Pro — React Native App

A proper native iOS/Android app built with Expo/React Native.

## Quick start

```bash
cd bedside-native
npm install
npx expo start
```

Scan the QR code with **Expo Go** (iOS/Android) to see it instantly on your phone.

## Build proper APK / IPA

### Setup EAS (one time)
```bash
npm install -g eas-cli
eas login
eas build:configure
```

### Android APK
```bash
eas build --platform android --profile preview
# → downloads a .apk you can sideload or submit to Play Store
```

### iOS IPA
```bash
eas build --platform ios
# → requires Apple Developer account ($99/yr)
```

### Both at once
```bash
eas build --platform all
```

## Project structure

```
bedside-native/
├── App.js                     # Root: navigation + global context
├── app.json                   # Expo config (bundle ID, icons, etc.)
├── src/
│   ├── calculators.js         # All 12 formulas (pure JS)
│   ├── theme.js               # Design tokens: dark/light + 5 accents
│   └── screens/
│       ├── HomeScreen.js      # Pinned/recent cards + grid
│       ├── ToolsScreen.js     # Searchable tool list
│       ├── ToolScreen.js      # Calculator UI + sticky result footer
│       ├── ReferenceScreen.js # How to use + legal + SpO₂ targets
│       └── SettingsScreen.js  # Theme toggle + accent picker
```

## What's different from the web app

- **Native inputs** — number pad appears automatically, proper cursor
- **Horizontal gesture navigation** — swipe to go back (iOS native feel)
- **KeyboardAvoidingView** — content scrolls up when keyboard opens
- **Haptics** — can add with `expo-haptics` on any button press
- **No service worker** — offline is native (just works)
- **True APK/IPA** — submittable to Play Store / App Store

## Submitting to stores

### Google Play Store
1. Build AAB: `eas build --platform android --profile production`
2. Go to play.google.com/console → Create app → Upload AAB
3. Fill in store listing → Submit for review (~3 days)

### Apple App Store  
1. Need Apple Developer account: developer.apple.com ($99/yr)
2. Build: `eas build --platform ios --profile production`
3. Upload via EAS Submit: `eas submit --platform ios`
4. Fill in App Store Connect → Submit for review (~1-2 days)

## Customising

- **Icons**: replace `assets/icon.png` (1024×1024), `assets/adaptive-icon.png` (Android), `assets/splash.png`
- **Bundle ID**: update `ios.bundleIdentifier` and `android.package` in `app.json`
- **EAS Project ID**: run `eas build:configure` to link your EAS account

## Adding new calculators

1. Add formula function to `src/calculators.js`
2. Add entry to the `TOOLS` array with `id`, `name`, `icon`, `desc`, `color`, `rgb`, `fields`, `calc`
3. If it needs a custom result layout, add a conditional block in `ToolScreen.js`
