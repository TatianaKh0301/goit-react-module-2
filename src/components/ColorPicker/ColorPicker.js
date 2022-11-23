import React, { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
    };

    setActiveIdx = index => {
        this.setState({activeOptionIdx: index});
    }

    makeOptionClassName = (index) => {
        const optionClasses = ['ColorPicker__option'];
        if (index === this.state.activeOptionIdx) {
            optionClasses.push('ColorPicker__option--active');
        }
        return optionClasses.join(' ');
    }

    render(){
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        
        const {label} = this.props.options[activeOptionIdx];

        return(
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p className="ColorPicker__text">Выбран цвет: <span className="ColorPicker__label">{label}</span></p>
                <div className="ColorPicker__wrap">
                    {options.map(({ label, color}, index) => {
                        const optionClassName = this.makeOptionClassName(index);
                        return (
                            <button 
                                key={label}
                                className={optionClassName}
                                style={{ backgroundColor: color}}
                                onClick={() => this.setActiveIdx(index)}
                            ></button>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ColorPicker;

//example 
// <button 
                        //     key={label}
                        //     className="ColorPicker__option"
                        //     style={{ backgroundColor: color, border: 
                        //         index===this.state.activeOptionIdx ? '5px solid black'
                        //         : 'none',}}
                        // ></button>