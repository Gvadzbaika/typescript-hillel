abstract class Note {
    id: number;
    title: string;
    content: string;
    creationDate: Date;
    editDate: Date;
    status: 'todo' | 'done';

    constructor(id: number, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.creationDate = new Date();
        this.editDate = new Date();
        this.status = 'todo';
    }

    abstract editContent(newContent: string): void;
}

class DefaultNote extends Note {
    constructor(id: number, title: string, content: string) {
        super(id, title, content);
    }

    editContent(newContent: string): void {
        this.content = newContent;
        this.editDate = new Date();
    }
}

class ConfirmationRequiredNote extends Note {
    requiresConfirmation: boolean;

    constructor(id: number, title: string, content: string, requiresConfirmation: boolean) {
        super(id, title, content);
        this.requiresConfirmation = requiresConfirmation;
    }

    editContent(newContent: string): void {
        const confirmation = confirm("Ви впевнені, що хочете змінити цю нотатку?");
        if (confirmation) {
            this.content = newContent;
            this.editDate = new Date();
        } else {
            console.log('Редагування нотатки скасовано.');
        }
    }
}

class ToDoList {
    private notes: Note[];

    constructor() {
        this.notes = [];
    }

    addNote(title: string, content: string, requiresConfirmation: boolean = false): void {
        if (title.trim() === '' || content.trim() === '') {
            console.error('Назва та зміст нотатки не можуть бути порожніми.');
            return;
        }
        const id = this.notes.length + 1;
        const newNote: Note = requiresConfirmation ?
            new ConfirmationRequiredNote(id, title, content, requiresConfirmation) :
            new DefaultNote(id, title, content);
        this.notes.push(newNote);
    }


    deleteNote(id: number): void {
        const index = this.notes.findIndex(note => note.id === id);
        if (index !== -1) {
            this.notes.splice(index, 1);
        } else {
            console.error('Нотатка з вказаним id не знайдена.');
        }
    }

    editNote(id: number, title: string, content: string): void {
        const note = this.getNoteById(id);
        if (note) {
            note.title = title;
            note.content = content;
            note.editDate = new Date();
            if (note instanceof ConfirmationRequiredNote) {
                (note as ConfirmationRequiredNote).status = 'todo';
            }
        } else {
            console.error('Нотатка з вказаним id не знайдена.');
        }
    }

    getNoteById(id: number): Note | undefined {
        return this.notes.find(note => note.id === id);
    }

    getAllNotes(): Note[] {
        return this.notes;
    }

    markNoteAsDone(id: number): void {
        const note = this.getNoteById(id);
        if (note) {
            note.status = 'done';
        } else {
            console.error('Нотатка з вказаним id не знайдена.');
        }
    }

    getNumberOfNotes(): number {
        return this.notes.length;
    }

    getNumberOfUndoneNotes(): number {
        return this.notes.filter(note => note.status === 'todo').length;
    }

    searchNotesByKeyword(keyword: string): Note[] {
        return this.notes.filter(note => note.title.includes(keyword) || note.content.includes(keyword));
    }

    sortNotesByStatus(): void {
        this.notes.sort((a, b) => a.status.localeCompare(b.status));
    }

    sortNotesByCreationDate(): void {
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

