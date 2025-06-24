import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import vacationDestinations, { VacationDestination } from "../../lib/vacationsDestinations";

interface WikiSummary {
  extract: string;
  thumbnail?: {
    source: string;
  };
}


export default function Lab4() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [wikiData, setWikiData] = useState<Record<string, WikiSummary>>({});
  const router = useRouter();

  const handlePress = async (destination: VacationDestination) => {
    const { id, location } = destination;

    if (activeId === id) {
      setActiveId(null);
      return;
    }

    if (!wikiData[location]) {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
            location
          )}`
        );
        const data = await res.json();
        setWikiData((prev) => ({ ...prev, [location]: data }));
      } catch (error) {
        console.error(`Failed to fetch data for ${location}`, error);
      }
    }

    setActiveId(id);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: "white" }}>


      {vacationDestinations.map((destination) => {
        const isActive = activeId === destination.id;
        const wiki = wikiData[destination.location];

        return (

          <View key={destination.id} style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={() => handlePress(destination)}>
              <Text style={styles.text}>{destination.location}</Text>
            </TouchableOpacity>

            {isActive && (
              <View style={{ marginTop: 10 }}>
                <Text>Price: ${destination.price}</Text>
                <Text>
                  Average Temp: {destination.average_yearly_temperature}
                </Text>
                {wiki && (
                  <>
                    {wiki.thumbnail?.source && (
                      <Image
                        source={{ uri: wiki.thumbnail.source }}
                        style={{ width: 200, height: 120, marginTop: 10 }}
                      />
                    )}
                    <Text style={{ marginTop: 5 }}>{wiki.extract}</Text>
                  </>
                )}
              </View>
            )}
          </View>
        );
      })}
      <View>
        <TouchableOpacity onPress={() => router.push("../")}>
          <Text style={styles.text}>Return Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "green",
    width: 200,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
});
