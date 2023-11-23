import React from 'react';

import { Link } from 'expo-router';
import { Button } from '@rneui/themed';
import { View,Text, TouchableOpacity,StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
import { Ionicons, MaterialIcons, AntDesign } from 'react-native-vector-icons';


const colors = {
	pastelGreen: 'hsl(109,40%,80%)',
	pastelBlue: 'hsl(210, 70%, 80%)',
	pastelPink : 'hsl(330, 70%, 75%)',
	color: 'hsl(146,48%,76%)',
	color1: 'hsl(30,97%,83%)',
	// color1: 'hsl(270,24%,75%)',
	// color1: 'hsl(135,80%,85%)',
	// pastelgray: '#cfcfc4',
	Pastel: 'hsl(50,60%,80%)'
};
const App = () => {
	
    return (
          <View style={styles.container}>
			<View style={styles.body}>
				<Text style={styles.title}>HealthCube</Text>
				<View style={styles.buts}>
					<Link href="/formdash" asChild>
						<TouchableOpacity style={styles.butbod}>
							< AntDesign name="form" size={90} color="white" />
							<Text style={styles.text}>Form</Text>
						</TouchableOpacity>
					</Link>
					<TouchableOpacity style={styles.butbod2}>
						<Ionicons name="person-outline" size={90} color="white" />
						<Text style={styles.text}>Profile</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buts}>
					<Link href="/leaderboard" asChild>
						<TouchableOpacity style={styles.butbod1}>
							<MaterialIcons name="leaderboard" size={100} color="white" />
							<Text style={styles.text}>Leaderboard</Text>
						</TouchableOpacity>
					</Link>
					<Link href="/store" asChild>
						<TouchableOpacity style={styles.butbod3}>
							<AntDesign name="shoppingcart" size={100} color="white" />
							<Text style={styles.text}>Store</Text>
						</TouchableOpacity>
					</Link>	
				</View>
			</View>			
		  </View>     
		    
    );
}


const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor:'white',
		justifyContent:'space-around',
		alignItems:'center',
	},
	body:{
		height:'100%',
		width:'100%',
		backgroundColor: 'white',
		justifyContent:'center',
		// borderColor:'black',
		// borderWidth:5,
	},
	title:{
		// margin: 10,
		backgroundColor: colors['color'],
		padding: 50,
		color:'white',
		textAlign:'center',
		fontSize: 50,
		fontWeight:'bold',
		// borderColor:'black',
		// borderWidth:5,
	},
	buts:{
		flexDirection:'row',
		flex : 1,
		justifyContent:'space-between',
		flexWrap: 'nowrap',
	},
	butbod:{
		flex:1,
		color:'rgba(255, 255, 255, 0.5)',
		backgroundColor: colors['pastelPink'],
		margin:10,
		borderRadius:10,
		alignItems:'center',		
		justifyContent:'center',
		marginLeft:20,
		marginTop:20,
		// borderColor:'black',
		// borderWidth:5,
	},
	butbod1:{
		flex:1,
		backgroundColor: colors['Pastel'],
		margin:10,
		borderRadius:10,
		alignItems:'center',		
		justifyContent:'center',
		marginLeft: 20,
		// borderColor:'black',
		// borderWidth:5,

	},
	butbod2:{
		flex:1,
		backgroundColor: colors['pastelBlue'],
		margin:10,
		borderRadius:10,
		alignItems:'center',		
		justifyContent:'center',
		marginRight:20,
		marginTop:20,
		// borderColor:'black',
		// borderWidth:5,

	},
	butbod3:{
		flex:1,
		backgroundColor:colors['color1'],
		margin:10,
		borderRadius:10,
		alignItems:'center',		
		justifyContent:'center',
		marginRight:20,
		// borderColor:'black',
		// borderWidth:5,
	},
	text:{
		color:'white',
		fontSize:22,
		fontWeight:'bold',
		textAlign:'center',
	}
});

export default App;
  