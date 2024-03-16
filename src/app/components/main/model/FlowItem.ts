export class FlowItem {
  id: number;
  top: number;
  topSpeed: number;
  left: number;
  leftSpeed: number;
  isVisible: boolean;
  size: number;
  rotate: number;
  rotateSpeed: number;

  style: object;

  buildStyle = (): void => {
    this.style = {
      top: `${this.top}px`,
      left: `${this.left}px`,
      // height: `${this.size}px`,
      opacity: this.isVisible ? '0.5' : '0',
      transform: 'rotate(' + this.rotate + 'deg)'
    };
  };
}
