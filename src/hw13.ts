class Note {
    private lastEditDate: Date;
    private status: boolean = false; // true for completed, false for pending
  
    constructor(
      private id: number,
      private title: string,
      private content: string,
      private creationDate: Date
    ) {
      this.lastEditDate = creationDate;
    }
  
    // Getter methods
    getId(): number {
      return this.id;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getContent(): string {
      return this.content;
    }
  
    getCreationDate(): Date {
      return this.creationDate;
    }
  
    getLastEditDate(): Date {
      return this.lastEditDate;
    }
  
    getStatus(): boolean {
      return this.status;
    }
  
    // Setter methods
    setTitle(newTitle: string): void {
      this.title = newTitle;
      this.lastEditDate = new Date();
    }
  
    setContent(newContent: string): void {
      this.content = newContent;
      this.lastEditDate = new Date();
    }
  
    setStatus(status: boolean): void {
      this.status = status;
      this.lastEditDate = new Date();
    }
  }
  
  class TodoList {
    private notes: Note[] = [];
  
    // Method to add a new note
    addNote(title: string, content: string): void {
      const newNote = new Note(
        this.notes.length + 1,
        title,
        content,
        new Date()
      );
      this.notes.push(newNote);
    }
  
    // Method to remove a note by ID
    removeNoteById(id: number): void {
      this.notes = this.notes.filter(note => note.getId() !== id);
    }
  
    // Method to edit a note by ID
    editNoteById(id: number, newTitle: string, newContent: string): void {
      const noteToEdit = this.getNoteById(id);
      if (noteToEdit) {
        noteToEdit.setTitle(newTitle);
        noteToEdit.setContent(newContent);
      }
    }
  
    // Method to get a note by ID
    getNoteById(id: number): Note | undefined {
      return this.notes.find(note => note.getId() === id);
    }
  
    // Method to get all notes
    getAllNotes(): Note[] {
      return this.notes;
    }
  
    // Method to mark a note as completed by ID
    markNoteAsCompleted(id: number): void {
      const noteToComplete = this.getNoteById(id);
      if (noteToComplete) {
        noteToComplete.setStatus(true);
      }
    }
  
    // Method to get total number of notes
    getTotalNotesCount(): number {
      return this.notes.length;
    }
  
    // Method to get number of pending notes
    getPendingNotesCount(): number {
      return this.notes.filter(note => !note.getStatus()).length;
    }
  
    // Method to search notes by title or content
    searchNotes(query: string): Note[] {
      query = query.toLowerCase();
      return this.notes.filter(note =>
        note.getTitle().toLowerCase().includes(query) ||
        note.getContent().toLowerCase().includes(query)
      );
    }
  
    // Method to sort notes by status or creation date
    sortNotesBy(property: 'status' | 'creationDate'): void {
      this.notes.sort((a, b) => {
        if (property === 'status') {
          return a.getStatus() === b.getStatus() ? 0 : a.getStatus() ? 1 : -1;
        } else if (property === 'creationDate') {
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
  