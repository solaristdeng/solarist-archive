/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Brutalist 风格字体栈 - 优先使用 Google Fonts，回退到系统字体
        'sans': [
          // 西文：简洁、工业感强的无衬线字体
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          // 中文：优先使用 Google Fonts，回退到系统字体
          'Noto Sans SC',           // Google Fonts - 现代、清晰
          'PingFang SC',            // macOS - 苹方
          'Hiragino Sans GB',       // macOS 旧版
          'Microsoft YaHei',        // Windows 回退
          '微软雅黑',
          'Source Han Sans SC',     // Linux
          // 通用 fallback
          'sans-serif',
          // Emoji 支持
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
        // 等宽字体 - 用于代码和技术内容
        'mono': [
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        // 衬线字体 - 用于文学样式
        'serif': [
          'Noto Serif SC',          // Google Fonts - 优雅宋体
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