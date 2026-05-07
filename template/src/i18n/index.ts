// Importing the English language strings from the './en' file.
// Initializing a new instance of LocalizedStrings from 'react-native-localization' library.
// Setting the imported English strings as the default language for the application.

import LocalizedStrings from 'react-native-localization';
import {en} from './en';
export const strings = new LocalizedStrings({
  en,
});
