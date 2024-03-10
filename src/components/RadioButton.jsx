import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/constants';

const RadioButton = ({ option = '', selectedOption = false, setSelectedOption }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedOption()}>
            <View style={{ alignItems: 'center' }}>
                <View
                    style={{
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: selectedOption ? Colors.primary : Colors.gray,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {selectedOption && (
                        <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: Colors.primary }} />
                    )}
                </View>
                {option && (<Text style={{ lineHeight: 25, fontSize: 14 }}>{option}</Text>)}
            </View>
        </TouchableOpacity>
    );
}

export default RadioButton;
