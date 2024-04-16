import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import { connect } from 'react-redux';
import { setTabIndex } from '../actions/tabIndex'; // 引入 action creator

import './index.scss'

interface Props {
  setTabIndex: (index: number) => void;
  tabIndex: number;
  // 其他的 props...
}

class Index extends Component<Props> {
  state = {
    selected: this.props.tabIndex,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: '/pages/index/index',
        text: '',
        iconPath: '../images/tab/house.png',
        selectedIconPath: '../images/tab/house-active.png'
      },
      {
        pagePath: '/pages/schedule/index',
        text: '',
        iconPath: '../images/tab/calendar.png',
        selectedIconPath: '../images/tab/calendar-active.png'
      },
      {
        pagePath: '/pages/travel/index',
        text: '',
        iconPath: '../images/tab/travel.png',
        selectedIconPath: '../images/tab/travel-active.png'
      }
    ]
  }

  switchTab(index: any, url: any) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected (idx: number) {
    this.props.setTabIndex(idx)
  }

  render() {
    const { list, selected, color, selectedColor } = this.state
    console.log('this.props', this.props.tabIndex, selected)

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}

const mapStateToProps = (state: any) => {
  console.log('state', state)
  // 插入到组件的 props 中
  return {
    tabIndex: state.tabIndex.tabIndex
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  setTabIndex: setTabIndex(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)