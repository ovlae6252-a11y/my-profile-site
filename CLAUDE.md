# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🌍 언어 및 커뮤니케이션 규칙

### 기본 설정
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

모든 사용자 커뮤니케이션, 에러 메시지, 문서는 한국어로 작성합니다.

---

## 📋 프로젝트 개요

**오블레(Ovlae) 프로필 웹사이트** - 현대적이고 깔끔한 디자인의 단일 페이지 프로필 웹사이트

### 핵심 정보
- **이름**: 오블레 (Ovlae)
- **역할**: 1인 기업 대표 지망 직장인
- **비전**: AI 직원들과 함께하는 1인 기업 제국 구축
- **연락처**: ovlae6252@gmail.com

---

## 🏗️ 프로젝트 구조 및 아키텍처

### 파일 구조
```
my-profile-site/
├── index.html          # 메인 HTML 파일 (단일 페이지 애플리케이션)
├── css/
│   └── custom.css      # 커스텀 CSS (애니메이션, 폰트 설정)
├── js/
│   └── main.js         # JavaScript 인터랙션 및 기능
├── assets/
│   └── images/         # 프로젝트 이미지 (향후 추가)
└── CLAUDE.md           # 이 파일
```

### 기술 스택
- **마크업**: HTML5 (시맨틱 태그)
- **스타일**: Tailwind CSS CDN v3 (빌드 프로세스 없음)
- **폰트**: Noto Sans KR (Google Fonts - 한글 최적화)
- **JavaScript**: Vanilla JS (프레임워크 미사용)
- **배포**: 정적 파일 (번들링 불필요)

### 아키텍처 원칙
- **단일 페이지**: 모든 콘텐츠가 index.html에 포함
- **CDN 의존성**: 빌드 프로세스 없음 (CDN으로 모든 의존성 관리)
- **순수 JavaScript**: 프레임워크 미사용으로 최소 번들 크기 유지
- **모바일 우선**: Tailwind의 반응형 유틸리티 사용

---

## 📄 주요 구성 요소

### 1. index.html - 메인 구조
**7개의 주요 섹션**:
1. **Navigation Bar** - 스티키 헤더 (스크롤 시 배경 추가)
2. **Hero Section** (`#hero`) - 전체 화면, 그라데이션 배경, CTA 버튼
3. **About Section** (`#about`) - 비전 소개, 2단/1단 레이아웃
4. **Skills Section** (`#skills`) - 기술 스택 카드 (HTML, CSS, JavaScript)
5. **Projects Section** (`#projects`) - 향후 프로젝트 플레이스홀더
6. **Contact Section** (`#contact`) - 이메일, 복사 버튼
7. **Footer** - 저작권 정보

**CDN 링크**:
- `https://cdn.tailwindcss.com` - Tailwind CSS
- `https://fonts.googleapis.com/css2?family=Noto+Sans+KR` - Google Fonts

### 2. css/custom.css - 커스텀 스타일
**포함된 요소**:
- **Noto Sans KR 폰트 적용**: 모든 요소에 `font-family: 'Noto Sans KR'`
- **애니메이션 키프레임**:
  - `@keyframes fadeIn` - 0.6s 페이드인 + 상향 이동
  - `@keyframes float` - 3s 무한 플로팅 (CTA 버튼용)
  - `@keyframes slideInLeft/Right` - 좌우 슬라이드인 (토스트용)
- **유틸리티 클래스**:
  - `.gradient-text` - 파란색→인디고→보라색 그라데이션
  - `.animate-fade-in`, `.animate-float` 등
- **네비게이션 상태**: `#navbar.scrolled` - 스크롤 시 배경/그림자 추가
- **접근성**: 포커스 아웃라인, 링크 언더라인 호버 효과

### 3. js/main.js - 인터랙션 및 기능
**주요 기능**:

#### 스크롤 네비게이션
- `updateActiveSection()` - 현재 섹션에 따라 네비게이션 링크 강조
- 스크롤 임계값: 50px (navbar 배경 추가)

#### 모바일 메뉴
- `menuBtn` 클릭으로 `#mobile-menu` 토글
- 외부 클릭 또는 링크 클릭 시 자동 닫힘
- ESC 키 지원

#### 부드러운 스크롤
- 모든 `a[href^="#"]` 링크에 스무스 스크롤 적용
- 앵커 링크 클릭 시 해당 섹션으로 이동

#### 이메일 복사
- `#email-copy` 버튼 클릭 시 `ovlae6252@gmail.com` 클립보드 복사
- Clipboard API 사용 (폴백: `execCommand` 지원)
- `#copy-toast` 2초 표시

#### 스크롤 애니메이션
- **Intersection Observer**: 섹션이 뷰포트에 진입할 때 `fade-in-on-scroll` 적용
- 임계값: 10%, 마진: `0px 0px -100px 0px`

#### 백투탑 버튼
- 스크롤 300px 이상일 때 표시
- 클릭 시 스무스 스크롤로 상단 이동

---

## 🎨 디자인 시스템

### 색상 팔레트
| 용도 | Tailwind 클래스 | 사용처 |
|------|-----------------|--------|
| 배경 | `bg-gray-50` | 페이지 기본 배경 |
| 카드 | `bg-white` | 섹션 배경, 카드 |
| 주요 액센트 | `blue-600` / `indigo-600` | 버튼, 링크, 강조 |
| 텍스트 | `text-gray-900` (제목), `text-gray-600` (본문) | 텍스트 |

### 타이포그래피
- **폰트**: Noto Sans KR (300, 400, 500, 700, 900 가중치)
- **H1** (히어로): `text-5xl sm:text-6xl md:text-7xl font-bold`
- **H2** (섹션): `text-3xl md:text-4xl font-bold`
- **본문**: `text-base md:text-lg text-gray-600`

### 레이아웃 컨테이너
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### 반응형 브레이크포인트 (Tailwind)
| 브레이크포인트 | 화면 크기 | 사용 사례 |
|---|---|---|
| 기본 | < 640px | 모바일 |
| `sm` | ≥ 640px | 큰 모바일 |
| `md` | ≥ 768px | 태블릿 |
| `lg` | ≥ 1024px | 데스크톱 |

---

## 🚀 개발 워크플로우

### 웹사이트 실행
브라우저에서 `index.html`을 직접 열면 됩니다. 빌드 프로세스 불필요.

```bash
# Windows
start "C:\ovlae\workspace\my-profile-site\index.html"

# Mac/Linux
open /path/to/my-profile-site/index.html
```

### 수정 사항 확인
1. `index.html`, `css/custom.css`, `js/main.js` 중 하나 수정
2. 브라우저 새로고침 (Ctrl+F5 또는 Cmd+Shift+R로 캐시 클리어)
3. DevTools로 확인 (F12)

### 반응형 테스트
- Chrome/Edge DevTools 반응형 모드 (Ctrl+Shift+M)
- 테스트 크기: 320px, 768px, 1024px

---

## ✏️ 일반적인 수정 작업

### 섹션 추가
1. `index.html`의 `<main>` 태그 내에 새 `<section id="section-id">`
2. `#navbar` 내 네비게이션 링크 추가
3. JavaScript에서 자동으로 스크롤/하이라이트 작동

### 프로젝트 추가
- **프로젝트 섹션** 내 카드 템플릿 복제
- 이미지 URL, 제목, 설명, 태그, 링크 수정

### 색상 변경
- Tailwind 클래스 직접 수정
  - 예: `blue-600` → `green-600`
  - 모든 Tailwind 색상 지원: https://tailwindcss.com/docs/customizing-colors

### 애니메이션 수정
- `css/custom.css`의 `@keyframes` 수정
- 또는 Tailwind 지원 애니메이션 사용:
  - `animate-bounce`, `animate-pulse` 등
  - Tailwind 공식 문서: https://tailwindcss.com/docs/animation

---

## 🧪 테스트 및 디버깅

### 브라우저 개발자 도구
```bash
# 모든 브라우저에서 F12로 열기
F12 또는 Ctrl+Shift+I (Windows/Linux)
Cmd+Option+I (Mac)
```

### 주요 확인 사항
- ✅ 모든 네비게이션 링크 작동
- ✅ 모바일/태블릿/데스크톱에서 레이아웃 확인
- ✅ 한글 텍스트 렌더링 (Noto Sans KR 로드 확인)
- ✅ 애니메이션 부드러운 실행
- ✅ 이메일 복사 기능 작동

### 콘솔 메시지
```javascript
// main.js에서 자동 출력되는 환영 메시지
오블레(Ovlae)에 오신 것을 환영합니다! 🚀
```

---

## 📝 코드 주석 규칙

### HTML 주석
```html
<!-- 섹션 설명 -->
<!-- 주요 기능 설명 -->
```

### CSS 주석
```css
/* 기능 구분선 */
/* ============================================
   기능 이름
   ============================================ */

/* 간단한 설명 */
```

### JavaScript 주석
```javascript
// ============================================
// 기능 이름
// ============================================

// 각 함수에 기능 설명 추가
// 복잡한 로직에 단계별 설명 추가
```

---

## 🔗 유용한 리소스

### 공식 문서
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Noto Sans KR - Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+KR)
- [HTML5 시맨틱 요소](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [JavaScript Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

### 색상 선택
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Color Hunt](https://colorhunt.co/)

### 아이콘 및 이모지
- 현재 텍스트 기반 이모지 사용 (🚀, 🌐, 🎨, ⚡ 등)
- SVG 아이콘 추가 시 `<svg>` 태그 활용

---

## 🎯 향후 개선 방향 (선택사항)

- **다크 모드**: Tailwind의 `dark:` 접두사 활용
- **다국어 지원**: 추가 언어 섹션 구성
- **블로그**: 추가 HTML 파일 또는 정적 블로그 생성기
- **연락처 폼**: EmailJS나 Formspree 백엔드 연동
- **이미지 최적화**: WebP 형식, 지연 로딩
- **성능 모니터링**: Google PageSpeed Insights 활용

---

## 📋 체크리스트

새 작업 시작 전:
- [ ] 최신 파일 구조 확인
- [ ] Tailwind CDN 링크 유효성 확인
- [ ] Google Fonts 로딩 확인
- [ ] JavaScript 콘솔 에러 없음
- [ ] 다양한 화면 크기에서 테스트

---

**마지막 업데이트**: 2026년 2월 5일
