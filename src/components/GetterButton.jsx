import { useField } from "formik";
import React from "react";
import { Pressable, Text, PermissionsAndroid } from "react-native";

const getValueFromDevice = async ({ setValue }) => {
  //TODO: connect by bluethoot to stregth device and get strength data
  ////////////////////////////////////////////////////////////////////
  setValue("ValorObtenido");
  console.log("Obtengo valor del dispositivo");
};

const GetterButton = (props) => {
  const name = props.name;
  [fieldProps, fieldMeta, fieldHelpers] = useField(name);
  const { setValue } = fieldHelpers;

  return (
    <Pressable
      style={styles.button}
      onPress={() => getValueFromDevice({ setValue })}
    >
      <Text style={{ color: "#FFF" }}> Obtener </Text>
    </Pressable>
  );
};

export default GetterButton;
