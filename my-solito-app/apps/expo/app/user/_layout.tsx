import { Stack } from "expo-router";

export default function UserStack() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FAB855'
      },
      headerTintColor: '#fff'
    }}>
      <Stack.Screen
      name="[id]"
      options={{
        title: 'TEST'
      }}
        />
    </Stack>
  )
}