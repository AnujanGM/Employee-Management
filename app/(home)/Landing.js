import { Text, View, Pressable, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const Landing = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>

      <View style={{ padding: 12 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <FontAwesome name="bar-chart" size={24} color="black" />
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Employee management System</Text>
          <FontAwesome name="lock" size={24} color="black" />
        </View>

        {/* Pressable 2 - row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 20 }}>
          <Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 12, backgroundColor: '#D3CCE3' }}
          onPress={() => navigation.navigate('Employee')}>
            <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="people" size={24} color="black" />
            </View>
            <Text style={{ fontWeight: 600, marginTop: 12 }}>Employee List</Text>
          </Pressable>

          <Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 12, backgroundColor: '#D3CCE3' }}>
            <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="people" size={24} color="black" />
            </View>
            <Text style={{ fontWeight: 600, marginTop: 12 }}>Mark Attendance</Text>
          </Pressable>
        </View>

        {/* Pressable 4 - column  */}
        <View style={{ backgroundColor: 'white', marginTop: 10, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 7 }}>
          <Pressable style={{ flexDirection: 'row', backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, alignItems: 'center', marginVertical: 10 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: 'white', borderRadius: 7, padding: 7 }}>
              <Ionicons name="newspaper" size={24} />
            </View>
            <Text style={{ flex: 1, marginLeft: 10, fontSize: 16, fontWeight: 800 }}>Attendandce Report</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: 'white', borderRadius: 7 }}>
              <Ionicons name="chevron-forward" size={24} />
            </View>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, alignItems: 'center', marginVertical: 10 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: 'white', borderRadius: 7, padding: 7 }}>
              <Ionicons name="book" size={24} />
            </View>
            <Text style={{ flex: 1, marginLeft: 10, fontSize: 16, fontWeight: 800 }}>Summary Report</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: 'white', borderRadius: 7 }}>
              <Ionicons name="chevron-forward" size={24} />
            </View>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, alignItems: 'center', marginVertical: 10 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: 'white', borderRadius: 7, padding: 7 }}>
              <Ionicons name="documents" size={24} />
            </View>
            <Text style={{ flex: 1, marginLeft: 10, fontSize: 16, fontWeight: 800 }}>All Generate Reports</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: 'white', borderRadius: 7 }}>
              <Ionicons name="chevron-forward" size={24} />
            </View>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, alignItems: 'center', marginVertical: 10 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: 'white', borderRadius: 7, padding: 7 }}>
              <Ionicons name="people" size={24} />
            </View>
            <Text style={{ flex: 1, marginLeft: 10, fontSize: 16, fontWeight: 800 }}>Overtime Employees</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: 'white', borderRadius: 7 }}>
              <Ionicons name="chevron-forward" size={24} />
            </View>
          </Pressable>
        </View>
        {/* Pressable 2 - row */}
       
        <View style={{ flexDirection: 'row', gap: 12, marginTop: 20}}>
          <View style={{ flex: 1, backgroundColor: '#f79d00', padding: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 35, width: 35, borderRadius: 7 }}>
              <MaterialIcon name="guy-fawkes-mask" size={24} />
            </View>
            <Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#ABCABA', padding: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 35, width: 35, borderRadius: 7 }}>
              <FontAwesome name="bar-chart" size={24} />
            </View>
            <Text style={{ marginTop: 7 }}>Increased Workflow</Text>
          </View>
        </View>
        {/* Pressable 2 - row */}
        <View style={{ flexDirection: 'row', gap: 12, marginTop: 20}}>
          <View style={{ flex: 1, backgroundColor: '#d3cce3', padding: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 35, width: 35, borderRadius: 7 }}>
              <MaterialIcon name="guy-fawkes-mask" size={24} />
            </View>
            <Text style={{ marginTop: 7 }}>Cost Savings</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#bdc3c7', padding: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 35, width: 35, borderRadius: 7 }}>
              <FontAwesome name="bar-chart" size={24} />
            </View>
            <Text style={{ marginTop: 7 }}>Employee Performance</Text>
          </View>
        </View>
        

      </View>
    </LinearGradient>
  </ScrollView>
  )
}

export default Landing
