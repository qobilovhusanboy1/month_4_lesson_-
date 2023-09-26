class Book{
    public author;
    public title;
    public publicyear;

    constructor(author: string, title: string, publicyear: number){
        this.author = author;
        this.title = title;
        this.publicyear = publicyear;
    }

    year(){
        const bookYear: number = new Date().getFullYear() - this.publicyear;
        return `Kitobni yozgan odam ${this.author}\nKitobga yozilganiga hozirda ${bookYear} bolgan.`
    }
};


const book: Book = new Book('Alisher Navoiy', 'Xamsa', 1996);
console.log(book.year());