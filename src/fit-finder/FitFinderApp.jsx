import { useEffect } from 'react';
import { bodyTypes } from './bodyTypes';
import GuidePage from './GuidePage';
import HomePage from './HomePage';
import { BODY_TYPE_SECTION, GUIDE_HASH, HOME_HASH } from './routes';
import './fit-finder.css';

export default function FitFinderApp({ showGuide, search }) {
    const params = new URLSearchParams(search);
    const targetType = params.get('type');
    const guideTarget = bodyTypes.find(({ id }) => id === targetType)?.id;
    const homeTarget = params.get('section') === BODY_TYPE_SECTION ? BODY_TYPE_SECTION : undefined;
    const targetId = showGuide ? guideTarget : homeTarget;

    useEffect(() => {
        const previousTitle = document.title;
        document.title = showGuide ? 'FIT FINDER - Guide' : 'FIT FINDER';
        return () => { document.title = previousTitle; };
    }, [showGuide]);

    useEffect(() => {
        const target = targetId && document.getElementById(targetId);
        if (target) {
            target.focus({ preventScroll: true });
            target.scrollIntoView({ block: 'start' });
        } else {
            window.scrollTo(0, 0);
        }
    }, [showGuide, targetId]);

    return (
        <div className="fit-finder" lang="ko">
            <header className="ff-header">
                <h1><a href={HOME_HASH}>FIT FINDER</a></h1>
                <nav aria-label="FIT FINDER">
                    <a href={HOME_HASH} aria-current={showGuide ? undefined : 'page'}>Intro</a>
                    <a href={GUIDE_HASH} aria-current={showGuide ? 'page' : undefined}>Guide</a>
                </nav>
            </header>
            {showGuide ? <GuidePage targetId={targetId} /> : <HomePage />}
        </div>
    );
}
