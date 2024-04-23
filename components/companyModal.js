import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';


const ModalComponent = ({ modalVisible, setModalVisible, companyId, offerId }) => {
  const [accountId, setAccountId] = useState();
  const [companyData, setCompanyData] = useState();
  const [accountData, setAccountData] = useState();
  const [offerData, setOfferData] = useState();
  

  // sitte job offer tarkemmin
  
  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(`https://joffer-backend-latest.onrender.com/Company/${companyId}`);
        setCompanyData(response.data);
        
        setAccountId(response.data.accountId);
      
        if (accountId) {
          try {
            const accountResponse = await axios.get(`https://joffer-backend-latest.onrender.com/Accounts/GetAll?accountId=${accountId}`);
           
            const matchedAccount = accountResponse.data.find(account => account.id === accountId);
          
            const accountName = matchedAccount ? matchedAccount.name : "Account not found";
            setAccountData(accountName);
          } catch (error) {
            console.error('Error fetching account data:', error);
          }
        }
      } catch (error) {
        console.error('Error fetching companyy data:', error);
      }
    };
  
    if (modalVisible && companyId) {
      fetchCompanyData();
      console.log('accountid', accountId);
    }
  }, [modalVisible, companyId]);

  useEffect(() => {
    if (companyData) {
      console.log(companyData);
      console.log('what',companyData.description);
    }
  }, [companyData]);
  
  useEffect(() => {
    if (accountId) {
      console.log(accountId);
    }
  }, [accountId]);

  useEffect(() => {
    if (accountData) {
      console.log('HUH',accountData);
    }
  }, [accountData]);
  useEffect(() => {
    const fetchJobOfferData = async () => {
      try {
        const response = await axios.get(`https://joffer-backend-latest.onrender.com/JobOffers/GetAll`);
        const allOffers = response.data;
        const matchedOffer = allOffers.find(offer => offer.id === offerId);
        
      
        setOfferData(matchedOffer);
      } catch (error) {
        console.error('Error fetching job offer data:', error);
      }
    };
  
    if (modalVisible && companyId && offerId) {
      fetchJobOfferData();
    }
  }, [modalVisible, companyId, offerId]);
  useEffect(() => {
    if (offerData) {
      console.log('offerData:', offerData);
      console.log(offerData.description);
    }
  }, [offerData]);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 118, 38, 1)', 'rgba(173, 65, 1, 1)']}
        style={styles.gradientBackground}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('../assets/joffer.png')}
              style={styles.image}
              resizeMode="contain"
            />
            
            <View style={styles.textContainer}>
              { accountData && <Text style={styles.company2Text}>{accountData.name}</Text>}
              
            </View>
            
            <View style={styles.textContainer}>
            
              {offerData && <Text style={styles.companyText}>{offerData.title}{"\n"}</Text> }   
              {offerData &&<Text style={styles.infoText}>{offerData.employmentStatus}{"\n"}                                                   
Salary Range:  {offerData.minSalary} - {offerData.maxSalary} e/month
{"\n"}{"\n"}Job Description:{"\n"}{"\n"} {offerData.description}

{"\n"}{"\n"}Responsibilities:{"\n"}{"\n"}

{"\n"}{"\n"}Requirements:{"\n"}{"\n"}

{"\n"}{"\n"}Why Join :{"\n"}{"\n"}

{"\n"}{"\n"} Links: ......</Text>}

<Text style={styles.companyText}>About the Company: </Text>
              {companyData && <Text style={styles.infoText}> {companyData.description} </Text>}
            </View>
          
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '95%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop:10,
  },
  textContainer: {
    marginBottom: 20,
  },
  companyText: {
    fontFamily: 'Fredoka2',
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    alignSelf:'center',
  },
  company1Text: {
    fontFamily: 'Fredoka2',
    fontSize: 26,
    color: 'white',
    alignSelf:'center',
    
  },
  company2Text: {
    fontFamily: 'Fredoka2',
    fontSize: 34,
    color: 'white',
  },
  infoText: {
    fontFamily: 'Fredoka',
    fontSize: 18,
    color: '#fff',
  },
  closeButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontFamily: 'Fredoka2',
    fontSize: 16,
    color: 'rgba(255, 118, 38, 1)',
  },
});

export default ModalComponent;
