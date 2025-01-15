import { View, Text } from 'react-native'
import React from 'react'
import "../global.css";
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const _layout = () => {
    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='screen'/>
    </Stack>
    </QueryClientProvider>
  )
}

export default _layout