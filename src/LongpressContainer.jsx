import { Component, createElement } from "react";
import { Pressable } from "react-native";

// import { HelloWorld } from "./components/HelloWorld";

export const LongpressContainer = ({ content, action, onPress }) => {
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
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
            android_ripple={{ radius: 100 }}
            onLongPress={handleLongPress}
            onPress={handlePress}
        >
            {content}
        </Pressable>
    );
};
