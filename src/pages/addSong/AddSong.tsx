import React, { useRef, useLayoutEffect, useState } from "react"
import BackButton from "../../components/backButton/BackButton"
import { useLocation, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import { createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';


export default function AddSong(props: any) {

    let n=0;

    let keys = Object.keys({
        id: 0,
        title: "",
        artist: "",
        gener: "",
        length: 0,
        price: 0,

    })
    const [newSong, setNewSong] = useState({
        id: 0,
        title: "",
        artist: "",
        gener: "",
        length: 0,
        price: 0,
    })
    const navigate = useNavigate();

    const theme = createTheme();

    const handleSubmit = () => {

        { props.addSong(newSong) }
        navigate("/songs")
    }



    return (
        <>


            <h1 style={{ textAlign: 'center', fontSize: '60px', fontFamily: 'Cooper Black', color: 'purple' }}>Add song</h1>
            <hr />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {keys.map((key) => {
                                return <>
                                    <TextField key={n++} color="secondary" name={`${key}Name`} defaultValue={""} id="outlined-basic" label={key} variant="outlined" margin="dense" onChange={(e) => { setNewSong({ ...newSong, [key]: e.target.value }) }} />
                                    <br />
                                </>
                            })}

                            {/* <Autocomplete disablePortal defaultValue={currSong.genre} id="combo-box-demo" options={genreList} sx={{ width: 222 }}
                                renderInput={(params) => <TextField color="secondary" {...params} label="Genre" onChange={e => currSong.genre = e.target.value} />} /> */}

                            <BottomNavigation sx={{ width: 240 }}>
                                <BottomNavigationAction onClick={() => handleSubmit()} label="Edit" value="Edit" icon={<IconButton  style={{ color: 'purple' }} aria-label="edit" size="large"><AddIcon fontSize="inherit"></AddIcon></IconButton>} />
                            </BottomNavigation>
                            <BackButton />
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <hr />
        </>
    )
}