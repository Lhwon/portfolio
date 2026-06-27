# Developer Portfolio

Vue 3, TypeScript, Vite, Vuetify 기반의 정적 개발자 포트폴리오입니다. 백엔드 서버나 외부 연동 없이 `src/data` 아래 정적 데이터만으로 화면을 구성하며, GitHub Pages 또는 일반 정적 호스팅에 배포할 수 있습니다.

## 기술 스택

- Vue 3 Composition API
- TypeScript
- Vite
- Vuetify
- 정적 데이터 기반 포트폴리오 구성

## 설치

```bash
npm install
```

## 로컬 실행

```bash
npm run dev
```

기본 주소는 Vite가 터미널에 표시하는 `http://localhost:5173/` 입니다.

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

## 문서 파일 경로

PDF 버튼은 아래 경로를 기준으로 연결됩니다.

- 이력서: `public/files/resume.pdf`
- 경력기술서: `public/files/career-description.pdf`

파일이 준비되면 같은 이름으로 `public/files` 폴더에 넣으면 됩니다.

## 프로필 이미지 경로

프로필 이미지는 `src/assets/profile/profile-me.png`를 사용합니다. 다른 이미지를 사용할 경우 `src/assets/profile` 아래에 파일을 추가하고 `src/data/profile.ts`에서 import 경로를 변경합니다.

## 프로젝트 이미지 경로

프로젝트 이미지는 `public/projects` 폴더에 넣고 `src/data/projects.ts`에서 아래 선택 필드를 지정하면 됩니다.

```ts
{
  thumbnailUrl: `${import.meta.env.BASE_URL}projects/sample-thumb.png`,
  detailImageUrl: `${import.meta.env.BASE_URL}projects/sample-detail.png`,
  imageAlt: '프로젝트 화면 예시',
}
```

이미지 필드를 비워두면 카드와 상세 팝업에 자리 표시 영역이 표시됩니다.

## GitHub Pages 배포와 base 설정

`vite.config.ts`는 `VITE_BASE_PATH` 환경 변수를 우선 사용하고, 없으면 `GITHUB_PAGES=true`일 때 일반 저장소 배포용 경로를 사용합니다.

### `username.github.io` 저장소에 배포하는 경우

루트 도메인에 배포되므로 base는 `/`가 맞습니다.

```bash
VITE_BASE_PATH=/ npm run build
```

### 일반 저장소에 배포하는 경우

예를 들어 저장소명이 `portfolio`라면 base는 `/portfolio/`가 필요합니다.

```bash
VITE_BASE_PATH=/portfolio/ npm run build
```

저장소명을 바꾸면 `vite.config.ts`의 `repositoryName` 값을 수정하거나, 배포 명령에서 `VITE_BASE_PATH`를 지정하세요.

## GitHub Actions 배포

`.github/workflows/deploy.yml` 파일이 포함되어 있습니다. GitHub 저장소의 `Settings > Pages`에서 Source를 `GitHub Actions`로 선택하면 `main` 브랜치에 push될 때 자동 배포할 수 있습니다.

프로젝트 저장소명이 `portfolio`가 아니라면 워크플로의 `VITE_BASE_PATH` 값을 저장소명에 맞게 변경하세요.
