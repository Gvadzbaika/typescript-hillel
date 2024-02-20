class Note {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.creationDate = new Date();
        this.editDate = new Date();
        this.status = 'todo';
    }
}
class DefaultNote extends Note {
    constructor(id, title, content) {
        super(id, title, content);
    }
    editContent(newContent) {
        this.content = newContent;
        this.editDate = new Date();
    }
}
class ConfirmationRequiredNote extends Note {
    constructor(id, title, content, requiresConfirmation) {
        super(id, title, content);
        this.requiresConfirmation = requiresConfirmation;
    }
    editContent(newContent) {
        const confirmation = confirm("Ви впевнені, що хочете змінити цю нотатку?");
        if (confirmation) {
            this.content = newContent;
            this.editDate = new Date();
        }
        else {
            console.log('Редагування нотатки скасовано.');
        }
    }
}
class ToDoList {
    constructor() {
        this.notes = [];
    }
    addNote(title, content, requiresConfirmation = false) {
        if (title.trim() === '' || content.trim() === '') {
            console.error('Назва та зміст нотатки не можуть бути порожніми.');
            return;
        }
        const id = this.notes.length + 1;
        const newNote = requiresConfirmation ?
            new ConfirmationRequiredNote(id, title, content, requiresConfirmation) :
            new DefaultNote(id, title, content);
        this.notes.push(newNote);
    }
    deleteNote(id) {
        const index = this.notes.findIndex(note => note.id === id);
        if (index !== -1) {
            this.notes.splice(index, 1);
        }
        else {
            console.error('Нотатка з вказаним id не знайдена.');
        }
    }
    editNote(id, title, content) {
        const note = this.getNoteById(id);
        if (note) {
            note.title = title;
            note.content = content;
            note.editDate = new Date();
            if (note instanceof ConfirmationRequiredNote) {
                note.status = 'todo';
            }
        }
        else {
            console.error('Нотатка з вказаним id не знайдена.');
        }
    }
    getNoteById(id) {
        return this.notes.find(note => note.id === id);
    }
    getAllNotes() {
        return this.notes;
    }
    markNoteAsDone(id) {
        const note = this.getNoteById(id);
        if (note) {
            note.status = 'done';
        }
        else {
            console.error('Нотатка з вказаним id не знайдена.');
        }
    }
    getNumberOfNotes() {
        return this.notes.length;
    }
    getNumberOfUndoneNotes() {
        return this.notes.filter(note => note.status === 'todo').length;
    }
    searchNotesByKeyword(keyword) {
        return this.notes.filter(note => note.title.includes(keyword) || note.content.includes(keyword));
    }
    sortNotesByStatus() {
        this.notes.sort((a, b) => a.status.localeCompare(b.status));
    }
    sortNotesByCreationDate() {
        this.notes.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
    }
}
// Test
const todoList = new ToDoList();
todoList.addNote('Приклад 1', 'Це зразок нотатки 1');
todoList.addNote('Приклад 2', 'Це зразок нотатки 2');
todoList.addNote('Приклад 3', 'Це зразок нотатки 3, яка вимагає підтвердження', true);
console.log(todoList.getAllNotes());
console.log('Кількість нотаток:', todoList.getNumberOfNotes());
console.log('Кількість невиконаних нотаток:', todoList.getNumberOfUndoneNotes());
todoList.markNoteAsDone(1);
console.log('Після відзначення нотатки як виконаної:', todoList.getAllNotes());
console.log('Пошук за ключовим словом "зразок":', todoList.searchNotesByKeyword('зразок'));
todoList.sortNotesByCreationDate();
console.log('Сортування за датою створення:', todoList.getAllNotes());
