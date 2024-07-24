import React from 'react';
import { fakeData as notes } from "../assets/fakeData.js";
import NoteCard from "../components/NoteCard.jsx";
// !отстановился на времени 34:43!!!
const NotesPage = () => {
	return (
		<div >
			{notes.map(note => (
				<NoteCard key={note.id} note={note} />
			))}
		</div>
	)
}

export default NotesPage