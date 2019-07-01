import { PureComponent } from 'react';

export default class TouchWheeler extends PureComponent {
  static defaultProps = {
    onWheelStart: () => {},
    onWheel: () => {},
    onWheelEnd: () => {}
  };

  startValue = 0;
  delta = 0;

  componentDidMount() {
    if (document && this.props.elementRef && this.props.elementRef.current) {
      this.props.elementRef.current.addEventListener('touchstart', this.start);

      this.props.elementRef.current.addEventListener('touchmove', this.move, {
        capture: false,
        passive: true
      });

      this.props.elementRef.current.addEventListener('touchend', this.end);
    }
  }

  componentWillUnmount() {
    if (document && this.props.elementRef.current) {
      this.props.elementRef.current.removeEventListener(
        'touchstart',
        this.start
      );
      this.props.elementRef.current.removeEventListener('touchmove', this.move);
      this.props.elementRef.current.removeEventListener('touchend', this.end);
    }
  }

  start = e => {
    this.startValue = e.touches[0].screenY;

    this.props.onWheelStart();
  };

  move = e => {
    this.delta = this.startValue - e.touches[0].screenY;

    this.props.onWheel({ delta: this.delta });
  };

  end = () => {
    this.props.onWheelEnd({ delta: this.delta });
  };

  render() {
    return null;
  }
}
