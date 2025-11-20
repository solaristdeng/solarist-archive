/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // System fonts only - fast, lightweight, no external requests
        'sans': [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          '微软雅黑',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
        'mono': [
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        'serif': [
          'Georgia',
          'Cambria',
          'Times New Roman',
          'STSong',
          'SimSun',
          '宋体',
          'Songti SC',
          'serif',
        ],
      },
    },
  },
  plugins: [],
}