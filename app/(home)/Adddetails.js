import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

const Adddetails = () => {
    const [name, setName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [designation, setDesignation] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [dob, setDob] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [salary, setSalary] = useState("");
    const [address, setAddress] = useState("");

    const handleRegister = () => {
        const employeeData = {
            employeeId: employeeId,
            employeeName: name,
            designation: designation,
            phoneNumber: mobileNo,
            dateOfBirth: dob,
            joiningDate: joiningDate,
            activeEmployee: true,
            salary: salary,
            address: address,
        };
        axios
            .post("http://192.168.8.150:8000/addEmployee", employeeData)
            .then((response) => {
                Alert.alert("Registration Successful", "You have registered successfully");
                setName("");
                setEmployeeId("");
                setAddress("");
                setDesignation("");
                setJoiningDate("");
                setSalary("");
                setMobileNo("");
                setDob("");
            })
            .catch((error) => {
                Alert.alert("Registration failed", "An error occurred during registration");
                if (error.response) {
                    console.log("Response error", JSON.stringify(error.response.data, null, 2));
                } else if (error.request) {
                    console.log("Request error", JSON.stringify(error.request, null, 2));
                } else {
                    console.log("Error", error.message);
                }
                console.log("Config error", JSON.stringify(error.config, null, 2));
            });
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Add a new employee</Text>
                <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='india' placeholderTextColor={'black'} />

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Full name (First and Last)</Text>
                    <TextInput value={name} onChangeText={(text) => setName(text)} style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Enter your name' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee ID</Text>
                    <TextInput value={employeeId} onChangeText={(text) => setEmployeeId(text)} style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Employee ID' placeholderTextColor={'black'} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>
                    <TextInput value={designation} onChangeText={(text) => setDesignation(text)} style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Designation' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Mobile Number</Text>
                    <TextInput value={mobileNo} onChangeText={(text) => setMobileNo(text)} style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Mobile No' placeholderTextColor={'black'} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Date of Birth </Text>
                    <TextInput value={dob} onChangeText={(text) => setDob(text)} style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Enter Date of Birth' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
                    <TextInput value={joiningDate} onChangeText={(text) => setJoiningDate(text)} style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Joining Date' placeholderTextColor={'black'} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                    <Text>Active Employee</Text>
                    <Text>True</Text>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
                    <TextInput value={salary} onChangeText={(text) => setSalary(text)} style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Enter Salary' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
                    <TextInput value={address} onChangeText={(text) => setAddress(text)} style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Enter Address' placeholderTextColor={'black'} />
                </View>

                <Pressable onPress={handleRegister} style={{ backgroundColor: '#ABCABA', padding: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 7 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Add Employee</Text>
                </Pressable>

            </View>
        </ScrollView>
    )
}

export default Adddetails;

const styles = StyleSheet.create({})