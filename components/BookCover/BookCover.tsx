import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide"

const variantStyle: Record<BookCoverVariant, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    wide: "book-cover_wide",
}

interface Props {
    className?:string,
    variant?:BookCoverVariant,
    coverColor:string,
    coverUrl:string
}

const BookCover = ( {className, variant = "regular", coverColor = "#bf1e2e", coverUrl = "https://placehold.co/400x600.png"}:Props ) => {
  return (
    <div className={cn("relative transition-all duration-300", variantStyle[variant], className)}>
        BOOK SIDE SVG
        <div className='absolute z-10' style={{ left: '12%', width: '87.5%', height: '88%'}}>
            <Image src={coverUrl} alt="book cover" fill className="rounded-sm object-fill"/>
        </div>
    </div>
  )
}

export default BookCover