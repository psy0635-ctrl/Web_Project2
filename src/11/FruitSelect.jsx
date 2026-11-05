
import React, { useState } from "react";
import "./FruitSelect.css";

const fruits = [
    { value: "apple", name: "사과", emoji: "🍎", description: "아삭하고 달콤한 사과" },
    { value: "banana", name: "바나나", emoji: "🍌", description: "부드럽고 든든한 바나나" },
    { value: "grapes", name: "포도", emoji: "🍇", description: "한 알씩 즐기는 달콤한 포도" },
    { value: "melon", name: "멜론", emoji: "🍈", description: "향긋하고 촉촉한 멜론" },
];

function FruitSelect() {
    const [value, setValue] = useState("");
    const [submittedFruit, setSubmittedFruit] = useState(null);
    const selectedFruit = fruits.find((fruit) => fruit.value === value);

    const handleChange = (event) => {
        setValue(event.target.value);
        setSubmittedFruit(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedFruit) return;

        setSubmittedFruit(selectedFruit);
        window.alert(`선택한 과일: ${selectedFruit.name}`);
    };

    return (
        <main className="fruit-page">
            <section className="fruit-card" aria-labelledby="fruit-title">
                <header className="fruit-header">
                    <span className="fruit-eyebrow">✦ FRESH PICK</span>
                    <h1 id="fruit-title">오늘의 과일을 골라보세요<span>!</span></h1>
                    <p>마음에 드는 과일 하나를 선택해 주세요.</p>
                </header>

                <div className="fruit-layout">
                    <form className="fruit-form" onSubmit={handleSubmit}>
                        <label htmlFor="fruit-select" className="fruit-label">
                            과일 선택
                        </label>
                        <div className="fruit-select-wrap">
                            <select
                                id="fruit-select"
                                name="fruit"
                                className="fruit-select"
                                value={value}
                                onChange={handleChange}
                                required
                            >
                                <option value="">과일을 선택해 주세요</option>
                                {fruits.map((fruit) => (
                                    <option key={fruit.value} value={fruit.value}>
                                        {fruit.name}
                                    </option>
                                ))}
                            </select>
                            <span className="fruit-chevron" aria-hidden="true">⌄</span>
                        </div>
                        <p className="fruit-help">사과, 바나나, 포도, 멜론 중 하나를 고를 수 있어요.</p>
                        <button className="fruit-button" type="submit" disabled={!selectedFruit}>
                            선택 완료 <span aria-hidden="true">→</span>
                        </button>
                    </form>

                    <div
                        className={`fruit-preview fruit-preview--${selectedFruit?.value || "empty"}`}
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {selectedFruit ? (
                            <>
                                <div className="fruit-emoji" role="img" aria-label={selectedFruit.name}>
                                    {selectedFruit.emoji}
                                </div>
                                <span className="fruit-preview-label">MY PICK</span>
                                <h2>{selectedFruit.name}</h2>
                                <p>{selectedFruit.description}</p>
                            </>
                        ) : (
                            <>
                                <div className="fruit-emoji" aria-hidden="true">🍊</div>
                                <span className="fruit-preview-label">YOUR FRUIT</span>
                                <h2>아직 선택 전이에요</h2>
                                <p>과일을 고르면 이곳에 미리보기가 나타납니다.</p>
                            </>
                        )}
                    </div>
                </div>

                {submittedFruit && (
                    <p className="fruit-result" role="status">
                        ✓ {submittedFruit.emoji} {submittedFruit.name} 선택이 완료되었습니다.
                    </p>
                )}

                <footer className="fruit-footer">FRESH • SIMPLE • HAPPY</footer>
            </section>
        </main>
    );
}

export default FruitSelect;
