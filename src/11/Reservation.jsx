import React, { useState } from "react";
import "./Reservation.css";

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState("1");
    const [confirmed, setConfirmed] = useState(null);

    const guestCount = Number(numberOfGuest);
    const isValidGuestCount =
        numberOfGuest.trim() !== "" &&
        Number.isSafeInteger(guestCount) &&
        guestCount >= 1;

    const handleBreakfastChange = (event) => {
        setHaveBreakfast(event.target.checked);
        setConfirmed(null);
    };

    const handleGuestChange = (event) => {
        setNumberOfGuest(event.target.value);
        setConfirmed(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValidGuestCount) return;

        setConfirmed({ haveBreakfast, numberOfGuest: guestCount });
    };

    return (
        <main className="reservation-page">
            <div className="reservation-container">
                <section className="reservation-intro" aria-labelledby="reservation-title">
                    <div className="reservation-brand">
                        <span className="reservation-brand-mark" aria-hidden="true">✦</span>
                        <span>MORNING TABLE</span>
                    </div>

                    <div className="reservation-intro-content">
                        <p className="reservation-kicker">DINING PREFERENCE</p>
                        <h1 id="reservation-title">
                            오늘의 아침을<br />
                            <span>더 편안하게.</span>
                        </h1>
                        <p className="reservation-intro-description">
                            아침 식사 여부와 방문 인원을 알려주세요.
                            <br />
                            필요한 내용만 간편하게 확인할 수 있습니다.
                        </p>
                    </div>

                    <div className="reservation-intro-footer">
                        <span className="reservation-decoration" aria-hidden="true">✳</span>
                        <span>GOOD MORNING, GOOD DAY</span>
                    </div>
                </section>

                <section className="reservation-panel" aria-label="식사 여부 입력">
                    <div className="reservation-panel-header">
                        <div>
                            <p className="reservation-step">01 / 식사 정보</p>
                            <h2>식사 여부 체크</h2>
                            <p className="reservation-description">아래 항목을 선택한 후 확인해 주세요.</p>
                        </div>
                        <span className="reservation-panel-icon" aria-hidden="true">🍽️</span>
                    </div>

                    <form className="reservation-form" onSubmit={handleSubmit}>
                        <div className="reservation-field">
                            <div className="reservation-field-heading">
                                <span className="reservation-field-title" id="breakfast-label">아침 식사</span>
                                <span className="reservation-field-subtitle">조식 이용 여부를 선택해 주세요.</span>
                            </div>
                            <label className="reservation-toggle-row" htmlFor="breakfast-check">
                <span className="reservation-toggle-copy">
                  <strong>{haveBreakfast ? "식사할게요" : "식사하지 않을게요"}</strong>
                  <small>{haveBreakfast ? "조식을 이용합니다" : "조식을 이용하지 않습니다"}</small>
                </span>
                                <input
                                    id="breakfast-check"
                                    className="reservation-toggle-input"
                                    type="checkbox"
                                    checked={haveBreakfast}
                                    onChange={handleBreakfastChange}
                                    aria-labelledby="breakfast-label"
                                />
                                <span className="reservation-switch" aria-hidden="true">
                  <span className="reservation-switch-knob" />
                </span>
                            </label>
                        </div>

                        <div className="reservation-field">
                            <label className="reservation-field-heading" htmlFor="guest-count">
                                <span className="reservation-field-title">방문 인원</span>
                                <span className="reservation-field-subtitle">방문하는 총 인원을 입력해 주세요.</span>
                            </label>
                            <div className="reservation-number-wrap">
                                <input
                                    id="guest-count"
                                    className="reservation-number-input"
                                    type="number"
                                    min="1"
                                    step="1"
                                    inputMode="numeric"
                                    value={numberOfGuest}
                                    onChange={handleGuestChange}
                                    aria-invalid={!isValidGuestCount}
                                    aria-describedby="guest-help"
                                    required
                                />
                                <span className="reservation-number-unit" aria-hidden="true">명</span>
                            </div>
                            <p
                                id="guest-help"
                                className={`reservation-field-help${isValidGuestCount ? "" : " reservation-field-help--error"}`}
                            >
                                {isValidGuestCount
                                    ? "1명 이상의 방문 인원을 입력해 주세요."
                                    : "방문 인원은 1 이상의 정수로 입력해 주세요."}
                            </p>
                        </div>

                        <div className="reservation-summary" aria-label="현재 선택 내용">
                            <span className="reservation-summary-title">선택 내용</span>
                            <div className="reservation-summary-row">
                                <span>아침 식사</span>
                                <strong>{haveBreakfast ? "이용함" : "이용 안 함"}</strong>
                            </div>
                            <div className="reservation-summary-row">
                                <span>방문 인원</span>
                                <strong>{isValidGuestCount ? `${guestCount}명` : "미입력"}</strong>
                            </div>
                        </div>

                        <button
                            className="reservation-submit"
                            type="submit"
                            disabled={!isValidGuestCount}
                        >
                            선택 내용 확인 <span aria-hidden="true">→</span>
                        </button>
                    </form>

                    {confirmed && (
                        <div className="reservation-result" role="status">
                            <span className="reservation-result-symbol" aria-hidden="true">✓</span>
                            <div>
                                <strong>선택 내용을 확인했습니다.</strong>
                                <p>
                                    아침 식사 {confirmed.haveBreakfast ? "이용함" : "이용 안 함"} ·
                                    방문 인원 {confirmed.numberOfGuest}명
                                </p>
                            </div>
                        </div>
                    )}

                    <p className="reservation-notice">
                        이 화면은 입력 내용을 확인하는 실습용이며, 서버에 저장되지 않습니다.
                    </p>
                </section>
            </div>
        </main>
    );
}

export default Reservation;
