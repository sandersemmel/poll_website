import React, { useState } from "react";
import { IOptionInput } from "../state/State";

function OptionInput(props: {optionInput: IOptionInput, onChangeHandler: any }){

    return (
        <>        
        <input onChange={props.onChangeHandler}  className={props.optionInput.className} type={props.optionInput.className} name={props.optionInput.name} placeholder={props.optionInput.placeholder}></input>
        </>
    );

}

export default OptionInput;