/*
 * @Author: Charph Dang
 * @Description:
 * @Date: 2021-05-13 17:36:40
 * @LastEditors: Charph Dang
 * @LastEditTime: 2021-05-13 17:36:42
 */
import React from 'react';

const Input = props => {
    return <input {...props} />;
};

// const CustomizeInput = ({value = "", ...props}) => (
//   <div style={{padding: 10}}>
//     <Input style={{outline: "none"}} value={value} {...props} />
//   </div>
// );

class CustomizeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { value = '', ...otherProps } = this.props;
        return (
            <div style={{ padding: 10 }}>
                <Input style={{ outline: 'none' }} value={value} {...otherProps} />
            </div>
        );
    }
}

export default CustomizeInput;
