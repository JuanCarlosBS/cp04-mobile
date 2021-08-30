import { Button, StyleSheet } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#5395bc',
        width: '100%',
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    backgroundContainer: {
        height: '100%',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 12,
        marginBottom: 12,
        width: '100%'
    },
    itemTitleContainer: {
        width: '100%',
        alignItems: 'center'
    },
    itemTitleText: {
        fontSize: 16,
        fontWeight: '700'
    },
    itemContent: {
        marginTop: 12
    },
    itemContentText: {
        marginBottom: 6
    },
    itemStatusContainer: {
        flexDirection: 'row'
    },
    goBackButton: {
        width: '100%',
        backgroundColor: '#5395bc',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
    }
});

export default styles;