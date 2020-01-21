import React, { useEffect } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';
import { getCurrentPosition, requestAuthorization } from 'react-native-get-location';


function Main() {
    const [currentRegion, setCurrentRegion] = useStat(null);



    useEffetc(()=> {
        async function loadInitialPosition(){
            const { granted } = await requestAuthorization();

            if( granted ) {
                const { coords } = await getCurrentPosition({
                    enableHighAcuracy: true,
                });

                const { latitude, longitude } = [coords];

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }

        loadInitial.Position();
    
    }, []);

    if(!currentRegion){
        return null;
    }

    return <MapView style={styles.map} />

}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
})

export default Main;