import { Provider } from 'app/provider'
import { Stack, Tabs } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      {/* <Tabs initialRouteName="index">
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home'
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: 'User',
            href: 'user/Jack'
          }}
          />
      </Tabs> */}
      <Stack/>
    </Provider>
  )
}
