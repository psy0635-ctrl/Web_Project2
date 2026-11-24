# FIT FINDER — 체형별 핏 가이드

**웹프로그래밍 활용 기말 과제**입니다. 1학기에 HTML, CSS, JavaScript와 jQuery로 제작한 FIT FINDER의 홈과 핏 가이드를 React 함수형 컴포넌트로 구현하였습니다. 
사용자는 퀴즈로 자신의 체형을 찾아보거나, 체형을 직접 선택해 어울리는 핏과 피할 핏을 비교할 수 있습니다.

## 실행 방법

Git, Node.js, npm이 설치된 환경에서 아래 명령을 실행합니다. 실행 확인에 사용한 버전은 Node.js `24.19.0`, npm `11.17.0`입니다.

```powershell
git clone https://github.com/psy0635-ctrl/Web_Project2.git
cd Web_Project2
npm.cmd ci
npm.cmd start
```

이미 저장소를 받았다면 `package.json`이 있는 폴더에서 설치와 실행 명령만 입력합니다. macOS·Linux에서는 `npm.cmd` 대신 `npm`을 사용합니다.

| 화면 | 접속 주소 |
| --- | --- |
| **FIT FINDER 홈** | [http://localhost:3000/#/fit-finder](http://localhost:3000/#/fit-finder) |
| **핏 가이드** | [http://localhost:3000/#/fit-finder/guide](http://localhost:3000/#/fit-finder/guide) |
| 기존 수업 실습 | [http://localhost:3000/](http://localhost:3000/) |

브라우저에 기본 주소가 자동으로 열리면 기존 부산 숙소 카드 실습이 보입니다. 기말 과제는 위 표의 **FIT FINDER 홈**에서 시작합니다. 홈 상단 영상 재생에는 인터넷 연결이 필요합니다.

## 기능 확인 순서

1. **체형 진단** — 홈에서 **체형 진단 시작하기**를 누릅니다. 다섯 문항에 한 번에 하나씩 답하며 진행률을 확인합니다. 응답의 체형별 점수를 합산해 최고점 체형의 이미지와 추천 핏을 표시합니다. 동점일 때는 원본의 체형 순서에서 앞선 체형이 선택됩니다. **다시 진단하기**를 누르면 응답을 초기화합니다.
2. **가이드 이동** — 결과에서 **Guide에서 자세히 보기**를 누르면 해당 체형 카드로 이동합니다. 체형을 알고 있다면 홈의 **Start Guide**로 체형 선택 영역을 연 뒤 원하는 카드를 선택해도 됩니다.
3. **핏 비교** — 가이드의 여섯 카드에서 **비추천 핏 보기**와 **추천 핏 보기**를 눌러 두 설명을 비교합니다. 버튼을 누른 카드만 전환됩니다.
4. **즐겨찾기** — 카드의 하트를 눌러 추가하거나 해제하고 상단의 개수를 확인합니다. 같은 브라우저에서 같은 주소로 새로고침하면 저장된 하트 표시와 개수가 복원됩니다.

## React 구현 구조

React 19와 Create React App을 사용합니다. `App`은 주소의 해시(`#` 뒤 부분)가 바뀔 때 화면을 전환합니다. 가이드 주소에 체형 ID가 함께 있으면 해당 카드로 이동합니다. 예를 들어 [삼각형 카드 주소](http://localhost:3000/#/fit-finder/guide?type=triangle)를 직접 열 수 있습니다.

| 파일 | 역할 |
| --- | --- |
| [`src/App.js`](../App.js) | 기존 수업 실습과 FIT FINDER를 주소에 따라 표시합니다. |
| [`FitFinderApp.jsx`](./FitFinderApp.jsx) | 홈과 가이드의 공통 메뉴를 한 곳에서 정의하고, 지정한 체형 카드에 초점을 옮겨 스크롤합니다. |
| [`HomePage.jsx`](./HomePage.jsx) | `useState`로 퀴즈 응답을 관리하며 문항, 진행률, 진단 결과를 표시합니다. |
| [`GuidePage.jsx`](./GuidePage.jsx) | `bodyTypes.map()`으로 `GuideCard`를 여섯 번 렌더링합니다. 카드마다 체형 데이터와 즐겨찾기 상태를 props로 전달합니다. 각 카드는 핏 전환을 자체 상태로 관리하고, 가이드는 즐겨찾기 목록을 `localStorage`의 `fitfinder_favorites`에 체형 ID 배열로 저장합니다. |
| [`bodyTypes.js`](./bodyTypes.js), [`quizQuestions.js`](./quizQuestions.js) | 홈의 체형 선택, 퀴즈 결과, 가이드에서 체형 정보를 공유합니다. 퀴즈 문항과 배점은 별도 데이터로 관리합니다. |
| [`routes.js`](./routes.js) | 홈의 체형 선택과 퀴즈 결과에서 공통 함수 `guideCardLink(id)`로 가이드 링크를 생성합니다. |

## 검증

```powershell
npm.cmd test -- --watchAll=false --runInBand
npm.cmd run build
```

- 자동 테스트는 기본 주소의 수업 실습에서 숙소 카드 7개가 렌더링되고, 카드별 찜 상태가 독립적으로 전환되는지 확인합니다.
- 과제 검증에서는 원본과 React의 점수 계산 로직에 1,024개 응답 조합을 적용하였습니다. 최고점이 같은 310개 조합을 포함해 모든 결과 체형이 일치하였습니다.
- 퀴즈 진행, 결과에서 가이드 카드로 이동, 카드별 핏 전환과 즐겨찾기 복원은 위의 **기능 확인 순서**로 브라우저에서 확인할 수 있습니다.
