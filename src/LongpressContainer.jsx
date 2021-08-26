import { Component, createElement } from "react";
import { Pressable } from "react-native";

import { HelloWorld } from "./components/HelloWorld";

export const LongpressContainer = ({ content, action }) => {
    const executeAction = () => {
        if (action && action.canExecute) {
            action.execute();
        }
    };
    return <Pressable onLongPress={executeAction}>{content}</Pressable>;
};
