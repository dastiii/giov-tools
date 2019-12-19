module.exports = {
  theme: {
      fontFamily: {
          mono: ['PT Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
          sans: ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
    extend: {
      fontFamily: {
        brand: ['Kaushan Script', 'sans-serif'],
      },

      opacity: {
        '0': '0',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '95': '0.95',
        '100': '1',
      },

      colors: {
        brand: '#499161',
          'brand-white': '#ddeee3',
        brandlight: '#55aa70',
        branddark: '#3c774f',
        softblack: '#121212',
        gray: {
          "050": "#F7F7F7",
          "100": "#E1E1E1",
          "200": "#CFCFCF",
          "300": "#B1B1B1",
          "400": "#9E9E9E",
          "500": "#7E7E7E",
          "600": "#626262",
          "700": "#515151",
          "800": "#3B3B3B",
          "900": "#222222",
          "950": "#121212",
        }
      }
    },
  },
  variants: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  plugins: []
}
