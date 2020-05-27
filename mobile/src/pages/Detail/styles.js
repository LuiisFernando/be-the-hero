import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 24
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },
    contactbox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131A',
        lineHeight: 30
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});