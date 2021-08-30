import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    FlatList,
    Text,
    View,
    Touchable,
    TouchableOpacity,
} from 'react-native';

const CASES = require('../../json/dados_covid.json')

import styles from './styles';

const Home = () => {

    const { navigate } = useNavigation();

    const navigateToClientDetail = (client) => {
        navigate('ClientDetail', { client })
    }

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={styles.header}>
                <Text style={styles.headerText}> Relatório Covid-19 </Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    style={{ maxHeight: '97%' }}
                    data={CASES}
                    keyExtractor={(caseId) => caseId.nome}
                    renderItem={({ item }) => {
                        let colorStatus = 'black'
                        if (item.statuscovid === 'negativo') {
                            colorStatus = 'green'
                        } else if (item.statuscovid === 'suspeito') {
                            colorStatus = 'orange'
                        } else if (item.statuscovid === 'positivo') {
                            colorStatus = 'red'
                        }
                        return (
                            <TouchableOpacity onPress={() => { navigateToClientDetail(item) }} style={styles.itemContainer}>
                                <View style={styles.itemInfoContainer}>
                                    <Text style={styles.textTitleItem}>{item.nome}</Text>
                                    <Text style={styles.textSubtitleItem}>Sexo: {item.sexo}</Text>
                                    <Text style={styles.textSubtitleItem}>Data de Nascimento: {item.data_nasc}</Text>
                                </View>
                                <View style={[styles.statusItem, { backgroundColor: colorStatus }]}></View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;