import { useSyncExternalStore } from 'react';
import FitFinderApp from './fit-finder/FitFinderApp';
import { GUIDE_HASH, HOME_HASH } from './fit-finder/routes';
import DarkOrLight from './14/DarkOrLight';
import FashionHome from './fashion-home/FashionHome';
import ShoppingLanding from './shopping-landing/ShoppingLanding';

function subscribeToHash(listener) {
    window.addEventListener('hashchange', listener);
    return () => window.removeEventListener('hashchange', listener);
}

function getHash() {
    return window.location.hash;
}

export default function App() {
    const [path, search] = useSyncExternalStore(subscribeToHash, getHash).split('?');
    const isFitFinderRoute = path === HOME_HASH || path === GUIDE_HASH;

    // 기존 FIT FINDER 주소를 우선 처리한다.
    if (isFitFinderRoute) {
        return (
            <DarkOrLight initialTheme="dark">
                <FitFinderApp showGuide={path === GUIDE_HASH} search={search} />
            </DarkOrLight>
        );
    }

    // 기본 화면과 쇼핑 정보 주소는 새 랜딩페이지로 연결한다.
    if (!path || path === '#' || path === '#/' || path === '#/shopping') {
        return <ShoppingLanding />;
    }

    // 기존 패션 홈페이지와 나머지 해시 이동은 유지한다.
    return (
        <DarkOrLight initialTheme="dark">
            <FashionHome section={path === '#/fashion-home' ? '' : path} />
        </DarkOrLight>
    );
}
