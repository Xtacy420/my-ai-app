// components/LayoutDebugWrapper.tsx
import React from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    ViewProps,
} from 'react-native';
import { DebugTarget, useLayoutDebugging } from '../context/LayoutDebuggingContext';

interface LayoutDebugWrapperProps extends ViewProps {
  debugId: DebugTarget;
}

export default function LayoutDebugWrapper({
  debugId,
  style,
  children,
  ...props
}: LayoutDebugWrapperProps) {
  const {
    debugging,
    selectedDebugTarget,
    setSelectedDebugTarget,
  } = useLayoutDebugging();

  const isActive = debugging && selectedDebugTarget === debugId;

  const onPress = () => {
    if (debugging) {
      setSelectedDebugTarget(debugId);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        {...props}
        style={[
          style,
          debugging && isActive && styles.debugOutline,
          debugging && !isActive && styles.debugDim,
        ]}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  debugOutline: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },
  debugDim: {
    opacity: 0.5,
  },
});
