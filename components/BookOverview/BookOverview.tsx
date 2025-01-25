import React from "react";
import Image from "next/image";
import star from "../../public/icons/star.svg";
import { Button } from "../ui/button";
import book from "../../public/icons/book.svg";
import BookCover from "../BookCover/BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  summary,
  coverColor,
  description,
  totalCopies,
  availableCopies,
  videoUrl,
  coverUrl,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
            <p>By <span className="font-semibold text-light-200">{author}</span></p>
            <p>Category <span className="font-semibold text-light-200">{genre}</span></p>
            <div className="flex flex-row gap-1">
                <Image src={star} alt="star" width={22} height={22} />
                <p>{rating}</p>
            </div>
        </div>

        <div className="book-copies">
            <p>Total Copies: <span className="font-semibold text-light-200">{totalCopies}</span></p>
            <p>Available Copies: <span className="font-semibold text-light-200">{availableCopies}</span></p>
        </div>
        <p className="book-description">{description}</p>
        <Button className="book-overview_btn"><Image src={book} alt="book" width={20} height={20} />
        <p className="font-bebas-neue text-xl text-dark-100">Borrow</p>
        </Button>
      </div>

      <div className="flex flex-1 justify-center relative">
        <div className="relative">
            <BookCover variant="wide" className="z-10" coverColor={coverColor} coverUrl={coverUrl} />

            <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                <BookCover variant="wide" coverColor={coverColor} coverUrl={coverUrl} />
            </div>
        </div>
      </div>

    </section>
  );
};

export default BookOverview;
