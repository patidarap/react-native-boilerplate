# React Native Boilerplate

A production-ready React Native boilerplate with navigation, Redux, i18n, axios, and more — pre-configured so you can focus on building features.

## Usage

```bash
npx @react-native-community/cli@latest init MyApp --template react-native-boiler-plate
```

## Features

- **Navigation:** React Navigation with separate `AuthStack`, `AppStack`, `TabNavigator`, and a typed `RootNavigationRef` for navigating outside components
- **Redux:** Redux Toolkit setup with `LoaderSlice` and `ProfileSlice`, typed `useAppSelector` / `useAppDispatch` hooks
- **Axios:** Pre-configured `axiosInstance` with request/response interceptors for auth token injection and error handling (401, 500, network errors)
- **Internationalization (i18n):** i18next + react-i18next with English and Spanish locale support
- **TypeScript:** Full type coverage including navigation param lists and screen props
- **Babel Aliases:** Clean imports via path aliases (e.g. `@screens`, `@components`, `@appRedux`)
- **Custom Components:** `PrimaryLoader`, `PrimaryText`, `PrimaryButton`, `PrimaryFlashMessage`, `PrimaryScrollView`, `NoInternetModalPopUp`
- **Asset Management:** Fonts (Poppins) and SVG images with centralized exports
- **Async Storage:** Utility wrappers for AsyncStorage via `@common`
- **Network Detection:** `NoInternetModalPopUp` using `@react-native-community/netinfo`

## Requirements

- Node >= 22.11.0
- React Native 0.84.1
- React 19.2.3

## Project Structure

```
📁src
│
├── 📁api
│   ├── axiosInstance.ts       # Axios instance with request/response interceptors
│   └── index.ts
│
├── 📁appRedux
│   ├── 📁modules
│   │   ├── LoaderSlice.ts     # Global loader state
│   │   └── ProfileSlice.ts    # User auth/profile state
│   └── index.ts               # Store setup, typed hooks, slice exports
│
├── 📁assets
│   ├── 📁fonts
│   │   ├── Poppins-*.ttf
│   │   └── index.ts
│   ├── 📁images
│   │   ├── IC_Home_Active.svg
│   │   ├── IC_Home_UnActive.svg
│   │   ├── IC_Setting_Active.svg
│   │   ├── IC_Setting_UnActive.svg
│   │   └── index.ts
│   └── index.ts
│
├── 📁common
│   ├── asyncServices.ts       # AsyncStorage get/set/clear helpers
│   ├── constant.ts            # App-wide constants (BASE_URL, ASYNC_KEY, etc.)
│   ├── helperFunctions.ts     # Utility functions (showDangerMessage, prettyPrint, etc.)
│   └── index.ts
│
├── 📁components
│   ├── NoInternetModalPopUp.tsx
│   ├── PrimaryButton.tsx
│   ├── PrimaryFlashMessage.tsx  # Animated toast with fade in/out, per-type styling
│   ├── PrimaryLoader.tsx
│   ├── PrimaryScrollView.tsx    # Keyboard-aware ScrollView, auto-scrolls to focused input
│   ├── PrimaryText.tsx
│   └── index.ts
│
├── 📁hooks
│   └── index.ts
│
├── 📁i18n
│   ├── en.json                # English translations
│   ├── es.json                # Spanish translations
│   ├── i18n.ts                # i18next configuration
│   └── index.ts
│
├── 📁navigation
│   ├── AuthStack.tsx          # Unauthenticated screens (LogIn)
│   ├── AppStack.tsx           # Authenticated screens (TabNavigation, ModalScreen)
│   ├── MainNavigation.tsx     # Root NavigationContainer, switches Auth/App stack
│   ├── RootNavigationRef.ts   # Typed navigationRef + navigate/goBack/resetRoot helpers
│   ├── TabNavigator.tsx       # Bottom tab navigator (Home, Profile)
│   └── index.ts
│
├── 📁screens
│   ├── 📁Home
│   │   └── index.tsx
│   ├── 📁Login
│   │   └── index.tsx
│   ├── 📁ModalScreen
│   │   └── index.tsx
│   ├── 📁Profile
│   │   └── index.tsx
│   └── index.ts
│
├── 📁services
│   └── index.ts
│
├── 📁static
│   └── index.ts
│
├── 📁theme
│   ├── colors.ts
│   ├── dimensions.ts          # perfectSize helper
│   ├── styles.ts
│   └── index.ts
│
├── 📁types
│   ├── declarations.d.ts      # SVG and module declarations
│   └── index.ts               # Navigation param lists and screen prop types
│
└── index.tsx                  # App entry point
```

## Custom Components

### PrimaryFlashMessage

Animated toast notification with per-type styling (success, danger, warning, info). Fade in/out animation is driven by `animationDuration`. Rendered via a custom `FlashMessageComponent` for full layout control.

```ts
import {showSuccessMessage, showDangerMessage} from '@common';

// Success
showSuccessMessage('Saved!');

// Error
showDangerMessage('Something went wrong');

// With description
showDangerMessage('Check your input', {description: 'Email is invalid'});

// With a local FlashMessage ref
showSuccessMessage('Profile updated!', {}, flashRef);
showDangerMessage('Upload failed', {description: 'Try again'}, flashRef);
```

### PrimaryScrollView

A keyboard-aware `ScrollView` that automatically scrolls the focused `TextInput` into view when the keyboard opens. The scroll offset is calculated dynamically based on the actual height of the focused input.

```tsx
import {PrimaryScrollView} from '@components';

<PrimaryScrollView>
  <TextInput placeholder="Email" />
  <TextInput placeholder="Password" />
</PrimaryScrollView>;
```

To adjust the gap above the focused input, change the padding value inside `PrimaryScrollView.tsx`:

```ts
// Adjust the padding value (height - perfectSize(12)) to control the gap above the focused input.
y: Math.max(0, y - height - perfectSize(12));
```

## Navigation Structure

```
MainNavigation (NavigationContainer)
│
├── AuthStack        → LogIn
│
└── AppStack
    ├── TabNavigator
    │   ├── Home
    │   └── Profile
    └── ModalScreen  (transparentModal)
```

### Screen Prop Types

| Type                          | Use for                                              |
| ----------------------------- | ---------------------------------------------------- |
| `AuthStackScreenProps<T>`     | Screens inside `AuthStack` (e.g. `LogIn`)            |
| `AppStackScreenProps<T>`      | Screens inside `AppStack` (e.g. `ModalScreen`)       |
| `TabNavigationScreenProps<T>` | Tab screens that only use tab navigation             |
| `CompositeTabScreenProps<T>`  | Tab screens that also navigate to `AppStack` screens |

### Navigating Outside Components

Use the helpers from `@navigation` anywhere (services, redux, axios interceptors):

```ts
import {navigate, goBack, resetRoot} from '@navigation';

navigate('LogIn');
navigate('ModalScreen');
resetRoot({index: 0, routes: [{name: 'LogIn'}]});
```

## Babel Aliases

| Alias         | Path                  |
| ------------- | --------------------- |
| `@api`        | `./src/api`           |
| `@appRedux`   | `./src/appRedux`      |
| `@assets`     | `./src/assets`        |
| `@common`     | `./src/common`        |
| `@components` | `./src/components`    |
| `@fonts`      | `./src/assets/fonts`  |
| `@hooks`      | `./src/hooks`         |
| `@i18n`       | `./src/i18n`          |
| `@images`     | `./src/assets/images` |
| `@navigation` | `./src/navigation`    |
| `@screens`    | `./src/screens`       |
| `@services`   | `./src/services`      |
| `@static`     | `./src/static`        |
| `@theme`      | `./src/theme`         |
| `@types`      | `./src/types`         |

## Adding a New Alias

1. Create a folder inside `src/` with an `index.ts` that exports everything from it.

2. Add the alias to `babel.config.js`:

```js
alias: {
  '@newAlias': './src/newFolder',
}
```

3. Add the path to `tsconfig.json`:

```json
"paths": {
  "@newAlias": ["./src/newFolder"]
}
```

## Getting Started

Install dependencies:

```bash
npm install
```

iOS — install pods (first time or after native dependency changes):

```bash
bundle install
bundle exec pod install
```

Run on Android:

```bash
npm run android
```

Run on iOS:

```bash
npm run ios
```

Start Metro:

```bash
npm start
```

---

Powered by [React Native](https://reactnative.dev)
