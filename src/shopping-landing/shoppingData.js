// 공식 상품 자료를 참고한 학습용 카탈로그. 가격과 재고는 실시간 연동하지 않는다.
export const categories = [
    { id: 'all', label: '전체 보기' },
    { id: 'outer', label: '아우터' },
    { id: 'knit', label: '니트웨어' },
    { id: 'pants', label: '팬츠' },
    { id: 'bag', label: '가방' },
];

// 상품번호와 색상번호를 이용해 공식 상품 이미지 주소를 구성한다.
function photo(code, color) {
    return `https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/${code}/item/goods_${color}_${code}_3x4.jpg?width=600`;
}

export const products = [
    {
        id: 'coat', code: '487423', category: 'outer', tag: 'WINTER OUTER',
        title: '더블페이스릴랙스롱코트', english: 'Double Face Coat',
        brand: 'UNIQLO', price: 149000, priceNote: '공식 상품 페이지의 이전 표시 가격',
        color: 'BLACK (09)', sizes: 'XS ~ 3XL',
        material: '겉감: 모 33%, 폴리에스터 47%(재생섬유 30% 포함), 나일론 20%',
        description: '울 혼방 원단과 벨트, 넉넉한 실루엣을 갖춘 롱코트입니다.',
        care: '드라이클리닝 가능, 물세탁 및 건조기 사용 불가',
        tip: '크림색 니트와 와이드 팬츠를 매치해 보세요.',
        image: photo('487423', '09'),
        url: 'https://www.uniqlo.com/kr/ko/products/E487423-000/00',
    },
    {
        id: 'jacket', code: '487518', category: 'outer', tag: 'UTILITY EDIT',
        title: '패디드유틸리티쇼트재킷', english: 'Padded Utility Jacket',
        brand: 'UNIQLO', price: 79900, priceNote: '공식 상품 페이지의 베이지 색상 표시 가격',
        color: 'BEIGE (32)', sizes: 'XS ~ 3XL',
        material: '겉감: 나일론 100%(재생섬유 52% 포함), 충전재: 폴리에스터 100%',
        description: '코듀로이 칼라와 두 방향으로 사용하는 포켓이 특징인 짧은 아우터입니다.',
        care: '손세탁 가능, 드라이클리닝 및 건조기 사용 불가',
        tip: '데님과 함께 캐주얼한 겨울 룩을 연출해 보세요.',
        image: photo('487518', '32'),
        fallbackImage: 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/487518/feature/krgoods_487518_feature1.jpg',
        url: 'https://www.uniqlo.com/kr/ko/products/E487518-000/00?colorDisplayCode=32',
    },
    {
        id: 'knit', code: '485318', category: 'knit', tag: 'SOFT ESSENTIALS',
        title: '캐시미어크루넥스웨터', english: 'Cashmere Crew Neck',
        brand: 'UNIQLO', price: 129000, priceNote: '공식 상품 페이지의 그레이 색상 표시 가격',
        color: 'GRAY (03)', sizes: 'XS ~ 3XL', material: '캐시미어 100%',
        description: '부드러운 캐시미어 소재의 기본 크루넥 니트로 여러 옷과 레이어드하기 좋습니다.',
        care: '손세탁 또는 드라이클리닝, 건조기 사용 불가',
        tip: '셔츠와 함께 입거나 어두운 코트 안에 매치해 보세요.',
        image: photo('485318', '03'),
        // 공식 검색 자료에서 이 주소의 본문 상품번호가 485318로 표시됨.
        url: 'https://store-kr.uniqlo.com/kr/ko/products/E465734-000/00?colorDisplayCode=03',
    },
    {
        id: 'denim', code: '488462', category: 'pants', tag: 'MODERN DENIM',
        title: '와이드스트레이트진', english: 'Wide Straight Jeans',
        brand: 'UNIQLO U', price: 19900, priceNote: '공식 상품 페이지의 오렌지 색상 표시 가격(조회 자료에는 품절 표시)',
        color: 'ORANGE (22)', sizes: '22 ~ 29 inch', material: '몸판: 면 100%',
        description: '면 트윌 데님과 클래식한 다섯 개의 포켓을 적용한 와이드 스트레이트 팬츠입니다.',
        care: '세탁기 사용 가능, 드라이클리닝 및 건조기 사용 불가',
        tip: '짧은 재킷이나 몸에 맞는 니트와 함께 입어 보세요.',
        image: photo('488462', '22'),
        fallbackImage: 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/488462/feature/krgoods_488462_feature1.jpg',
        url: 'https://store-kr.uniqlo.com/kr/ko/products/E488462-000/00?colorDisplayCode=22',
    },
    {
        id: 'bag', code: '489570', category: 'bag', tag: 'DAILY OBJECTS',
        title: '라운드미니숄더백', english: 'Round Mini Shoulder Bag',
        brand: 'UNIQLO', price: 19900, priceNote: '공식 상품 페이지의 와인 색상 표시 가격',
        color: 'WINE (19)', sizes: 'FREE · 4L', material: '겉감: 재생 나일론 100%, 안감: 폴리에스터 100%',
        description: '둥근 형태와 길이 조절 스트랩, 내부 포켓 두 개를 갖춘 데일리 가방입니다.',
        care: '물세탁, 드라이클리닝 및 건조기 사용 불가',
        tip: '무채색 옷에 와인 컬러 가방으로 포인트를 주세요.',
        image: photo('489570', '19'),
        url: 'https://store-kr.uniqlo.com/kr/ko/products/E489570-000/00?colorDisplayCode=19',
    },
    {
        id: 'wool', code: '471847', category: 'knit', tag: 'TEXTURE STUDY',
        title: '램스울니트재킷', english: 'Lambswool Knit Jacket',
        brand: 'UNIQLO U', price: null, priceNote: '확인 가능한 공식 자료에 가격이 표시되지 않음',
        color: 'BROWN (35)', sizes: 'S ~ 4XL', material: '모 100%',
        description: '버튼과 플랩 포켓이 있는 울 니트 재킷으로 여유 있는 핏이 특징입니다.',
        care: '손세탁 또는 드라이클리닝, 건조기 사용 불가',
        tip: '화이트 티셔츠와 스트레이트 데님을 매치해 보세요.',
        image: photo('471847', '35'),
        fallbackImage: 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/471847/feature/krgoods_471847_feature1.jpg',
        url: 'https://www.uniqlo.com/kr/ko/products/E471847-000/00',
    },
];

export function formatPrice(price) {
    return price === null ? '판매처 가격 확인' : `${price.toLocaleString('ko-KR')}원`;
}
