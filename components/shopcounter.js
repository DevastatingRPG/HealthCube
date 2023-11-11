import React,{ Component } from "react";
import { TouchableOpacity,View,Text,StyleSheet,Image } from "react-native";


class ButtonS extends Component {
    constructor(props){
        super(props);
    }
    
    
    render(){
        return(
            <TouchableOpacity styles={[styles.button]} onPress = {this.props.onPress}>
                <View >
                    <Text style = {[styles.butext, {color : this.props.textcolor, fontWeight: 'bold'}]}>{this.props.name}</Text>
                    <Image 
                        source = {this.props.filled ? this.props.image2 : this.props.image1}  
                        style={{ width: this.props.size, height: this.props.size, alignItems:'center'}}                 
                    />
                    <View style={styles.costbutton}>
                        <Text style ={{color:'black',fontSize: 20,textAlign:'center',fontWeight:'bold'}}>BUY!!</Text>
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
        marginBottom:40,
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
        backgroundColor:'yellow',
        height: 40,
        width: 100,
        borderRadius: 500,
        paddingTop:10,
        marginLeft:100,
    },
});



export default ButtonS;

// props = name,size,image1,image2,cost,filled(bool)