import triangleImage from './images/Triangle.jpg';
import invertedImage from './images/Inverted Triangle.jpg';
import rectangleImage from './images/Rectangle.webp';
import hourglassImage from './images/Hourglass.jpg';
import roundImage from './images/Round.jpg';
import trapezoidImage from './images/Trapezoid.jpg';

// Card order also determines which result wins a quiz score tie.
export const bodyTypes = [
    {
        id: 'triangle',
        number: '01',
        name: 'Triangle',
        description: '하체가 상대적으로 발달한 체형',
        image: triangleImage,
        recommended: '어깨 라인이 강조된 자켓, 밝은 상의 + 어두운 하의, A라인 스커트, 크롭 상의로 상체 비율 강조',
        notRecommended: '스키니진, 밝은 하의, 볼륨감 있는 하의는 하체를 더욱 부각시켜 비율이 무너질 수 있음',
    },
    {
        id: 'inverted',
        number: '02',
        name: 'Inverted',
        description: '어깨가 넓고 하체가 슬림한 체형',
        image: invertedImage,
        recommended: '와이드 팬츠, 플레어 스커트, A라인 하의로 하체에 볼륨을 더해 전체 균형을 맞춤',
        notRecommended: '어깨 패드가 강한 자켓, 하이넥, 크롭 자켓은 상체를 더 넓어 보이게 만들 수 있음',
    },
    {
        id: 'rectangle',
        number: '03',
        name: 'Rectangle',
        description: '상체와 하체 폭이 비슷한 직선형 체형',
        homeDescription: '상체와 하체 폭이 비슷한 체형',
        image: rectangleImage,
        recommended: '벨트, 크롭 자켓, 하이웨스트 팬츠, 랩 스타일로 허리선을 만들어 입체감 추가',
        notRecommended: '박스핏, 일자 원피스, 오버핏 셋업은 체형을 더 평면적이고 밋밋하게 보이게 함',
    },
    {
        id: 'hourglass',
        number: '04',
        name: 'Hourglass',
        description: '허리선이 뚜렷하고 균형 잡힌 체형',
        homeDescription: '허리선이 뚜렷한 균형형 체형',
        image: hourglassImage,
        recommended: '허리 라인이 드러나는 슬림핏, 하이웨스트, 벨티드 자켓으로 자연스러운 비율 강조',
        notRecommended: '허리선 없는 오버핏, 박시한 상의, 루즈한 원피스는 장점인 허리 라인을 가림',
    },
    {
        id: 'round',
        number: '05',
        name: 'Round',
        description: '상체 중심에 볼륨이 있는 체형',
        image: roundImage,
        recommended: '롱 아우터, V넥 상의, 스트레이트 팬츠, 세로 라인을 강조해 전체 실루엣을 정리',
        notRecommended: '짧은 상의, 타이트한 상의, 두꺼운 소재는 상체 볼륨을 더 강조해 답답해 보일 수 있음',
    },
    {
        id: 'trapezoid',
        number: '06',
        name: 'Trapezoid',
        description: '전체 균형이 안정적인 체형',
        image: trapezoidImage,
        recommended: '테일러드 자켓, 슬림 스트레이트 팬츠, 셋업 스타일로 깔끔하고 정돈된 실루엣 유지',
        notRecommended: '과한 오버핏, 루즈한 하의, 무너지는 실루엣은 균형 잡힌 체형의 장점을 흐릴 수 있음',
    },
];
