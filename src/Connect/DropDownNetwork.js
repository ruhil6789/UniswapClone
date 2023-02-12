import React from 'react'
import { SwitchNetwork } from './SwitchNetwork'

const DropDownNetwork = ({ label, onChange, options, value }) => {

    return (
        <>
            <label>
                {label}
                <select value={value} onChange={onChange} >
                    {options.map(state =>
                        <option onClick={() => SwitchNetwork(state.chainno)}>{state.label}</option>
                    )}
                </select>
            </label>
        </>
    )
}

export default DropDownNetwork