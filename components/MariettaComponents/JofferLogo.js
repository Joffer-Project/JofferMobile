import * as React from 'react';
import { StyleSheet, View, Image} from 'react-native';

export default function JofferLogo() {
      return (
            <View style={styles.container}>
                <View style={styles.blueContainer}>
                    <View style={styles.logoImage}>
                        <Image source={require('./assets/Joffer-Logobig.png')}/>
                    </View >
                </View>
            </View>
        )
    }
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        blueContainer: {
            backgroundColor: '#0C6BE8',
            width: 400,
            height: 200,
            alignItems: 'center',
            
          },
          logoImage: {
            top: 15
          }
        })