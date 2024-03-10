import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from "../constants/constants";
import { Divider } from "@react-native-material/core";

const EventCard = ({ title, date, hour, description, isShared, onDelete, onEdit }) => {
    return (
        <View>
            <View style={styles.titleHeader}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>{title}</Text>
                    <View style={{ width: 12 }} />
                    <FontAwesome size={28} name="user" color={Colors.black} />
                    <View style={{ width: 8 }} />
                    {isShared && (<FontAwesome size={28} name="user" color={Colors.black} />)}
                </View>
                <View style={styles.header}>
                    {onEdit && (
                        <TouchableOpacity onPress={() => onEdit()}>
                            <FontAwesome size={28} name="pencil" color={Colors.secondary} />
                        </TouchableOpacity>
                    )}
                    <View style={{ width: 29 }} />
                    {onDelete && (
                        <TouchableOpacity onPress={() => onDelete()}>
                            <FontAwesome size={28} name="trash" color={Colors.secondary} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View style={styles.subtitleHeader}>
                <Text style={styles.subtitleText}>{date}</Text>
                <View style={{ width: 8 }} />
                <Text style={styles.subtitleText}>{hour}</Text>
            </View>
            <Text style={styles.descriptionText}>{description}</Text>
            <Divider style={{ marginVertical: 16 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 24,
        lineHeight: 25
    },
    titleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitleHeader: {
        flexDirection: 'row'
    },
    subtitleText: {
        fontSize: 14,
        lineHeight: 25,
        color: Colors.gray
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 25,
        color: Colors.black2
    }
});

export default EventCard;
