import { isNotEmpty } from '@/nice-router/nice-router-util'
import ServerImage from '@/server-image/server-image'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import './styles.scss'

/**
 *  有icon，优先展示ICON
 */
function ActionIcon({ value, icon, imageUrl, className, mode }) {
  const rootClass = classNames('action-icon', className)
  const actionValue = value || icon
  return (
    <View className={rootClass}>
      {isNotEmpty(actionValue) ? (
        <View className={`iconfont ${actionValue}`} />
      ) : (
        <ServerImage customStyle={{ width: '100%', height: '100%' }} mode={mode} src={imageUrl} />
      )}
    </View>
  )
}

ActionIcon.options = {
  addGlobalClass: true,
}
export default ActionIcon
