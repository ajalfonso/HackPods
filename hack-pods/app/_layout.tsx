import { ConvexProvider, ConvexReactClient } from "convex/react";

import { Stack } from "expo-router";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="skills" />
        <Stack.Screen name="interests" />
      </Stack>
    </ConvexProvider>
  );
}
