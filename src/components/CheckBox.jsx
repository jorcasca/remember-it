import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../constants/constants';

const Checkbox = ({ option, checked, onChangeCheck }) => {
    return (
        <TouchableOpacity onPress={onChangeCheck} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name={checked ? 'check-square-o' : 'square-o'} size={24} color={Colors.primary} />
            <Text style={{ marginLeft: 16, fontSize: 14, lineHeight: 25 }}>{option}</Text>
        </TouchableOpacity>
    );
}

export default Checkbox;