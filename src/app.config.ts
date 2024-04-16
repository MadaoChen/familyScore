export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/schedule/index',
    'pages/travel/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor: '#fefae0'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '',
        iconPath: './images/tab/house.png',
        selectedIconPath: './images/tab/house-active.png'
      },
      {
        pagePath: 'pages/schedule/index',
        text: '',
        iconPath: './images/tab/calendar.png',
        selectedIconPath: './images/tab/calendar-active.png'
      },
      {
        pagePath: 'pages/travel/index',
        text: '',
        iconPath: './images/tab/travel.png',
        selectedIconPath: './images/tab/travel-active.png'
      }
      // 更多 tab...
    ],
    custom: true,
  },
  usingComponents: {}
})
