import { Routes, Route, useNavigate } from "react-router-dom";
import AddSong from "../../pages/addSong/AddSong";
import EditSong from "../../pages/editSong/EditSong";
import SongLandingPage from "../../pages/songsLandingPage/SongsLandingPage";
import React, { useEffect, useState } from "react";
import { SongModel } from "../../songModel";
import axios from "axios";
export default function Routs() {

    // const navigate = useNavigate();
    // onload = () => { navigate("/songs") }
    const api = "http://localhost:8080/songs"

    const [songs, setSongs] = useState<SongModel[]>([]);

    useEffect(() => {
        axios.get(`${api}/getAll`).then((res) => setSongs(res.data)).catch((error) => { console.log(error) })
    }, [])


    const addSong = async (newSong: SongModel) => {
        // await axios.post(`${api}/add`, newSong).then(() => setSongs([...songs, newSong])).catch((error) => { console.log(error) })
        await axios.post(`${api}/add`, newSong).then(() => axios.get(`${api}/getAll`).then((res) => setSongs(res.data)).catch((error) => { console.log(error) })
        ).catch((error) => { console.log(error) })

    }

    const editSong = async (newSong: SongModel) => {
        console.log(newSong)
        await axios.put(`${api}/update/${newSong.id}`, newSong).then(() => {
            // axios.get(`${api}/getById/${newSong.id}`).then((res) => setSongs([[...songs,songs[i] = newSong]]res.data)).catch((error) => { console.log(error) })

            for (let i = 0; i < songs.length; i++) {
                if (songs[i].id == newSong.id) {
                    const copySong = [...songs];
                    copySong[i] = newSong
                    setSongs(copySong);

                }
            }
        }
        ).catch((error) => { console.log(error) })
        // await axios.put(`${api}/update/${newSong.id}`, newSong).then(() => {
        //     axios.get(`${api}/getAll`).then((res) => setSongs(res.data)).catch((error) => { console.log(error) })
        // }).catch((error) => { console.log(error) })
    }





    const handleDeleteButton = async (id: number) => {
        await axios.delete(`${api}/delete/${id}`).then(() => setSongs(songs.filter(s => s.id != id))).catch((error) => { console.log(error) })


    }

    const searchByArtist = async (artist: string) => {
        await axios.get(`${api}/getAllOfArtist/${artist}`).then((res) => setSongs(res.data)).catch((error) => { console.log(error) })


    }


    return (
        <>
            <Routes>
                <Route path="/songs">
                    <Route path="/songs" element={<SongLandingPage songs={songs} deleteButton={handleDeleteButton} search={searchByArtist} />} />
                    <Route path="/songs/add" element={<AddSong songs={songs} addSong={addSong} />} />
                    <Route path="/songs/edit/:songId" element={<EditSong songs={songs} editSong={editSong} />} />
                </Route>
            </Routes>
        </>
    )

}