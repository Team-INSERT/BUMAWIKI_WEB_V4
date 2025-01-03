import type { Config } from 'tailwindcss';
import { KeyValuePair } from 'tailwindcss/types/config';
import { ResolvableTo } from 'tailwindcss/types/config';

const createTypography = (type: string) => {
  const baseStyles = {
    lineHeight: '145%',
    letterSpacing: '0',
  };

  const sizes: Record<string, Array<number>> = {
    display: [57, 45, 36],
    headline: [28, 26, 24],
    title: [22, 20, 18],
    body: [17, 15, 13],
    ['body-light']: [17, 15, 13],
    label: [17, 15, 13],
    ['label-light']: [17, 15, 13],
    tag: [13, 12, 11],
    caption: [11, 6, 4],
  };

  const weights: Record<string, string> = {
    display: '600',
    headline: '600',
    title: '600',
    body: '600',
    ['body-light']: '400',
    label: '700',
    ['label-light']: '500',
    tag: '600',
    caption: '400',
  };

  return Object.fromEntries(
    sizes[type].map((size, index) => {
      const sizeName = ['large', 'medium', 'small'][index];
      return [`${type}-${sizeName}`, [`${size}px`, { ...baseStyles, fontWeight: weights[type] }]];
    }),
  );
};

const typography = {
  ...createTypography('display'),
  ...createTypography('headline'),
  ...createTypography('title'),
  ...createTypography('body'),
  ...createTypography('body-light'),
  ...createTypography('label'),
  ...createTypography('label-light'),
  ...createTypography('tag'),
  ...createTypography('caption'),
} as ResolvableTo<
  KeyValuePair<
    string,
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>,
      ]
  >
>;

const colors = {
  primary: {
    50: '#274168',
  },
  mono: {
    10: '#FFFFFF',
    20: '#545454',
    30: '#929292',
    40: '#CCCCCC',
    50: '#ECECEC50',
    60: '#F0F0F0',
    70: '#F5F5F5',
    80: '#F2F3F7',
    90: '#F6F8FA',
    99: '#000000',
  },
  blue: {
    50: '#0038FF',
    70: '#7F94B4',
    99: '#F6FAFD',
  },
  red: {
    10: '#FFD7D5',
    50: '#FF0000',
  },
  orange: {
    50: '#EC9F19',
  },
  transparent: 'transparent',
};

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: typography,
      colors,
    },
  },
  plugins: [],
} satisfies Config;
