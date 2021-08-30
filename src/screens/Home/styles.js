import { StyleSheet } from 'react-native';
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
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    listContainer: {
        width: '100%',
        padding: 16
    },
    itemContainer: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 12,
        marginBottom: 12,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemInfoContainer: {

    },
    textTitleItem: {
        fontWeight: '700'
    },
    textSubtitleItem: {

    },
    statusItem: {
        width: 8,
        height: 8,
        borderRadius: 8
    },
});

export default styles;