import NavigationService from '@/nice-router/navigation.service'
import { useAsyncEffect } from '@/service/use.service'
import { View } from '@tarojs/components'

function TestPage() {
  useAsyncEffect(() => {
    NavigationService.view('mock-generic-page/')
  })
  return <View />
}

TestPage.options = {
  addGlobalClass: true,
}
export default TestPage
