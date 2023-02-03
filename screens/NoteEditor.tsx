import { View, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { Stack, TextInput, Button } from "@react-native-material/core";
import { NotesContext } from "../store/userNotes-context";
import { Routes } from "../constants";
import {
  storeNote,
  updateNote,
  deleteNote as removeNote,
} from "../api/notesApi";

type NoteEditorProps = {
  navigation: any; // todo type
  route: any; // todo type
};

const NoteEditor: React.FC<NoteEditorProps> = ({ navigation, route }) => {
  const isNewNote = route.params === undefined;
  const [title, setTitle] = useState(isNewNote ? "" : route.params.title);
  const [note, setNote] = useState(isNewNote ? "" : route.params.note);
  const isNoteComplete = !!note && !!title;
  const { addNote, editNote, deleteNote } = useContext(NotesContext);

  const handleSaveNote = async () => {
    try {
      if (isNewNote) {
        const noteData = { title, note };
        const id = await storeNote(noteData);
        addNote({ id, ...noteData });
      } else {
        const noteId = route.params.id;
        editNote({ id: noteId, title, note });
        updateNote({ id: noteId, title, note });
      }
    } catch (error) {
      console.log(error);
    }

    navigation.navigate(Routes.NotesList);
  };

  const handleDelete = () => {
    deleteNote(route.params.id);
    removeNote(route.params.id);
    navigation.navigate(Routes.NotesList);
  };

  return (
    <View style={styles.container}>
      <Stack spacing={8}>
        <TextInput
          color="black"
          placeholder="title"
          value={title}
          onChangeText={(text) => setTitle(text)}
          variant="outlined"
        />
        <TextInput
          color="black"
          placeholder="what I want save"
          inputContainerStyle={styles.noteDetails}
          value={note}
          multiline
          variant="outlined"
          onChangeText={(text) => setNote(text)}
        />
        <Button
          color="black"
          disableElevation
          disabled={!isNoteComplete}
          title={isNewNote ? "save" : "edit"}
          onPress={handleSaveNote}
        />
        {!isNewNote && (
          <Button
            color="#ae2012"
            disableElevation
            title={"delete"}
            onPress={handleDelete}
          />
        )}
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  noteDetails: {
    alignItems: "flex-start",
    height: 500,
  },
});

export default NoteEditor;
