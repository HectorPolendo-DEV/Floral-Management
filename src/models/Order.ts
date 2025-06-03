import { ImageSourcePropType } from 'react-native';

export interface Order {
    id: string;
    customer: string;
    status: string;
    type: string;
    date: Date;
    image: ImageSourcePropType;
}