import React from 'react'

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
    <section>
        <h2 className='font-bebas-neue text-4xl text-light-100'>Popular Books</h2>
    </section>
  )
}

export default BookList