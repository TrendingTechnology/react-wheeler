# React-Wheeler by Adrian

![logo](./assets/logo.png)

[![Version][version-badge]][github]
[![Repository size][repo-size-badge]][github]
[![Number of GitHub issues][gh-issues-badge]][github]
[![MIT License][license-badge]][license]

React component for listening to and acting on scroll/wheel/touchmove events.

## How to use

**Installation**

`yarn add react-wheeler`

**As a component**

```javascript
import Wheeler from 'react-wheeler';

const YourComponent = () => {
  const handleWheelStart = () => {};
  const handleWheel = ({ delta }) => {};
  const handleWheelEnd = ({ delta }) => {};

  return (
    <>
      <Wheeler
        onWheel={handleWheel}
        onWheelStart={handleWheelStart}
        onWheelEnd={handleWheelEnd}
      />
    </>
  );
};
```

## Properties

| Prop         | Type      | Default | Description                                                            |
| ------------ | --------- | ------- | ---------------------------------------------------------------------- |
| throttle     | _Number_  | 20      | How many milliseconds between each onWheel event                       |
| onWheelStart | _func_    |         | Fired when wheeling starts                                             |
| onWheel      | _func_    |         | Fired while wheeling                                                   |
| onWheelEnd   | _func_    |         | Fired when wheeling has stopped                                        |
| event        | _String_  | 'auto'  | Which event to listen to. Possible values _'auto', 'wheel', 'touch'_   |
| elementRef   | React ref |         | Element reference created with React.createRef(). Required for _touch_ |

## Development

`yarn install` to install dependencies

`yarn start` to start the file watcher to automatically build on file changes

## Contribute

I'm open for pull requests if you've got any enhancements! You're a star! ⭐

[github]: https://github.com/designbyadrian/react-wheeler
[license]: LICENSE
[version-badge]: https://img.shields.io/github/package-json/v/designbyadrian/react-wheeler/master.svg?style=flat-square&label=version&colorB=cornflowerblue&colorA=SlateGrey
[license-badge]: https://img.shields.io/github/license/designbyadrian/react-wheeler.svg?style=flat-square&colorA=SlateGray
[gh-issues-badge]: https://img.shields.io/github/issues/designbyadrian/react-wheeler/master.svg?style=flat-square&label=issues&colorA=SlateGray
[repo-size-badge]: https://img.shields.io/github/repo-size/designbyadrian/react-wheeler.svg?style=flat-square&colorA=SlateGray
