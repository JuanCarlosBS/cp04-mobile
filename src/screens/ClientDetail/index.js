import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    SafeAreaView,
    FlatList,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import styles from './styles';

const ClientDetail = () => {

    const { goBack } = useNavigation();
    const route = useRoute()

    const { client } = route.params

    const [colorStatus, setColorStatus] = useState()

    useEffect(() => {
        if (client.statuscovid === 'negativo') {
            setColorStatus('green')
        } else if (client.statuscovid === 'suspeito') {
            setColorStatus('orange')
        } else if (client.statuscovid === 'positivo') {
            setColorStatus('red')
        }
    }, [client])

    const navigateBack = useCallback(() => {
        goBack()
    })





    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigateBack()}><Ionicons name='arrow-back' size={22} color='white' /></TouchableOpacity>
                <Text style={styles.headerText}> Relatório Covid-19 </Text>
            </View>
            <View style={styles.backgroundContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.itemTitleContainer}>
                        <Text style={styles.itemTitleText}>{client.nome}</Text>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemContentText}>Data de Atendimento: {client.data_atendimento}</Text>
                        <Text style={styles.itemContentText}>Sintomas: {client.sintomas}</Text>
                        <Text style={styles.itemContentText}>Doenças pré-existentes: {client.doenca_preexitente}</Text>
                        <View style={styles.itemStatusContainer}>
                            <Text style={styles.itemContentText}>Status Covid: </Text>
                            <Text style={[styles.itemContentText, { color: colorStatus }]}>{client.statuscovid}</Text>
                        </View>

                    </View>
                </View>
                <TouchableOpacity style={styles.goBackButton} onPress={() => navigateBack()}><Text style={[styles.itemTitleText, { color: '#fff' }]}>Voltar</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ClientDetail;