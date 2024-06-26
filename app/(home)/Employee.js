import { Pressable, StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SearchResults from '../../components/SearchResults';

const Employee = () => {
  const navigation = useNavigation();

  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://192.168.8.150:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log('Error fetching the employee', error)
      }
    }
    fetchEmployeeData();
  }, []);

  console.log(employees);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
        <Ionicons style={{ marginLeft: 10 }} name='arrow-back' size={24} color='black' />
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 7, gap: 10, backgroundColor: 'white', height: 40, borderRadius: 4, flex: 1 }}>
          <AntDesign name='search1' size={20} color='black' />
          <TextInput style={{ flex: 1 }} value={input} onChangeText={(text) => setInput(text)} placeholder='Search' />

          {employees.length > 0 && (
            <View>
              <Pressable onPress={() => navigation.navigate("Adddetails")}>
                <AntDesign   name="pluscircle" size={30} color="#0072b1" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>

      {employees.length > 0 ? (
        <SearchResults data={employees} input={input} setInput={setInput} />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Data</Text>
          <Text>Press on the plus button and add your employee</Text>
          <Pressable onPress={() => navigation.navigate('Adddetails')}>
            <AntDesign name="pluscircle" size={24} color="#0072b1" />
          </Pressable>
        </View>
      )
      }
    </View>
  );
};


export default Employee;

const styles = StyleSheet.create({

})