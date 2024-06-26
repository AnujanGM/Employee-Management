import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const SearchResults = ({data, input, setInput}) => {
  return (
    <View style={{ padding: 10 }}>
      <FlatList data={data} renderItem={({ item }) => {
        if (item.employeeName.toLowerCase().includes(input.toLowerCase())) {
          return (
            <View style={{ marginVertical: 10, gap: 10, flexDirection: 'row' }}>
              <View style={{ height: 50, width: 50, padding: 10, borderRadius: 8, backgroundColor: "#4b6cb7", alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontWeight:'bold'}}>{item.employeeName.charAt(0)}</Text>
              </View>

              <View>
                <Text>{item.employeeName}</Text>
                <Text>{item.designation} {item.employeeId}</Text>
              </View>

            </View>
          ); 
        }
      }}/>
    </View>
  )
}

export default SearchResults;

const styles = StyleSheet.create({})