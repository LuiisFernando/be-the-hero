import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    
    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents () {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        // add 2 vector in same vector
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text> 
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.incidentList}
                // showsVerticalScrollIndicator={false}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                onEndReached={loadIncidents} // method called when is 20% of end of the list
                onEndReachedThreshold={0.2} // 20% of the end of the list
                renderItem={({ item: incident }) => ( //rename item to incident
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR',
                                 { style: 'currency', currency: 'BRL' }).format(incident.value)}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Icon name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}