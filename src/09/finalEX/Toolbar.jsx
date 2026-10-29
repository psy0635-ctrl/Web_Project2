function Toolbar({
                     isLoggedIn,
                     loginClick,
                     logoutClick
                 }) {
    return (
        <header className="toolbar">
            <div
                className="toolbar-brand"
                aria-label="Mood Lab"
            >
        <span
            className="toolbar-brand-icon"
            aria-hidden="true"
        >
          ✳
        </span>

                <span>
          mood
          <span className="toolbar-brand-accent">
            lab.
          </span>
        </span>
            </div>

            <div className="toolbar-actions">
        <span className="toolbar-chapter">
          INTERACTIVE UI / 09
        </span>

                {isLoggedIn && (
                    <span
                        className="toolbar-welcome"
                        role="status"
                    >
            환영합니다!
          </span>
                )}

                <button
                    type="button"
                    className={`toolbar-button ${
                        isLoggedIn ? "is-logout" : ""
                    }`}
                    onClick={
                        isLoggedIn ? logoutClick : loginClick
                    }
                >
                    {isLoggedIn ? "로그아웃" : "로그인"}
                    <span aria-hidden="true">
            {isLoggedIn ? "↗" : "→"}
          </span>
                </button>
            </div>
        </header>
    );
}

export default Toolbar;