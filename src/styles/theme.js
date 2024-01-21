export const theme = Object.freeze({
  colors: {
    // accent: '#2196F3',
    // white: '#ffffff',
    // gray: '#9e9e9e',
    // light: '#f2f2f2',
    //     dark: '#212121',
    darkMagenta: '#8b008b',
    crimson: '#dc143c',
    dodgerBlue: '#1e90ff',
    green: '#008000',
    darkOrange: '#ff8c00',
    darkBlue: '#020B4A',
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
  },

  spacing: value => `${value * 4}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',

    button: '5px 5px 15px rgba(0, 0, 0, 0.5) ',
    inner: 'inset 0 0 7px rgba(0, 0, 0, 0.4)',
    innerTwo: 'inset 0 0 10px  rgba(0, 0, 0, 0.5)',
    innerTr: 'inset 0 7px 10px  rgba(0, 0, 0, 0.5)',
    hover: '0 0 10px rgba(0, 0, 0, 0.7)',
  },
});
