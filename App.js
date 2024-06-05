import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
export default function App() {

  let tableData = [{"title":"Row 1"}, {"title":"Row 2"}] ;
  return (
    //For the content to not touch the top notch
    <SafeAreaView> 
       {/** for scrolling behavior */}
      <ScrollView style={{height:"100%"}}> 
    <TableView>
      <Section>
        {
          tableData.map((x)=>(
            <Cell
                title={x.title}
            />
          ))
        }

      </Section>
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
