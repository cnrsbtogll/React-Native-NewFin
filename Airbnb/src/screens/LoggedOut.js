import React, {Component} from 'react';
import colors from '../styles/colors'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LogeddOut extends Component{
    onFacebookPress(){
        alert('facbook butona basıldı');
    }
    onCreateAccountPress(){
        alert('onCreateAccountPress buna basıldı');
    }
    onMoreOptionPress(){
        alert('onMoreOptionPress basıldı');
    }
  render() {
    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
            <Image 
            source={require('../img/airbnb-logo.png')}
            style={styles.logo}
            />
            <Text style={styles.welcomeText}> Airbnb'ye hoş geldiniz.</Text>       
            <RoundedButton text="Facebook ile Bağlan" 
            textColor={colors.green01} 
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
            handleOnPress={this.onFacebookPress}
            />
            <RoundedButton 
            text="Hesap Oluştur" 
            textColor={colors.white}             
            handleOnPress={this.onCreateAccountPress}
            /> 
            <TouchableOpacity 
                style={styles.moreOptionsButton}
                onPress={this.onMoreOptionPress}
            > 
            <Text style={styles.moreOptionsButtonText}>Daha Fazla Seçenek</Text>
            </TouchableOpacity>
            <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
            Bağlan düğmesine dokun, Hesap Oluştur veya daha fazla
            </Text>
            <Text style={styles.termsText}>
              {' seçenek gör.'}
            </Text>
            <Text style={styles.termsText}>
              {" Airbnb'nin "}
            </Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>
               {"Kullanım Şartları"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>
              ,
            </Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>
             {" Ödeme Hizmet Şartlarını"} 
              </Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>
              ,
            </Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>
              {" Gizlilik Politikasını"} 
              </Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>
              ,  
            </Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>
              {" Ayrımcılık Yasağını kabul ediyorum"}

              </Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>
              .
            </Text>
          </View>
            </View>           
        </ScrollView>
     );
  }
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:colors.green01,
    },
    welcomeWrapper:{
        flex:1,
        marginTop:30,
        padding:20
    },
    logo:{
        width:50,
        height:50,
        marginTop:30,
        marginBottom:40
    },
    welcomeText:{
        fontSize:30,
        color:colors.white,
        fontWeight:'300',
        marginBottom:40
    },
    facebookButtonIcon:{
        color:colors.green01,
        position:'relative',
        left:20,
        zIndex:8
    },
    moreOptionsButton:{
        marginTop:10,
    },
    moreOptionsButtonText:{
        color:colors.white,
        fontSize:16,
    },
    termsText:{
        fontSize:12,
        fontWeight:'600',
        color:colors.white,
    },
    termsAndConditions:{
        flexWrap:'wrap',
        alignItems:'flex-start',
        flexDirection:'row',
        marginTop:30
    },
    linkButton:{
        borderBottomWidth:1,
        borderBottomColor:colors.white,
    },
})

