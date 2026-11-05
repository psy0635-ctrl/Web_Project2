
import React, { useState } from "react";
import "./AttendanceCardBook.css";

// 수업에서 사용한 예제 학생 정보입니다. 사진은 예시 이미지입니다.
const students = [
    {
        id: 1,
        name: "Inje",
        grade: 1,
        major: "인공지능소프트웨어학과",
        avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
        id: 2,
        name: "Steve",
        grade: 4,
        major: "경영학과",
        avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
        id: 3,
        name: "Eric",
        grade: 2,
        major: "철학과",
        avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    },
    {
        id: 4,
        name: "Jane",
        grade: 3,
        major: "수학과",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    },
];

const statusOptions = [
    { value: "present", label: "출석" },
    { value: "late", label: "지각" },
    { value: "absent", label: "결석" },
];

const statusLabels = {
    unmarked: "미확인",
    present: "출석",
    late: "지각",
    absent: "결석",
};

function AttendanceCardBook() {
    // 학생 ID별로 출석 상태를 관리합니다. 초기 상태는 모두 '미확인'입니다.
    const [attendance, setAttendance] = useState({});

    const updateAttendance = (studentId, status) => {
        setAttendance((previous) => ({
            ...previous,
            [studentId]: status,
        }));
    };

    const counts = students.reduce(
        (result, student) => {
            const status = attendance[student.id] ?? "unmarked";
            result[status] += 1;
            return result;
        },
        { present: 0, late: 0, absent: 0, unmarked: 0 }
    );

    const summaryItems = [
        { label: "전체 학생", value: students.length, tone: "total" },
        { label: "출석", value: counts.present, tone: "present" },
        { label: "지각", value: counts.late, tone: "late" },
        { label: "결석", value: counts.absent, tone: "absent" },
    ];

    return (
        <main className="attendance-page">
            <div className="attendance-container">
                <header className="attendance-header">
                    <p className="attendance-eyebrow">STUDENT ATTENDANCE</p>

                    <div className="attendance-header-row">
                        <div>
                            <h1>학생 출석부</h1>
                            <p className="attendance-description">
                                학생 정보를 확인하고 출석 상태를 간편하게 관리하세요.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="attendance-reset"
                            onClick={() => setAttendance({})}
                            disabled={counts.unmarked === students.length}
                        >
                            출석 초기화
                        </button>
                    </div>
                </header>

                <section className="attendance-summary" aria-label="출석 현황">
                    {summaryItems.map((item) => (
                        <div
                            className={`summary-card summary-${item.tone}`}
                            key={item.tone}
                        >
                            <span className="summary-label">{item.label}</span>
                            <strong className="summary-value">
                                {item.value}<span>명</span>
                            </strong>
                        </div>
                    ))}
                </section>

                <section
                    className="attendance-students"
                    aria-labelledby="students-heading"
                >
                    <div className="students-heading-row">
                        <div>
                            <h2 id="students-heading">
                                학생 목록 <span>{students.length}명</span>
                            </h2>
                            <p>카드에서 학생별 출석 상태를 선택할 수 있습니다.</p>
                        </div>

                        <span className="unmarked-count">
              미확인 {counts.unmarked}명
            </span>
                    </div>

                    <div className="students-grid">
                        {students.map((student) => {
                            const status = attendance[student.id] ?? "unmarked";

                            return (
                                <article className="student-card" key={student.id}>
                                    <div className="student-card-top">
                                        <div className="student-avatar" aria-hidden="true">
                                            <span>{student.name.charAt(0)}</span>
                                            <img
                                                src={student.avatar}
                                                alt=""
                                                loading="lazy"
                                                onError={(event) => {
                                                    event.currentTarget.style.display = "none";
                                                }}
                                            />
                                        </div>

                                        <span className={`attendance-badge badge-${status}`}>
                      {statusLabels[status]}
                    </span>
                                    </div>

                                    <div className="student-info">
                                        <h3>{student.name}</h3>
                                        <p>학생 ID · {student.id}</p>
                                    </div>

                                    <div className="student-details">
                    <span className="student-grade">
                      {student.grade}학년
                    </span>
                                        <span
                                            className="student-major"
                                            title={student.major}
                                        >
                      {student.major}
                    </span>
                                    </div>

                                    <div className="student-card-bottom">
                                        <p>출석 상태 선택</p>

                                        <div
                                            className="attendance-actions"
                                            role="group"
                                            aria-label={`${student.name} 출석 상태`}
                                        >
                                            {statusOptions.map((option) => (
                                                <button
                                                    type="button"
                                                    key={option.value}
                                                    className={`status-button status-button-${option.value}`}
                                                    aria-pressed={status === option.value}
                                                    onClick={() =>
                                                        updateAttendance(student.id, option.value)
                                                    }
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <p className="attendance-footnote">
                    ※ 출석 상태는 현재 페이지에서만 유지되며, 새로고침하면
                    초기화됩니다.
                </p>
            </div>
        </main>
    );
}

export default AttendanceCardBook;
