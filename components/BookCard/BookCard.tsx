import React from "react";
import Link from "next/link";
import BookCover from "../BookCover/BookCover";
import { cn } from "@/lib/utils";
import calendar from "../../public/icons/calendar.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const BookCard = ({
  title,
  author,
  genre,
  rating,
  coverUrl,
  coverColor,
  description,
  totalCopies,
  availableCopies,
  videoUrl,
  isLoanedBook = false,
}: Book) => {
  return (
    <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
      <Link
        className={cn(isLoanedBook && "w-full flex flex-col  items-center")}
        href={`/books/${title}`}
      >
        <BookCover coverUrl={coverUrl} coverColor={coverColor} />
        <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>
        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <Image src={calendar} alt="calendar" width={16} height={16} />
              <p className="text-light-100">12 Days to return</p>
            </div>
            <Button className="book-btn text-primary-admin">
              Download receipt
            </Button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default BookCard;
