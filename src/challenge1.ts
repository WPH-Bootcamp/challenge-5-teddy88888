// 1. membuat tipe data Book
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// 2. membuat books array ke store books
const books: Book[] = [];

// 3. Implementasi function objek addBook
/**
 * menambahkan a newbook pada the collection.
 * @param title judul buku.
 * @param author pengarang buku.
 * @param year penerbit tahun buku.
 */
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = {
    title,
    author,
    publicationYear: year,
  };
  books.push(newBook);
  console.log(`> Book added: "${title}" by ${author} (${year})`);
}

// Helper function pada format detail untuk display
function formatBook(book: Book): string {
  return `${book.title} by ${book.author} (${book.publicationYear})`;
}

// 4. Implementasi function named listBooks
/**
 * Displays semua stored books di collection.
 */
function listBooks(): void {
  console.log("\n> All Books:");
  if (books.length === 0) {
    console.log("No books in the collection.");
    return;
  }
  books.forEach((book) => {
    console.log(`- ${formatBook(book)}`);
  });
}

// 5. Implementasi function named searchBook
/**
 * mencari and menampilkan buku berdasar judul.
 * @param title (Optional) The title to search for. If omitted, lists all books.
 */
function searchBook(title?: string): void {
  if (title === undefined) {
    console.log("\n> Search parameter omitted. Listing all books:");
    listBooks(); // Re-use listBooks for display
    return;
  }

  console.log(`\n> Search Results for "${title}":`);

  const searchResults: Book[] = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  if (searchResults.length === 0) {
    console.log(`No books found matching the title "${title}".`);
    return;
  }

  searchResults.forEach((book) => {
    console.log(`- ${formatBook(book)}`);
  });
}

// --- Example Usage ---

// Adding some books
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
addBook("1984", "George Orwell", 1949);
addBook("To Kill a Mockingbird", "Harper Lee", 1960);

// Displaying all books
listBooks();

// Searching for a book by title
searchBook("1984");

// Searching for a partial match
searchBook("gatsby");

// Searching without a title (optional parameter test)
searchBook();
// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
