import NavigationService from '@/nice-router/navigation.service'
import { View } from '@tarojs/components'
import ActionIcon from './action-icon'

import './styles.scss'

function NavigationLineItem(props) {
  const { imageUrl, title, brief, icon } = props

  const onClick = () => {
    NavigationService.view(props)
  }

  return (
    <View className='navigation-line-item' onClick={onClick}>
      <View className='navigation-line-item-preicon' />
      <View className='navigation-line-item-content'>
        <View className='navigation-line-item-content-brief'>{brief}</View>
        <View className='navigation-line-item-content-title'>{title}</View>
      </View>
      <View className='navigation-line-item-tailicon'>
        <ActionIcon imageUrl={imageUrl} icon={icon} mode='widthFix' />
      </View>
    </View>
  )
}

NavigationLineItem.options = {
  addGlobalClass: true,
}
export default NavigationLineItem
