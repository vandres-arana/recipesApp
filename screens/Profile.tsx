import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles'
import { AntDesign } from '@expo/vector-icons';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Profile</Text>
                <LinearGradient colors={[COLORS.Color1, COLORS.Color2, COLORS.Color3]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.imageGradient}>
                    <Image source={{ uri: 'http://test4.servernet.rs/assets/pages/media/profile/profile_user.jpg' }}
                        style={styles.image} />
                </LinearGradient>
                <Text style={styles.name}>Juan González Garay</Text>
            </View>
            <View style={styles.mediumContainer}>
                <View style={styles.followersContainer}>
                    <Text style={styles.subtitle}>Followers</Text>
                    <Text style={styles.quantity}>545</Text>
                </View>
                <View style={styles.followersContainer}>
                    <Text style={styles.subtitle}>Following</Text>
                    <Text style={styles.quantity}>326</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.socialContainer}>
                    <AntDesign name="facebook-square" size={24} color="#4267B2" />
                    <Text style={styles.socialLabel}>Juan González Garay</Text>
                </View>
                <View style={styles.socialContainer}>
                    <AntDesign name="instagram" size={24} color="#FBAD50" />
                    <Text style={styles.socialLabel}>juan.gonzalez</Text>
                </View>
                <View style={styles.socialContainer}>
                    <AntDesign name="twitter" size={24} color="#1DA1F2" />
                    <Text style={styles.socialLabel}>Juan González</Text>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: COLORS.Color4,
    },
    topContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: Dimensions.get("window").height * 0.40,
    },
    mediumContainer: {
        backgroundColor: COLORS.Color3,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderRadius: 10,
    },
    bottomContainer: {

    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    title: {
        fontWeight: '800',
        fontSize: 19,
        color: COLORS.Color1,
    },
    followersContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 16,
        color: COLORS.Color2,
    },
    quantity: {
        fontWeight: '600',
        fontSize: 16,
        color: COLORS.Black,
        marginTop: 5,
    },
    name: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.Color2,
    },
    imageGradient: {
        height: 220,
        width: 220,
        borderRadius: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    socialLabel: {
        fontWeight: '600',
        fontSize: 16,
        color: COLORS.Color3,
        marginHorizontal: 10,
    }
})
