
function LogOutButton({ onClick }) {
    return (
        <button
            type="button"
            className="cozy-button cozy-button-logout"
            onClick={onClick}
        >
            <span>로그아웃하기</span>

            <span
                className="cozy-button-arrow"
                aria-hidden="true"
            >
        ↗
      </span>
        </button>
    );
}

export default LogOutButton;
