import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

type CardProps = ViewProps & {
  className?: string;
};

type CardHeaderProps = ViewProps & {
  className?: string;
};
type CardContentProps = ViewProps & {
  className?: string;
};

export const Card = ({ className, children, ...props }: CardProps) => (
  <View className={className} {...props} style={[style.card , props.style]}>
    {children}
  </View>
);

export const CardHeader = ({
  className,
  children,
  ...props
}: CardHeaderProps) => (
  <View className={className} {...props} style={[style.cardHeader , props.style]}>
    {children}
  </View>
);

export const CardContent = ({
  className,
  children,
  ...props
}: CardContentProps) => (
  <View className={className} {...props} style={[style.cardContent , props.style ]}>
    {children}
  </View>
);


const style = StyleSheet.create({
  card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  cardHeader: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  cardContent:{
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
   
  }

});
