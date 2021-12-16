import React,{Components} from "react";
import {StyleSheet, View, Text, TextInput , ScrollView  } from "react-native"
import {Picker} from "@react-native-picker/picker"
import ValidationComponent from "react-native-form-validator"
import ORDivider from "./OrDivider";
import BasicButton from './BasicButton'
import LoginSignUpBtn from './LoginSingUpBtn';
import { Audio } from 'expo-av';
import SnackBar from "./SnackBar";

export default class SingUp extends ValidationComponent{
    
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            ageGroup:"",
            password:"",
            confrimPassword:"",
            snackBarvisible:"false",
            snackBarType:"",
            snackBarText:"",
        }
    }

    playaudio = async () =>{
      try{
        const soundObject = new Audio.Sound();
        
        await soundObject.playAsync();
      }
      catch (error){

      }

    }
    
    handleRegisterBtnClick = () => {
        this.validate({
            name:{minlength:3,maxlength:20,required:true},
            email:{email:true,required:true},
            ageGroup:{required:true} ,
            password:{required:true},
            confrimPassword:{equalPassword:this.state.password,required:true}
        });

        if(this.getErrorMessages()){
          this.displaySnackBar ("error"(this.getErrorMessages) );
        }
        else{
          this.hideSnackBar();
          this.playaudio();
          this.displaySnackBar("susscess", "login Clicked!")

        }


    }

    displaySnackBar = (type,text) => {
      this.setState({
        "snackBarType":Type,
        "snackBarText":Text,

      });
      this.setState({
        "snackBarVisible":true,
      });
    }

    hideSnackBar = () =>{
      this.setState({
        "snackBarVisible":false,
      });
    }
    
    handleSingInBtnClick(){
        console.log('sing in clicked')


    }


    
    
    
    render(){
        return(
          <>
            <ScrollView>
                <Text>Sing Up</Text>

                <View>
                    <Text style={styles.label} >Name</Text>
                    <TextInput
                    style={styles.inputfield}
                    value={this.state.name}
                    placeholder="Enter your name"
                    onChangeText={(name ) => this.setState({name})}
                    ></TextInput>

                    <View style={styles.divider} ></View>

                    <Text style={styles.label} >Email</Text>
                    <TextInput
                    style={styles.inputfield}
                    value={this.state.email}
                    keyboardType="email-address"
                    placeholder="Email Address"
                    onChangeText={(email) => this.setState({email})}
                    ></TextInput>

                    <View style={styles.divider} ></View>

                    <Text style={styles.label} >Mobil Number</Text>
                    <TextInput
                    style={styles.inputfield}
                    value={this.state.number}
                    keyboardType="number"
                    placeholder="Phone number"
                    onChangeText={(number) => this.setState({number})}
                    ></TextInput>

                    <View style={styles.divider} ></View>

                    <Text style={styles.label} >Gender</Text>
                    <Picker 
                    style={styles.inputfield}
                    selectedValue={this.state.ageGroup}
                    onValueChange={(ageGroup, itemIndex) => this.setState({ ageGroup })}>
                    <Picker.Item  label="" value="" ></Picker.Item>
                    <Picker.Item  label="Male" value="Male" ></Picker.Item>
                    <Picker.Item  label="Female" value="Female" ></Picker.Item>
                    
                    
                    </Picker>
                    

                    <View style={styles.divider} ></View>

                    <Text style={styles.label} >Password</Text>
                    <TextInput
                    style={styles.inputfield}
                    value={this.state.password}
                    secureTextEntry
                    placeholder="Enter Password"
                    onChangeText={(password) => this.setState({password})}
                    ></TextInput>

                    <View style={styles.divider} ></View>

                    <Text style={styles.label} >Confirm Password</Text>
                    <TextInput
                    style={styles.inputfield}
                    value={this.state.name}
                    placeholder="Confirm Password"
                    onChangeText={(password) => this.setState({password})}
                    ></TextInput>

                    <BasicButton text={"register"} onPress={this.handleRegisterBtnClick} />

                    <ORDivider/>

                    <LoginSignUpBtn 
                    customStyle ={styles.signin}
                    text="Alerady have an account"
                    btntext="Sign IN"
                    onPress={this.handleSingInBtnClick}
                    />


                </View>

            </ScrollView>
            {
              this.setState.snackBarVisible ?
              <SnackBar 
              isVisible={this.state.snackBarvisible}
              text={this.state.snackBarText}
              type={this.state.snackBarType}
              onClose={this.hideSnackBar}
              />
              : null
            }</>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 60,
      paddingHorizontal: 30,
    },
  
    title: {
      fontWeight: '500',
      fontSize: 20,
      letterSpacing: 0.1,
      color: '#2E2E2E',
    },
  
    form: {
      marginVertical: 35,
    },
  
    label: {
      fontSize: 16,
      lineHeight: 18,
      color: '#666666',
      marginBottom: 3,
    },
  
    inputField: {
      fontSize: 14,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#BFBFBF',
      paddingVertical: 6,
    },
  
    divider: {
      paddingVertical: 8,
    },
  
    log: {
      textAlign: 'center',
      marginVertical: 2,
      color: 'red',
    },
  
    signin: {
      marginVertical: 40,
    },
  });