import { Component, createElement } from "react";
import { Pressable } from "react-native";

import { flattenStyles } from "./utils/common";
const defaultStyle = {
    container: {}
};

export const LongpressContainer = ({ content, action, onPress, style }) => {
    const styles = flattenStyles(defaultStyle, style);
    const stylesGetter = ({ pressed }) => ({
        ...styles.container,
        opacity: pressed ? 0.5 : 1
    });
    const executeAction = act => {
        if (act && act.canExecute) {
            act.execute();
        }
    };
    const handleLongPress = () => {
        executeAction(action);
    };
    const handlePress = () => {
        executeAction(onPress);
    };
    return (
        <Pressable
            style={stylesGetter}
            android_ripple={{ radius: 100 }}
            onLongPress={handleLongPress}
            onPress={handlePress}
        >
            {content}
        </Pressable>
    );
};
