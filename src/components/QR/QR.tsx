import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { QrCodeSvg } from 'react-native-qr-svg';

const QR = ({ value, size, margin = 20, bgColor, fgColor }: any) => {

    return (
        <View style={{ height: size, margin }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <QrCodeSvg
                    value={value}
                    frameSize={size}
                    contentCells={5}
                    content={
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>👋</Text>
                        </View>
                    }
                    dotColor={fgColor}
                    backgroundColor={bgColor}
                />
            </View>
        </View>

    );
};

export { QR };
