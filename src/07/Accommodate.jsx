
import { useEffect } from "react";
import useCounter from "./useCounter";
import "./Accommodate.css";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0, MAX_CAPACITY);

    const isFull = count === MAX_CAPACITY;
    const isEmpty = count === 0;
    const remaining = MAX_CAPACITY - count;
    const occupancyPercent = Math.round((count / MAX_CAPACITY) * 100);

    useEffect(() => {
        console.log(`현재 수용 인원: ${count}명 / 최대 정원: ${MAX_CAPACITY}명`);
        console.log(`정원 마감 여부: ${isFull}`);
    }, [count, isFull]);

    const statusMessage = isFull
        ? "정원이 가득 찼습니다. 퇴장 후 다시 입장할 수 있습니다."
        : isEmpty
            ? "현재 이용 중인 사람이 없습니다."
            : `${remaining}명 더 입장할 수 있습니다.`;

    return (
        <div className="mono-page">
            <div className="mono-sheet">
                <header className="mono-topline">
                    <span className="mono-brand">STUDIO / FACILITY</span>
                    <span className="mono-top-center">CAPACITY MANAGEMENT SYSTEM</span>
                    <span className="mono-top-right">NO. 001 — LIVE</span>
                </header>

                <main className="mono-content">
                    <section className="mono-hero" aria-labelledby="mono-title">
                        <p className="mono-overline">PEOPLE · SPACE · CONTROL</p>
                        <h1 className="mono-title" id="mono-title">
                            CAPA<span>CITY</span>
                            <small>MANAGEMENT</small>
                        </h1>
                        <div className="mono-hero-bottom">
                            <span className="mono-block-label">01 / 수용 현황</span>
                            <p>
                                시설의 현재 인원과 남은 자리를 확인하고
                                <br />
                                입장·퇴장을 간편하게 관리합니다.
                            </p>
                        </div>
                    </section>

                    <section className="mono-overview" aria-label="현재 수용 인원">
                        <div className="mono-section-head">
                            <span>NOW OCCUPYING</span>
                            <span className={isFull ? "mono-state mono-state--full" : "mono-state"}>
                <i aria-hidden="true" />
                                {isFull ? "정원 마감" : "입장 가능"}
              </span>
                        </div>

                        <div className="mono-count-row" aria-live="polite" aria-atomic="true">
                            <strong>{String(count).padStart(2, "0")}</strong>
                            <span>/ {String(MAX_CAPACITY).padStart(2, "0")}</span>
                        </div>

                        <div className="mono-count-caption">
                            <span>현재 {count}명 이용 중</span>
                            <span>{occupancyPercent}% FULL</span>
                        </div>

                        <div
                            className="mono-progress"
                            role="progressbar"
                            aria-label="시설 수용률"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={occupancyPercent}
                        >
                            <div
                                className="mono-progress-fill"
                                style={{ width: `${occupancyPercent}%` }}
                            />
                        </div>

                        <div className="mono-capacity-units" aria-hidden="true">
                            {Array.from({ length: MAX_CAPACITY }, (_, index) => (
                                <span
                                    key={index}
                                    className={index < count ? "mono-unit mono-unit--active" : "mono-unit"}
                                />
                            ))}
                        </div>

                        <div className="mono-unit-caption">
                            <span>0명</span>
                            <span>MAX. {MAX_CAPACITY}명</span>
                        </div>
                    </section>

                    <section className="mono-info" aria-label="수용 정보">
                        <div className="mono-info-item">
                            <span className="mono-item-label">02 / AVAILABLE</span>
                            <strong>{String(remaining).padStart(2, "0")}</strong>
                            <span className="mono-item-desc">남은 자리</span>
                        </div>

                        <div className="mono-info-item">
                            <span className="mono-item-label">03 / MAXIMUM</span>
                            <strong>{String(MAX_CAPACITY).padStart(2, "0")}</strong>
                            <span className="mono-item-desc">최대 수용 인원</span>
                        </div>

                        <div className="mono-info-item mono-info-item--status">
                            <span className="mono-item-label">04 / FACILITY STATUS</span>
                            <strong className="mono-status-word">{isFull ? "FULL" : "OPEN"}</strong>
                            <span className="mono-item-desc">{isFull ? "입장 대기" : "입장 가능"}</span>
                        </div>
                    </section>

                    <section className="mono-controls" aria-labelledby="mono-control-title">
                        <div className="mono-controls-header">
                            <div>
                                <span className="mono-block-label">05 / ACTIONS</span>
                                <h2 id="mono-control-title">인원 관리</h2>
                            </div>
                            <span className="mono-control-hint">SELECT AN ACTION BELOW</span>
                        </div>

                        <div className="mono-buttons">
                            <button
                                type="button"
                                className="mono-button mono-button--enter"
                                onClick={increaseCount}
                                disabled={isFull}
                            >
                                <span>+ 입장 처리</span>
                                <span aria-hidden="true">↗</span>
                            </button>

                            <button
                                type="button"
                                className="mono-button mono-button--exit"
                                onClick={decreaseCount}
                                disabled={isEmpty}
                            >
                                <span>− 퇴장 처리</span>
                                <span aria-hidden="true">↘</span>
                            </button>
                        </div>

                        <p className="mono-message" role="status" aria-live="polite">
                            <span aria-hidden="true">●</span> {statusMessage}
                        </p>
                    </section>
                </main>

                <footer className="mono-footer">
                    <span>FACILITY / MONO SERIES</span>
                    <span>새로고침하면 인원수가 0명으로 초기화됩니다.</span>
                </footer>
            </div>
        </div>
    );
}

export default Accommodate;
