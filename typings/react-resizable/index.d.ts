declare module 'react-resizable' {
  import * as React from 'react';

  type Axis = 'both' | 'x' | 'y' | 'none';
  type ResizeCallbackData = {
    node: HTMLElement,
    size: {width: number, height: number}
  };

  interface IResizableProps {
    children?: React.ReactElement<any>;
    className?: string;
    width: number;
    height: number;
    handleSize?: [number, number];
    lockAspectRatio?: boolean;
    axis?: Axis;
    minConstraints?: [number, number];
    maxConstraints?: [number, number];
    onResizeStop?: (e: React.SyntheticEvent<any>, data: ResizeCallbackData) => any,
    onResizeStart?: (e: React.SyntheticEvent<any>, data: ResizeCallbackData) => any,
    onResize?: (e: React.SyntheticEvent<any>, data: ResizeCallbackData) => any,
    draggableOpts?: any;
  }

  export class Resizable extends React.Component<IResizableProps, any> {
    constructor(props: IResizableProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IResizableProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
  }

  export class ResizableBox extends React.Component<IResizableProps, any> {
    constructor(props: IResizableProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IResizableProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
  }
}
