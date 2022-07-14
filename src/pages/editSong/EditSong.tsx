import { parse } from "path";
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../../components/backButton/BackButton"

import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import { createTheme } from "@mui/material/styles";
import { SongModel } from "../../songModel";

export default function EditSong(props: any) {
    const navigate = useNavigate();

    let n=0 

    let keys = Object.keys({
        id: 0,
        title: "",
        artist: "",
        gener: "",
        length: 0,
        price: 0,

    })

    let id = useParams();
    const theme = createTheme();

    let songToEdit: SongModel = { id: 0, title: "", artist: "", gener: "", length: 0, price: 0, };

    for (let i = 0; i < props.songs.length; i++) {
        if (props.songs[i].id == Number(id.songId)) {
            songToEdit = { ...songToEdit,...props.songs[i] }
            console.log(songToEdit)
        }


    }

    const handleSubmit = () => {
        { props.editSong(songToEdit) }
        navigate("/songs")
    };
    
    return (
        // <>
        //     <h1>edit</h1>
        //     <form>
        //         {entries.map(([key, val]) => {
        //             return <><label>{key}</label>
        //                 <input type={val} defaultValue={""} name={key} onChange={(e) => { setNewSong({ ...newSong, [key]: e.target.value }) }}></input>

        //             </>
        //         })}
        //         <button onClick={() => { handleSubmit() }} type="submit">Edit</button>
        //     </form>


        //     return(
        // <>
        
        <>
            <h1 style={{ textAlign: 'center', fontSize: '60px', fontFamily: 'Cooper Black', color: 'purple' }}>Edit song</h1>
            <hr />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                        
                            {keys.map((key) => {
                                return <>
                                    <TextField key={n++} color="secondary" name={`${key}Name`} defaultValue={""} id="outlined-basic" label={key} variant="outlined" margin="dense" onChange={(e) => { songToEdit = { ...songToEdit, [key]: e.target.value } }} />
                                    <br />
                                </>
                            })}

                            {/* <Autocomplete disablePortal defaultValue={currSong.genre} id="combo-box-demo" options={genreList} sx={{ width: 222 }}
                                renderInput={(params) => <TextField color="secondary" {...params} label="Genre" onChange={e => currSong.genre = e.target.value} />} /> */}

                            <BottomNavigation sx={{ width: 240 }}>
                                <BottomNavigationAction onClick={() => handleSubmit()}  label="Edit" value="Edit" icon={<IconButton  style={{ color: 'purple' }} aria-label="edit" size="large"><EditIcon fontSize="inherit"></EditIcon></IconButton>} />
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
