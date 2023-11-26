import React,{ Component } from "react";
import { TouchableOpacity,View,Text,StyleSheet,Image } from "react-native";


class ButtonS extends Component {
    constructor(props){
        super(props);
    }
    
    
    render(){
        return(
            <TouchableOpacity styles={[styles.button]} 
            onPress={() => this.props.onPress(this.props)}>
                <View >
                    <Text style = {[styles.butext, {color : this.props.textcolor, fontWeight: 'bold'}]}>{this.props.name}</Text>
                    <Image 
                        source = {this.props.filled ? this.props.image2 : this.props.image1}  
                        style={{ width: this.props.size, height: this.props.size, alignItems:'center'}}                 
                    />
                    <View style={styles.costbutton}>
                        <Image source={require("../assets/currency1.png")} style={{ height: 25, width: 25, marginLeft:12}} />
                        <Text style ={{color:'black',fontSize: 20,textAlign:'center',fontWeight:'bold',marginLeft:10}}>{this.props.cost}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            );
    }
}
const styles = StyleSheet.create({
    button:{
        padding: 10,
        borderRadius: 10,
        // marginBottom:40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
    },
    butext:{
        fontSize: 42,
        textAlign: 'center',
        // color: 'purple'
    },
    costbutton:{
        backgroundColor:'#BEFFF7',
        height: 40,
        width: 100,
        borderRadius: 500,
        flexDirection:'row',
        paddingTop:5,
        marginLeft:100,
        marginBottom: 80,
    },
});



export default ButtonS;

// props = name,size,image1,image2,cost,filled(bool)