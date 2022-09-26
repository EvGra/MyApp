export const imagesPreview = [
  {
    id: '001',
    image: "require('../../src/images/preview/first.png')",
  },
  {
    id: '002',
    image: "require('../../src/images/preview/second.png')",
  },
  {
    id: '003',
    image: "require('../../src/images/preview/third.png')",
  },
];

export const COLORS = {
  grayDark: '#57636F',
  grayLight: '#7A8D9C',
  blueDark: '#126881',
  blueLight: '#7BCFE9',
  blueButton: '#1877F2',
  yellow: '#FBBA32',
  orange: '#FFA771',
  pink: '#E4126B',
  red: '#E41A4A',
};

interface Params {
  this: any;
}

class Button<Type> {
  id: Type;
  icon: Type;
  text: Type;
  constructor(id: Type, icon: Type, text: Type) {
    this.id = id;
    this.icon = icon;
    this.text = text;
  }
}

export const PROFILEBUTTONS = [
  new Button('b1', 'person-circle-outline', 'Account'),
  new Button('b2', 'location-outline', 'My Address'),
  new Button('b3', 'list-outline', 'My Order'),
  new Button('b4', 'heart-outline', 'My Favourites'),
  new Button('b5', 'wallet-outline', 'Payment'),
  new Button('b6', 'settings-outline', 'Settings'),
];
