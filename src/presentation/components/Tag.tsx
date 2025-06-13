import { View, Text, ColorValue, StyleSheet } from 'react-native';
import { theme } from '@/theme/theme';

interface Props {
  text: string;
  color: ColorValue;
}

export default function Tag({ text, color }: Props) {
    return (
        <View className={'rounded-full self-start'} style={{backgroundColor: color}}>
            <Text style= {styles.tag}>{text}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    tag: {
        fontFamily: 'Roboto-SemiBold',
        fontSize: theme.fontSizes.md,
        color: theme.colors.white,
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: theme.spacing.xs
    }
})
