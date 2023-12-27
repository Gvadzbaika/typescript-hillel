interface Author {
    name: string;
    birthYear: number;
  }
  
  interface Book {
    title: string;
    author: Author;
    year: number;
  }
  
  interface BookService {
    getBookInfo(bookId: number): Book;
    getAuthorInfo(authorId: number): Author;
  }
  
  class AuthorInfo implements Author {
    constructor(
      public name: string,
      public birthYear: number,
    ) {}
  }
  
  class BookInfo implements Book {
    constructor(
      public title: string,
      public author: Author,
      public year: number,
    ) {}
  }
  
  class MockBookService implements BookService {
    private books: Book[] = [
      new BookInfo("Rage of Angels", new AuthorInfo("Sidney Sheldon", 1917), 1980),
      new BookInfo("Master of the Game", new AuthorInfo("Sidney Sheldon", 1917), 1982),
      new BookInfo("Tucker's Way", new AuthorInfo("David Johnson", 1972), 2012),
    ];
  
    getBookInfo(bookId: number): Book {
      const book = this.books.find((b, index) => index === bookId - 1);
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    }
  
    getAuthorInfo(authorId: number): Author {
      const book = this.books.find((b) => b.author.birthYear === authorId);
      if (!book) {
        throw new Error("Author not found");
      }
      return book.author;
    }
  }
  
  const bookService = new MockBookService();
  const bookInfo1 = bookService.getBookInfo(1);
  const bookInfo2 = bookService.getBookInfo(2);
  const authorInfo = bookService.getAuthorInfo(1972);
  
  console.log("Book 1:", bookInfo1);
  console.log("Book 2:", bookInfo2);
  console.log("Author:", authorInfo);
  