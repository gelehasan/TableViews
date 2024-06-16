import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
export default function App() {

  let tableData = [{ "header": "Section 1", "cells": [{ "title": "Cell 1" }, { "title": "Cell 2 " }] }];

  const Customcell = (props) => (
    <Cell
      {...props}
      cellContentView={
        <View>
          <Text>{props.customLabel}</Text>
        </View>
      }
    />

  )
  return (
    //For the content to not touch the top notch
    <SafeAreaView>
      {/** for scrolling behavior */}
      <ScrollView style={{ height: "100%" }}>
        <TableView>

          {
            tableData.map((section, i) => (
              <Section
                header={section.header}
              >
                {
                  section.cells.map((cell, i) => (
                    <Customcell
                      customLabel={cell.title}
                    />
                  ))
                }


              </Section>
            ))
          }


        </TableView>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
