import { PureComponent } from 'react';

let wheelEvent;

if (typeof document !== 'undefined' && 'onwheel' in document)
  wheelEvent = 'wheel';
else if (typeof document !== 'undefined' && 'onmousewheel' in document)
  wheelEvent = 'mousewheel';
else wheelEvent = 'MozMousePixelScroll';

export default class Wheeler extends PureComponent {
  scrolling = false;

  scrollCounter = 0;

  scrollCheck = 0;

  delta = 0;

  wheelCheck = null;

  static defaultProps = {
    onWheelStart: () => {},
    onWheel: () => {},
    onWheelEnd: () => {},
    throttle: 20
  };

  componentDidMount() {
    if (document)
      document.addEventListener(wheelEvent, this.wheel, {
        capture: false,
        passive: true
      });
  }

  componentWillUnmount() {
    if (document) document.removeEventListener(wheelEvent, this.wheel);
  }

  wheel = e => {
    this.scrollCounter++;
    const delta = e.deltaY || e.detail || e.wheelData,
      value = delta * -1;

    if (!this.scrolling) {
      this.wheelStart();
    }

    if (!Number.isNaN(value)) {
      this.delta += delta * -1;
    }

    return false;
  };

  wheelStart = () => {
    this.scrolling = true;
    this.props.onWheelStart();
    this.wheelAction();
  };

  wheelEnd = () => {
    this.props.onWheelEnd({ delta: this.delta });
    this.scrolling = false;
    this.scrollCounter = 0;
    this.scrollCheck = 0;
    this.delta = 0;
  };

  wheelAction = () => {
    this.scrollCheck = this.scrollCounter;

    this.props.onWheel({ delta: this.delta });

    setTimeout(() => {
      if (this.scrollCheck === this.scrollCounter) {
        this.wheelEnd();
      } else {
        window.requestAnimationFrame(this.wheelAction);
      }
    }, this.props.throttle);
  };

  render() {
    return null;
  }
}
