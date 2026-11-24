import { useSyncExternalStore } from 'react';
import ProfileCard from './13/ProfileCard';
import FitFinderApp from './fit-finder/FitFinderApp';
import { GUIDE_HASH, HOME_HASH } from './fit-finder/routes';

function subscribeToHash(listener) {
    window.addEventListener('hashchange', listener);
    return () => window.removeEventListener('hashchange', listener);
}

function getHash() {
    return window.location.hash;
}

export default function App() {
    const [path, search] = useSyncExternalStore(subscribeToHash, getHash).split('?');

    if (path === HOME_HASH || path === GUIDE_HASH) {
        return <FitFinderApp showGuide={path === GUIDE_HASH} search={search} />;
    }

    return <ProfileCard />;
}
