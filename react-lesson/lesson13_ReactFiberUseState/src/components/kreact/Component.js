export default function Component(props) {
    this.props = props;
}

// * 通过prototype上的此属性，来判断是否为类组件。
Component.prototype.isReactComponent = {};
