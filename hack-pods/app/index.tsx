import { Link } from "expo-router";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

export default function Index() {
  const tasks = useQuery(api.tasks.get);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {tasks?.map(({ _id, text }) => <Text key={_id}>{text}</Text>)} */}
      <Link href="/login">Login Menu</Link>
      <Link href="/skills">Skills Menu</Link>
      <Link href="/interests">Interests Menu</Link>
      <Link href="/swipe">Swipe</Link>
    </View>
    
  );
}
