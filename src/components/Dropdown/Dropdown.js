import React, {Component} from "react";
import './Dropdown.css';

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toogle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    // show = () => {
    //     this.setState({ visible: true });
    // };

    // hide = () => {
    //     this.setState({ visible: false });
    // };

    render() {
        const { visible } = this.state;
        return (
            <div className="Dropdown">
                <button 
                    type="button" 
                    className="Dropdown__toggle" 
                    onClick={this.toogle}>
                        {visible ? 'Скрыть' : 'Показать'}
                </button>

                {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
                    Скрыть
                </button> */}

                {this.state.visible && (
                    <div className="Dropdown__menu"><p>Выпадающее меню</p></div>
                )}                
            </div>
        );
    }
}

export default Dropdown;