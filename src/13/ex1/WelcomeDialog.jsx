import FancyBorder from './FancyBorder';

export default function WelcomeDialog() {
    return (
        <>
            <FancyBorder color="blue">
                <h2 className="fancy-border__title">어서 오세요</h2>
                <p className="fancy-border__message">우리 사이트에 방문하신 것을 환영합니다!</p>
            </FancyBorder>
            <FancyBorder color="red">
                <h2 className="fancy-border__title">회원가입을 환영합니다</h2>
                <p className="fancy-border__message">새로운 회원이 되신 것을 축하합니다!</p>
            </FancyBorder>
            <FancyBorder color="green">
                <h2 className="fancy-border__title">초록색 테두리</h2>
                <p className="fancy-border__message">테두리 색상은 color 속성으로 지정합니다.</p>
            </FancyBorder>
        </>
    );
}
