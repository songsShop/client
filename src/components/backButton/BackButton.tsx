import React from "react"
import { useNavigate } from "react-router-dom"

import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default () => {
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate("/songs")
    }
    return (
        <>
            <Fab size="medium" color="secondary" aria-label="arrow">
                <ArrowBackIcon onClick={() => handleBackButton()} />
            </Fab>
            {/* <button onClick={() => { handleBackButton() }}>👈</button> */}
        </>
    )
}