import React from "react";
import Book from "./Book";
import "./BookList.css"

// 데이터 배열
const books = [
    {title: "처음 만난 리액트",
     author: "김소플",
     coverImage: "https://image.yes24.com/goods/172506733/XL"
    },
    {title: "데이터베이스 실습",
        author: "황혜정",
        coverImage: "https://image.yes24.com/momo/TopCate480/MidCate007/47965871.jpg"
    },
    {title: "난생 처음 자바 프로그래밍",
        author: "우재남",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    },
    {title: "난생 처음 자바 프로그래밍",
        author: "우재남",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    },
    {title: "난생 처음 자바 프로그래밍",
        author: "우재남",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    },
    {title: "난생 처음 자바 프로그래밍",
        author: "우재남",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    },
    {title: "난생 처음 자바 프로그래밍",
        author: "우재남",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    },
    {title: "난생 처음 자바 프로그래밍",
        author: "우재남",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    },

]

function BookList(props)  {
    return (
        <div className={"bookListWrapper"}>
            {books.map((book) =>{
                return (
                    <Book
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}
                    />
                );
            })}
        </div>
    )
}

export default BookList;