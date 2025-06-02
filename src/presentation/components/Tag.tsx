import { View, Text, ColorValue } from 'react-native';

interface Props {
  text: string;
  color: ColorValue;
}

export default function Tag({ text, color }: Props) {
    return (
        <View className={'rounded-full self-start'} style={{backgroundColor: color}}>
            <Text style= {{fontFamily: 'Roboto-SemiBold'}} className={'text-lg text-white my-1 mx-2'}>{text}</Text>
        </View> 
    )
}
