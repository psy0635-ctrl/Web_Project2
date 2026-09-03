import Book from "./Book";
import "./Book.css";

// CSS 파일 import (환경에 따라 경로가 다를 수 있습니다)
// import "./styles.css";

function Library(props) {
    return(
        <div className="library-container">
            <Book
                name="처음 만난 파이썬"
                numOfPage={300}
                imgUrl="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791185890814.jpg?t=2978725"
            />

            <Book
                name="처음 만난 AWS"
                numOfPage={400}
                imgUrl="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169213042.jpg?t=2980434"
            />

            <Book
                name="처음 만난 리액트"
                numOfPage={500}
                imgUrl="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791162245682.jpg?t=2978941"
            />

            {/* 리스트를 위에 몇 개 더 추가해보세요 */}

            <Book
                name="처음 만난 자바스크립트"
                numOfPage={250}
                imgUrl="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791185890777.jpg?t=2978948"
            />

            <Book
                name="처음 만난 HTML/CSS"
                numOfPage={180}
                imgUrl="https://image.yes24.com/goods/57500683/xl"
            />
        </div>
    )
}

export default Library;