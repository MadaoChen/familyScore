import { View, Text, Image } from '@tarojs/components'
import { useState } from 'react'
import { useLoad } from '@tarojs/taro'
import './index.scss'

// 图片
import rankS from './img/rank-s.png'
import huanguan from './img/huanguan.png'
import rankF from './img/rank-f.png'


export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  // 数据初始化
  const [user, setUser] = useState([
    {
      name: '陈赟',
      short: '赟',
      point: 0
    },
    {
      name: '游涵',
      short: '涵',
      point: 0
    }
  ])


  // 按住滑动
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [touchTime, setTouchTime] = useState(0);
  const leastTouchTime = 1000

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchTime(new Date().getTime());
  };

  const handleTouchMove = (e: any) => {
    // 是否按住不动1s中
    if (touchTime === 0 || new Date().getTime() - touchTime < leastTouchTime) {
      console.log('按住不动少于规定时间');
      setTouchTime(0);
      return;
    }

    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    // 是否按住不动1s中
    if (touchTime === 0 || new Date().getTime() - touchTime < leastTouchTime) {
      console.log('按住不动少于规定时间');
      setTouchTime(0);
      return;
    }
    
    if (touchEndX === 0) {
      console.log('未滑动');
      return;
    }

    console.log('touchStartX', touchStartX, 'touchEndX', touchEndX)
    if (touchStartX - touchEndX > 10) {  // 设置滑动距离的阈值，如 50px
      console.log('向左滑动');
      // 执行向上滑动的操作
    } else if (touchEndX - touchStartX > 10) {
      console.log('向右滑动');
      // 执行向下滑动的操作
    }
  };

  return (
    <View className='container'>
      <View className='time'>
        <View className='time-item'>
          <View className='time-title'>Daily</View>
          <View className='time-time'>today</View>
        </View>

        <View className='time-separator'></View>

        <View className='time-item active'>
          <View className='time-title'>Weekly</View>
          <View className='time-time'>this week</View>
        </View>

        <View className='time-separator'></View>

        <View className='time-item'>
          <View className='time-title'>Monthly</View>
          <View className='time-time'>this month</View>
        </View>
      </View>

      <View className='rank'>
        <View className='rank-second'>
          <View className='rank-second-photo blue'>
            <Image src={rankS} className='rank-s'></Image>
            <Text className='rank-s-text'>2</Text>
            <Text className='rank-s-name'>{user[1].short}</Text>
          </View>
          <View className='rank-second-content'>
            <View className='rank-second-content-title'>{user[1].name}</View>
            <View className='rank-second-content-time'><Text className='rank-s-point'>{user[1].point}</Text> 积分</View>
          </View>
        </View>

        <View 
          className='rank-first'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <View className='rank-first-photo orange'>
            <Image src={huanguan} className='rank-huanguan' ></Image>
            <Image src={rankF} className='rank-f'></Image>
            <Text className='rank-f-text'>1</Text>
            <Text className='rank-s-name'>{user[0].short}</Text>
          </View>
          <View className='rank-first-content'>
            <View className='rank-first-content-title'>{user[0].name}</View>
            <View className='rank-first-content-time'><Text className='rank-f-point'>{user[0].point}</Text> 积分</View>
          </View>
        </View>
        <View className='rank-third'></View>
      </View>
      
    </View>
  )
}
