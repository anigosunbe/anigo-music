# 애니고 교가 편곡 프로젝트

한국애니메이션고등학교 교가를 다양한 스타일로 편곡한 음원을 소개하는 랜딩페이지입니다.

## 프로젝트 구조

```
anigo2/
│
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 스타일시트
├── js/
│   └── main.js        # JavaScript 파일
├── music/             # 음악 파일 폴더
│   ├── korea_animation_highschool.mp3
│   ├── korea_animation_highschool_simple.mp3
│   ├── korea_animation_highschool_final.mp3
│   ├── korea_animation_highschool_final2.mp3
│   ├── korea_animation_highschool_classic.mp3
│   └── korea_animation_highschool_classic2.mp3
├── images/            # 이미지 폴더
│   └── logo_s.png     # 게임제작과 로고
└── README.md          # 프로젝트 설명 문서
```

## 사용 방법

1. 모든 파일을 웹 서버에 업로드합니다.
2. `music/` 폴더에 mp3 파일들을 넣습니다.
3. `images/` 폴더에 logo_s.png 파일을 넣습니다.
4. 웹 브라우저에서 index.html을 열어 확인합니다.

## 기능

- 6가지 다른 스타일의 교가 편곡 버전
- Plyr 오디오 플레이어를 사용한 고급 재생 기능
- 반응형 디자인 (모바일, 태블릿, 데스크탑 지원)
- 한 번에 하나의 음악만 재생
- 스페이스바로 재생/일시정지 제어

## 기술 스택

- HTML5
- CSS3 (반응형 그리드 레이아웃)
- JavaScript (ES6+)
- Plyr.js (오디오 플레이어 라이브러리)
- Pretendard 폰트

## 라이선스

MIT License

Copyright (c) 2024 애니고선배

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 제작자

애니고선배

## GitHub Pages 배포 방법

1. GitHub에 새 레포지토리 생성
2. 모든 파일을 레포지토리에 업로드
3. Settings > Pages에서 GitHub Pages 활성화
4. Source를 "Deploy from a branch"로 설정
5. Branch를 main (또는 master)으로 선택
6. 배포 완료 후 생성된 URL로 접속

## 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)