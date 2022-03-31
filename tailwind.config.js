module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif']
      },
      colors: {
        background: '#f8f9fd',
        paleGrey: '#e4e7f4',
        blueGrey: '#9198af',
        line: '#c0c3d2',
        lightYellow: '#dbff90',
        dark: '#2a2d3b',
        lightRed: '#fa7268',
        lightPink: '#fff3f2',
        paleWhite: '#e1e1e1',
        modal: 'rgba(0, 0, 0, 0.40)'
      },
      borderRadius: {
        custom: '20px'
      },
      shadow: {
        custom: '0px 2px 4px 0px rgba(0,0,0,0.16)',
        modal: '0px 16px 10px 0px rgba(0,0,0,0.16)'
      },
      keyframes: {
        show: {
          '0%': { transform: 'translate3d(0,-3rem,0)', opacity: '0' }
        }
      },
      animation: {
        show: 'show 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }
    }
  },
  plugins: []
}
