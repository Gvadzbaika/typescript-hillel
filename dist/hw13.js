class Note {
    constructor(id, title, content, creationDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.creationDate = creationDate;
        this.lastEditDate = creationDate;
        this.status = false; // By default, a note is pending
    }
    // Getter methods
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getContent() {
        return this.content;
    }
    getCreationDate() {
        return this.creationDate;
    }
    getLastEditDate() {
        return this.lastEditDate;
    }
    getStatus() {
        return this.status;
    }
    // Setter methods
    setTitle(newTitle) {
        this.title = newTitle;
        this.lastEditDate = new Date();
    }
    setContent(newContent) {
        this.content = newContent;
        this.lastEditDate = new Date();
    }
    setStatus(status) {
        this.status = status;
        this.lastEditDate = new Date();
    }
}
class TodoList {
    constructor() {
        this.notes = [];
    }
    // Method to add a new note
    addNote(title, content) {
        const newNote = new Note(this.notes.length + 1, title, content, new Date());
        this.notes.push(newNote);
    }
    // Method to remove a note by ID
    removeNoteById(id) {
        this.notes = this.notes.filter(note => note.getId() !== id);
    }
    // Method to edit a note by ID
    editNoteById(id, newTitle, newContent) {
        const noteToEdit = this.notes.find(note => note.getId() === id);
        if (noteToEdit) {
            noteToEdit.setTitle(newTitle);
            noteToEdit.setContent(newContent);
        }
    }
    // Method to get a note by ID
    getNoteById(id) {
        return this.notes.find(note => note.getId() === id);
    }
    // Method to get all notes
    getAllNotes() {
        return this.notes;
    }
    // Method to mark a note as completed by ID
    markNoteAsCompleted(id) {
        const noteToComplete = this.notes.find(note => note.getId() === id);
        if (noteToComplete) {
            noteToComplete.setStatus(true);
        }
    }
    // Method to get total number of notes
    getTotalNotesCount() {
        return this.notes.length;
    }
    // Method to get number of pending notes
    getPendingNotesCount() {
        return this.notes.filter(note => !note.getStatus()).length;
    }
    // Method to search notes by title or content
    searchNotes(query) {
        query = query.toLowerCase();
        return this.notes.filter(note => note.getTitle().toLowerCase().includes(query) ||
            note.getContent().toLowerCase().includes(query));
    }
    // Method to sort notes by status or creation date
    sortNotesBy(property) {
        this.notes.sort((a, b) => {
            if (property === 'status') {
                return a.getStatus() === b.getStatus() ? 0 : a.getStatus() ? 1 : -1;
            }
            else if (property === 'creationDate') {
                return a.getCreationDate().getTime() - b.getCreationDate().getTime();
            }
            return 0;
        });
    }
}
// Example usage:
const todoList = new TodoList();
todoList.addNote("Shopping", "Buy groceries for the week");
todoList.addNote("Meeting", "Prepare presentation for the meeting");
todoList.addNote("Exercise", "Go for a jog in the park");
console.log(todoList.getAllNotes());
todoList.editNoteById(2, "Meeting", "Prepare agenda for the meeting");
console.log(todoList.searchNotes("shopping"));
console.log(todoList.searchNotes("meeting"));
todoList.markNoteAsCompleted(1);
console.log(todoList.getTotalNotesCount());
console.log(todoList.getPendingNotesCount());
todoList.sortNotesBy('status');
console.log(todoList.getAllNotes());
todoList.sortNotesBy('creationDate');
console.log(todoList.getAllNotes());
