export const quizQuestions = [
    {
        question: 'Q1. 어깨와 엉덩이(골반) 너비를 비교하면 어떤가요?',
        choices: [
            {
                text: '어깨가 엉덩이보다 뚜렷이 넓다',
                scores: { inverted: 2 },
            },
            {
                text: '엉덩이가 어깨보다 뚜렷이 넓다',
                scores: { triangle: 2 },
            },
            {
                text: '어깨와 엉덩이 폭이 비슷하다',
                scores: { rectangle: 1, hourglass: 1, trapezoid: 1 },
            },
            {
                text: '잘 모르겠다 / 크게 차이 없는 것 같다',
                scores: { round: 1, rectangle: 1 },
            },
        ],
    },
    {
        question: 'Q2. 허리 라인(잘록한 정도)은 어떤가요?',
        choices: [
            {
                text: '뚜렷하게 잘록한 허리 라인이 있다',
                scores: { hourglass: 2 },
            },
            {
                text: '약간 들어가는 편이다',
                scores: { trapezoid: 1, triangle: 1 },
            },
            {
                text: '허리 라인이 거의 없는 일자형이다',
                scores: { rectangle: 2 },
            },
            {
                text: '배가 나와 있어 허리선이 잘 보이지 않는다',
                scores: { round: 2 },
            },
        ],
    },
    {
        question: 'Q3. 살이 주로 어느 부위에 붙는 편인가요?',
        choices: [
            {
                text: '허벅지·엉덩이 등 하체에 주로 붙는다',
                scores: { triangle: 2 },
            },
            {
                text: '어깨·팔·등 상체에 주로 붙는다',
                scores: { inverted: 1, round: 1 },
            },
            {
                text: '배·복부 중심으로 붙는다',
                scores: { round: 2 },
            },
            {
                text: '온몸에 고르게 붙는 편이다',
                scores: { trapezoid: 1, rectangle: 1, hourglass: 1 },
            },
        ],
    },
    {
        question: 'Q4. 상체와 하체의 볼륨(크기) 비율은 어떤가요?',
        choices: [
            {
                text: '상체가 크고 하체가 가는 편이다',
                scores: { inverted: 2 },
            },
            {
                text: '하체가 크고 상체가 작은 편이다',
                scores: { triangle: 2 },
            },
            {
                text: '상하체 볼륨이 전체적으로 비슷하다',
                scores: { rectangle: 1, hourglass: 1, trapezoid: 1 },
            },
            {
                text: '복부·중간 부분이 가장 볼륨 있다',
                scores: { round: 2 },
            },
        ],
    },
    {
        question: 'Q5. 전체적인 체형 인상을 가장 잘 표현한 것은?',
        choices: [
            {
                text: '허리가 잘록하고 상하 균형이 아름답다',
                scores: { hourglass: 2 },
            },
            {
                text: '어깨가 적당히 넓고 전체 비율이 안정적이다',
                scores: { trapezoid: 2 },
            },
            {
                text: '위아래 폭이 비슷하고 전체적으로 곧은 라인이다',
                scores: { rectangle: 2 },
            },
            {
                text: '배 또는 상체 중심이 가장 두드러진다',
                scores: { round: 2 },
            },
        ],
    },
];
