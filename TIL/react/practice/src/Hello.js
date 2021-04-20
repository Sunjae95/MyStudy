import React, {Component} from 'react';

//function컴포넌트를 class형 컴포넌트  
class Hello extends Component{
    //defaultProps 지정은 아래와 같이
    static defaultProps = {
        name: '이름없음',
    }
    
    render() {
        const {color, isSpecial, name} = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

// function Hello({color, name, isSpecial}){
//     return (
//         <div style={{color}}>
//             {isSpecial && <b>*</b>}
//             안녕하세요 {name}
//         </div>
//     )
// }

// Hello.defaultProps = {
//     name:'이름없음'
// }

export default Hello;