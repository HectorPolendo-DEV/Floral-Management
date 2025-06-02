import { Text, TextInput } from 'react-native';

export const applyDefaultFont = (fontName: string) => {
  const defaultTextRender = (Text as any).render;
  (Text as any).render = function (...args: any[]) {
    const origin = defaultTextRender.call(this, ...args);
    return {
      ...origin,
      props: {
        ...origin.props,
        style: [{ fontFamily: fontName }, origin.props?.style],
      },
    };
  };

  const defaultInputRender = (TextInput as any).render;
  (TextInput as any).render = function (...args: any[]) {
    const origin = defaultInputRender.call(this, ...args);
    return {
      ...origin,
      props: {
        ...origin.props,
        style: [{ fontFamily: fontName }, origin.props?.style],
      },
    };
  };
};
