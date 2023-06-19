import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import StrengthItem from "../components/StrengthItem";
import EnvDataContainer from "../components/EnvDataContainer";

export default function ClimbDataPage({ navigation, route }) {
  const id = route.params.id;
  const [climbSessionData, setClimbSessionData] = useState(null);

  const fetchClimbSession = async () => {
    const data = await fetch(
      `http://192.168.0.29:3000/climbSessions?item_id=${id}`
    );
    const json = await data.json();
    setClimbSessionData(json[0]);
  };

  useEffect(() => {
    fetchClimbSession();
    navigation.setOptions({ title: `Climb Session id: ${id}` });
  }, []);

  return (
    <View>
      {climbSessionData && (
        <View>
          <StrengthItem strength={climbSessionData.hand_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Mano</Text>:
          </StrengthItem>
          <StrengthItem strength={climbSessionData.index_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Indice</Text>:
          </StrengthItem>
          <StrengthItem strength={climbSessionData.middle_fingerStrength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Corazon</Text>:
          </StrengthItem>
          <StrengthItem strength={climbSessionData.ring_finger_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Anular</Text>:
          </StrengthItem>
          <EnvDataContainer id={id} />
        </View>
      )}
    </View>
  );
}
