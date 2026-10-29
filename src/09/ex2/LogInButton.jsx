
function LogInButton({ onClick }) {
    return (
        <button
            type="button"
            className="cozy-button cozy-button-login"
            onClick={onClick}
        >
            <span>로그인하기</span>

            <span
                className="cozy-button-arrow"
                aria-hidden="true"
            >
        →
      </span>
        </button>
    );
}

export default LogInButton;
