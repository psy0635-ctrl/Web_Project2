export const HOME_HASH = '#/fit-finder';
export const GUIDE_HASH = `${HOME_HASH}/guide`;
export const BODY_TYPE_SECTION = 'body-type';

export function guideCardLink(id) {
    return `${GUIDE_HASH}?type=${id}`;
}
