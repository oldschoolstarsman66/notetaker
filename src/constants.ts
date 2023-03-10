enum Routes {
  NotesList = "NoteList",
  NoteEditor = "NoteEditor",
  LogIn = "LogIn",
  SignUp = "SignUp",
}

enum NavigationTabs {
  All = "All",
  Favorites = "Favorites",
}

const GlobalStyles = {
  colors: {
    white: "rgba(255, 255, 255, 1)",
    lightGrey: "rgba(246, 246, 246, 1)",
    darkGrey: "rgba(185, 183, 183, 1)",
    orange: "rgb(243, 128, 100)",
    lightGreen: "rgb(236, 253, 236)",
    accent: "rgba(37, 126, 129, 1)",
    lightPurple: "rgb(243, 238, 253)",
    yellow: "rgb(251, 243, 152)",
    lighterDark: "rgb(33, 33, 33)",
  },
};

const darkerBackgrounds = [GlobalStyles.colors.accent];

const ColorPickerColors = [
  GlobalStyles.colors.accent,
  GlobalStyles.colors.orange,
  GlobalStyles.colors.lightPurple,
  GlobalStyles.colors.yellow,
  GlobalStyles.colors.lightGreen,
];

export {
  Routes,
  GlobalStyles,
  ColorPickerColors,
  NavigationTabs,
  darkerBackgrounds,
};
