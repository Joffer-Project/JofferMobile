import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function GalleryPicker() {
    const [selectedImg, setSelectedImg] = useState([]);

    const ImagePickerGallery = () => {
        const options ={
            title: 'Select Images',
            mediaType: 'photo',
            maxWidth: 500,
            maxHeight: 500,
            quality: 0.8,
            storageOptions: {
                skipBackup: true,
            }

        }
    }

    return (
        <View style={styles.imgcontainer}>
          <TouchableOpacity onPress={openImagePicker} style={styles.button}>
            <Text style={styles.buttonText}>Select Images</Text>
          </TouchableOpacity>
    
          {/* Display selected images */}
          <View style={styles.imageContainer}>
            {selectedImages.map((imageUri, index) => (
              <Image key={index} source={{ uri: imageUri }} style={styles.image} />
            ))}
          </View>
        </View>
      );
    }

const styles = StyleSheet.create({
    imgcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200
}, 
});