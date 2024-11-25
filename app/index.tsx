import { Text, View, SafeAreaView, Pressable, Image, ImageBackground } from "react-native";
import { Link, Stack } from "expo-router";
import Estilo from "../assets/style/index";



export default function Index() {

  return (

    <SafeAreaView style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%"
    }}>
     
      <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 100 }}>
        <View style={{ display: "flex", flexDirection: "column", gap: 20, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/images/logo001.png")} />
          <Text style={Estilo.texto}><h2>Bem vindo!!</h2></Text>
        </View>
        <Text style={Estilo.texto2}>
          <h4>Seja bem-vindo ao nosso aplicativo de estudos! Aqui, você encontra uma plataforma única, com conteúdos exclusivos e uma jornada de aprendizado feita sob medida para você. Aproveite a flexibilidade para aprender no seu tempo e de maneira envolvente. Estamos juntos nessa missão de alcançar seus objetivos e transformar o estudo em uma experiência prazerosa e eficaz!</h4>
        </Text>
      </View>


    </SafeAreaView>
  );
}