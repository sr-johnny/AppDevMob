import { Dashboard } from "@/components/dashboard";
import { SelectText } from "@/components/select-text";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";

import { Calendar, CalendarList } from "react-native-calendars";

import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import { Legislacoes } from "@/components/legislacoes";
import { Agenda } from "@/components/agenda";
import { Fornecedores } from "@/components/fornecedores";

export default function Pagina() {
  const params = useLocalSearchParams();
  const { id, name } = params;

  const [valueAgenda, setValueAgenda] = useState<boolean>(false);
  const [valueFornecedores, setValueFornecedores] = useState<boolean>(false);
  const [valueLegislacoes, setValueLegislacoes] = useState<boolean>(false);
  const [valueRelatorios, setValueRelatorios] = useState<boolean>(false);
  const [valueNotificacoes, setValueNotificacoes] = useState<boolean>(false);

  return (
    <ScrollView style={styles.scroll}>
      <Dashboard
        bottomIMG={50}
        content={
          <>
            <View style={styles.container}>
              <Text style={styles.title}>{name}</Text>

              <SelectText
                text="Agenda"
                onPress={() => setValueAgenda(!valueAgenda)}
              />
              {valueAgenda ? <Agenda /> : <></>}
              <SelectText
                text="Fornecedores"
                onPress={() => setValueFornecedores(!valueFornecedores)}
              />
              {valueFornecedores ? <Fornecedores /> : <></>}
              <SelectText
                text="Legislações"
                onPress={() => setValueLegislacoes(!valueLegislacoes)}
              />
              {valueLegislacoes ? <Legislacoes /> : <></>}
              <SelectText
                text="Relatórios"
                onPress={() => setValueRelatorios(!valueRelatorios)}
              />
              <SelectText
                text="Notificações"
                onPress={() => setValueNotificacoes(!valueNotificacoes)}
              />
            </View>
          </>
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    //paddingBottom: -50,
    backgroundColor: "#AFDDF7",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    color: "#0a4b77ff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
