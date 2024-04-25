import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';


const ModalComponent = ({ modalVisible, setModalVisible, companyId, offerId }) => {
  const [accountId, setAccountId] = useState();
  const [companyData, setCompanyData] = useState();
  const [accountData, setAccountData] = useState();
  const [offerData, setOfferData] = useState();
  const token= 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikl2eHBMemJuLV85R3pKdWxhcXFfcSJ9.eyJodHRwOi8vd3d3LmpvZmZlci5jb20vcm9sZXMiOltdLCJpc3MiOiJodHRwczovL2Rldi0zbGVieHVsd2prcGtzZWhuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NjI3NmE3Y2E0OWYzODZlNzNmOWQ2YjgiLCJhdWQiOiJodHRwczovL2pvZmZlci5jb20vYXBpIiwiaWF0IjoxNzEzOTUxMjMzLCJleHAiOjE3MTM5NTg0MzMsInNjb3BlIjoiIiwiYXpwIjoiUzZ2MDRoRElsMlZaNlZFbEthdVl2UHFPVE5BR1FQN0EiLCJwZXJtaXNzaW9ucyI6W119.irB19ZuqGsnx9EfiliphQ7NBnN_8AyZ9tIifPMC_SO20jW4RCCzvchvAuveRKMywDANGtMEqGZM394luJqMghGhqm3K962mLT9G5SQI3mtwi7CvE2-BEYzATHDjobYonjWwKUP9wtDnFVOSoSs3C6SCwqw3hDsVdv3svTeZXBebBOgyKNL4ct5YkpXnGGD50ApgdCsMGHO8SlRNiJ8JurEczglkMWvO_gomZiHUNLdAKMfhL5IIo6MVR377ObeXklT3fdw9aWiunLLNqd8AN-yhyEV6rmcFaH4DL6bmzQhKLm06YuU66ChIHAHR9ni9CgKjV6gfkGIrHWWdaEg5Cjg';
  const companyToken ='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikl2eHBMemJuLV85R3pKdWxhcXFfcSJ9.eyJodHRwOi8vd3d3LmpvZmZlci5jb20vcm9sZXMiOltdLCJpc3MiOiJodHRwczovL2Rldi0zbGVieHVsd2prcGtzZWhuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NjI4YjA5MjY5NmI1YWZmNGY1OTQ4MWUiLCJhdWQiOiJodHRwczovL2pvZmZlci5jb20vYXBpIiwiaWF0IjoxNzEzOTUxNTkxLCJleHAiOjE3MTM5NTg3OTEsInNjb3BlIjoiIiwiYXpwIjoiUzZ2MDRoRElsMlZaNlZFbEthdVl2UHFPVE5BR1FQN0EiLCJwZXJtaXNzaW9ucyI6W119.Jqv1Wlwdr6gNWvR8xnXdZ7zxOCiizX72P4rV7sUBVGQWTxLyTEyS8mO7KXAjoe6mtF62Omx1pd54ocK4ZYElatQ6BYnx784MPErMV-wmLaHMbfnePa4VgFuvHZ82z_z8gof5NmAe9wf6KoZcnXf4T_chzU_PQbP5EztHno9VPxft2K18IMB76RnVmLHUNo1W7oJI9kMpPBsyhbks6ipePNVRLsF92M2Gr-FlzEsjl9Zix96sQxaiElMFBHOCvlHoFj9WSHUtkn-LQXuvUGRsdkEcE9j6WOi31ppgbuIHM-Whm3_KqBr4N5PpIArpHptjxPe7_r55mTjshQ8Jx2tgFA';
  // sitte job offer tarkemmin
  //const companyToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikl2eHBMemJuLV85R3pKdWxhcXFfcSJ9.eyJodHRwOi8vd3d3LmpvZmZlci5jb20vcm9sZXMiOltdLCJpc3MiOiJodHRwczovL2Rldi0zbGVieHVsd2prcGtzZWhuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NjI4YjA5MjY5NmI1YWZmNGY1OTQ4MWUiLCJhdWQiOiJodHRwczovL2pvZmZlci5jb20vYXBpIiwiaWF0IjoxNzEzOTUxNTkxLCJleHAiOjE3MTM5NTg3OTEsInNjb3BlIjoiIiwiYXpwIjoiUzZ2MDRoRElsMlZaNlZFbEthdVl2UHFPVE5BR1FQN0EiLCJwZXJtaXNzaW9ucyI6W119.Jqv1Wlwdr6gNWvR8xnXdZ7zxOCiizX72P4rV7sUBVGQWTxLyTEyS8mO7KXAjoe6mtF62Omx1pd54ocK4ZYElatQ6BYnx784MPErMV-wmLaHMbfnePa4VgFuvHZ82z_z8gof5NmAe9wf6KoZcnXf4T_chzU_PQbP5EztHno9VPxft2K18IMB76RnVmLHUNo1W7oJI9kMpPBsyhbks6ipePNVRLsF92M2Gr-FlzEsjl9Zix96sQxaiElMFBHOCvlHoFj9WSHUtkn-LQXuvUGRsdkEcE9j6WOi31ppgbuIHM-Whm3_KqBr4N5PpIArpHptjxPe7_r55mTjshQ8Jx2tgFA'; 

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${companyToken}`
          }
        };
  
        const response = await axios.get(`https://joffer-backend-latest.onrender.com/Company`, config);
        setCompanyData(response.data);
        console.log('?',response.data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };
  
    if (modalVisible && companyId) {
      fetchCompanyData();
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
