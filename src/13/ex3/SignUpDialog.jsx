import { useState } from 'react';
import Dialog from './Dialog';

export default function SignUpDialog() {
    const [nickname, setNickname] = useState('');
    const trimmedNickname = nickname.trim();

    function handleSubmit(event) {
        event.preventDefault();

        if (trimmedNickname) {
            window.alert(`어서 오세요, ${trimmedNickname}님!`);
        }
    }

    return (
        <Dialog title="화성 탐사 프로그램" message="닉네임을 입력해 주세요.">
            <form onSubmit={handleSubmit}>
                <label>
                    닉네임{' '}
                    <input
                        type="text"
                        value={nickname}
                        onChange={(event) => setNickname(event.target.value)}
                        required
                    />
                </label>{' '}
                <button type="submit" disabled={!trimmedNickname}>가입하기</button>
            </form>
        </Dialog>
    );
}
