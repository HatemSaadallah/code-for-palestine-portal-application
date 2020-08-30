import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackActions, NavigationActions } from '@react-navigation/native';

let BackButton = ({ navigation, screenName }) => {
  return (
    <View style={styles.backButton}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Content')
        }}>
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 20,
            color: 'white',
            padding: 10,
          }}>
          {' '}
          Go Back{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Year1Gaza = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <BackButton />
      <WebView
        source={{
          uri:
            'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2333B679&ctz=Asia%2FGaza&src=OGZ1bmd1amlvcW5tZHE3M3RsNGJ0bDNlamdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=djdrbG90c2FpZXA3aHY5bzQ5bGtpdXVtaDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NGEzN2l2bWJuZDFudHBvNm81aDl2anJwNGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73&color=%237CB342&color=%233F51B5&color=%23E4C441&title=Gaza%20Year%201%20&showPrint=0&showTz=0&mode=DAY',
        }}
        style={{
          width: '100%',
          height: 300,
        }}
        scrollEnabled
        originWhitelist={['*']}
      />
    </View>
  );
};

const Year2Gaza = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=Asia%2FGaza&src=b29yN2xyb3FiZTBtNzhuZ2RuaG50bzFkbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c3Q5ZnVrYXVkcnZ1dHJhbm5ra3RobDIwMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2Z2cmNuaGJnYnVndjBpNjhtNWFoOTFyZzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&color=%23F6BF26&color=%237CB342&color=%237CB342&title=Year%202%20Gaza&showTz=0&showPrint=0&mode=DAY',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const Year3Gaza = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=Asia%2FGaza&src=b29yN2xyb3FiZTBtNzhuZ2RuaG50bzFkbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c3Q5ZnVrYXVkcnZ1dHJhbm5ra3RobDIwMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bHVoZThkbGkwdXRrbzluNXJpODFiZ2phZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTBldjEwNWhiMDVhYmg0bG1sZ2poNDJucW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&color=%23F6BF26&color=%230B8043&color=%239E69AF&color=%237CB342&title=Year%203%20Gaza%20&showTz=0&showPrint=0&mode=DAY',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const Year1WestBankGroupA = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2333B679&ctz=Asia%2FGaza&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=djdrbG90c2FpZXA3aHY5bzQ5bGtpdXVtaDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTZoZDB0bW43cDhvMnY2Z29tbmwxbDFzZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NGEzN2l2bWJuZDFudHBvNm81aDl2anJwNGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342&color=%233F51B5&color=%23616161&color=%23E4C441&title=WestBank%20Year1%20-%20Group%20A&showTz=0&showPrint=0&mode=DAY',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const Year1WestBankGroupB = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2333B679&ctz=Asia%2FGaza&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=djdrbG90c2FpZXA3aHY5bzQ5bGtpdXVtaDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cjhmMGU0b2FoN3Y1NW1naHFpbmg0ODlsdXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NGEzN2l2bWJuZDFudHBvNm81aDl2anJwNGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342&color=%233F51B5&color=%23F6BF26&color=%23E4C441&title=WestBank%20Year1%20-%20Group%20B&showTz=0&showPrint=0&mode=DAY',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const Year2WestBankGroupA = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=Asia%2FGaza&src=b29yN2xyb3FiZTBtNzhuZ2RuaG50bzFkbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c3Q5ZnVrYXVkcnZ1dHJhbm5ra3RobDIwMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aTUzODZqaTk4MzZvbm5tN2FpNDRubm9jaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&color=%23F6BF26&color=%237CB342&color=%23F09300&title=Year%202%20WestBank%20(Group%20A)&showTz=0&showPrint=0&mode=DAY',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const Year2WestBankGroupB = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=Asia%2FGaza&src=b29yN2xyb3FiZTBtNzhuZ2RuaG50bzFkbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c3Q5ZnVrYXVkcnZ1dHJhbm5ra3RobDIwMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cThvcnU0cGFvNW9vYm4zYjZyNms1bTA3c2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&color=%23F6BF26&color=%237CB342&color=%23F6BF26&title=Year%202%20WestBank%20Group%20B&showTz=0&showPrint=0&mode=DAY',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const Year3WestBankGroupA = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=Asia%2FGaza&src=b29yN2xyb3FiZTBtNzhuZ2RuaG50bzFkbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c3Q5ZnVrYXVkcnZ1dHJhbm5ra3RobDIwMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTBldjEwNWhiMDVhYmg0bG1sZ2poNDJucW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aTUzODZqaTk4MzZvbm5tN2FpNDRubm9jaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&color=%23F6BF26&color=%239E69AF&color=%237CB342&color=%23F09300&title=Year%203%20WestBank%20Group%20A&showTz=0&showTitle=1&showNav=1&showDate=1&showPrint=0&showTabs=1&mode=DAY',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const Year3WestBankGroupB = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=Asia%2FGaza&src=b29yN2xyb3FiZTBtNzhuZ2RuaG50bzFkbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c3Q5ZnVrYXVkcnZ1dHJhbm5ra3RobDIwMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTBldjEwNWhiMDVhYmg0bG1sZ2poNDJucW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cThvcnU0cGFvNW9vYm4zYjZyNms1bTA3c2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&color=%23F6BF26&color=%239E69AF&color=%237CB342&color=%23F6BF26&title=Year%203%20WestBank%20Group%20B&showTz=0&mode=DAY&showPrint=0&showDate=1&showNav=1&showTitle=1&showTabs=1&showCalendars=1',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const ALL = () => {
  return (
    <WebView
      source={{
        uri:
          'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Asia%2FGaza&src=c2FlZWQuZmFsYW5hQGdtYWlsLmNvbQ&src=c3Q5ZnVrYXVkcnZ1dHJhbm5ra3RobDIwMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=OGZ1bmd1amlvcW5tZHE3M3RsNGJ0bDNlamdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2Z2cmNuaGJnYnVndjBpNjhtNWFoOTFyZzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bHVoZThkbGkwdXRrbzluNXJpODFiZ2phZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTBldjEwNWhiMDVhYmg0bG1sZ2poNDJucW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amZqajJqYTlrMmdyZmNqbnJtZHF1YTYwYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aTUzODZqaTk4MzZvbm5tN2FpNDRubm9jaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cThvcnU0cGFvNW9vYm4zYjZyNms1bTA3c2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=djdrbG90c2FpZXA3aHY5bzQ5bGtpdXVtaDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTZoZDB0bW43cDhvMnY2Z29tbmwxbDFzZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cjhmMGU0b2FoN3Y1NW1naHFpbmg0ODlsdXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NW1hN2xtZWh2NzJ1dnVmcWdjZHVlYzduZWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=czNnYW5pMWc1OG5wbnAxbzZpNmV1Nms1MW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NGEzN2l2bWJuZDFudHBvNm81aDl2anJwNGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=b29yN2xyb3FiZTBtNzhuZ2RuaG50bzFkbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB&color=%23F6BF26&color=%23E67C73&color=%237CB342&color=%230B8043&color=%239E69AF&color=%237CB342&color=%23F09300&color=%23F6BF26&color=%233F51B5&color=%23616161&color=%2333B679&color=%23D81B60&color=%23AD1457&color=%23E4C441&color=%23F4511E&title=Code%20fora%20Palestine%20&showPrint=0&showTz=0&mode=DAY',
      }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const Content = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ felx: 1 }}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Year1Gaza')}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>YEAR 1 Gaza</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Year1WestBankGroupA')}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>YEAR 1 WESTBANK</Text>
              <Text style={styles.textOfYear}>GROUP A</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Year1WestBankGroupB')}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>YEAR 1 WESTBANK</Text>
              <Text style={styles.textOfYear}>GROUP B</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Year2Gaza')}
            style={styles.item}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>Year 2 Gaza</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Year2WestBankGroupA')}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>Year 2 WESTBANK</Text>
              <Text style={styles.textOfYear}>GROUP A</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Year2WestBankGroupB')}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>YEAR 2 WESTBANK</Text>
              <Text style={styles.textOfYear}>GROUP B</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Year3Gaza')}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>YEAR 3 Gaza</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Year3WestBankGroupA')}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>YEAR 3 WESTBANK</Text>
              <Text style={styles.textOfYear}>GROUP A</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Year3WestBankGroupB')}>
            <View>
              <Image
                style={styles.timeImage}
                source={require('../assets/time.png')}
              />
              <Text style={styles.textOfYear}>YEAR 3 WESTBANK</Text>
              <Text style={styles.textOfYear}>GROUP B</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.all}
          onPress={() => navigation.navigate('ALL')}>
          <View>
            <Image
              style={styles.timeImage}
              source={require('../assets/time.png')}
            />
            <Text style={styles.textOfYear}>ALL</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const DashboardStack = createStackNavigator();

export default function Main() {
  return (
    <DashboardStack.Navigator mode="modal" headerMode="none">
      <DashboardStack.Screen name="Content" component={Content} />
      <DashboardStack.Screen name="Year1Gaza" component={Year1Gaza} />
      <DashboardStack.Screen name="Year2Gaza" component={Year2Gaza} />
      <DashboardStack.Screen name="Year3Gaza" component={Year3Gaza} />
      <DashboardStack.Screen
        name="Year1WestBankGroupA"
        component={Year1WestBankGroupA}
      />
      <DashboardStack.Screen
        name="Year1WestBankGroupB"
        component={Year1WestBankGroupB}
      />
      <DashboardStack.Screen
        name="Year2WestBankGroupA"
        component={Year1WestBankGroupB}
      />
      <DashboardStack.Screen
        name="Year2WestBankGroupB"
        component={Year1WestBankGroupB}
      />
      <DashboardStack.Screen
        name="Year3WestBankGroupA"
        component={Year1WestBankGroupB}
      />
      <DashboardStack.Screen
        name="Year3WestBankGroupB"
        component={Year1WestBankGroupB}
      />
      <DashboardStack.Screen name="ALL" component={ALL} />
    </DashboardStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  item: {
    flexDirection: 'column',
    height: 140,
    backgroundColor: '#FFF',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  timeImage: {
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  textOfYear: {
    textAlign: 'center',
  },
  all: {
    flexDirection: 'column',
    height: 160,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  backButton: {
    height: 50,
    backgroundColor: '#95C14C',
  },
});
