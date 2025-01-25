import React from 'react'
import BookCard from '../BookCard/BookCard';

interface BookListProps {
    title: string;
    books: {
      id: number;
      title: string;
      author: string;
      genre: string;
      rating: number;
      totalCopies: number;
      availableCopies: number;
      description: string;
      coverColor: string;
      coverUrl: string;
      videoUrl: string;
      summary: string;
    }[];
    containerClassName: string;
  }
  
const BookList: React.FC<BookListProps> = ( { title, books, containerClassName } ) => {
  return (
    <section className='container'>
        <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>
        <ul className='book-list'>
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </ul>
    </section>
  )
}

export default BookList