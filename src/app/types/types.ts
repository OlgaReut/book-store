export type BookCardType = {
    title: string
    subtitle: string
    isbn13: number
    price: string
    image: string
    url?: string
}

export type BooksCardsType = {
    books: BookCardType[]
}

export type PaginationType = {
    totalPages: number,
    currentPage: number,
    onPageChange: (page: number) => void
}