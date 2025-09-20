// 파일 다운로드 함수
function downloadFile(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // 다운로드 통계 (Google Analytics 등을 사용하는 경우)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
            'event_category': 'Music',
            'event_label': fileName
        });
    }
    
    console.log(`다운로드 시작: ${fileName}`);
}

// Plyr 플레이어 초기화
document.addEventListener('DOMContentLoaded', function() {
    // Plyr 설정 옵션
    const plyrOptions = {
        controls: [
            'play-large',    // 중앙 재생 버튼
            'play',          // 재생/일시정지
            'progress',      // 프로그레스바
            'current-time',  // 현재 시간
            'duration',      // 전체 시간
            'mute',          // 음소거
            'volume'         // 볼륨 (설정 버튼 제거)
        ],
        settings: [],        // 설정 메뉴 비활성화
        speed: { selected: 1, options: [1] }, // 속도 옵션 비활성화
        keyboard: { focused: true, global: false },
        tooltips: { controls: false, seek: true }
    };
    
    // 모든 오디오 플레이어 선택 - 커스텀 설정 적용
    const players = Array.from(document.querySelectorAll('audio')).map(p => new Plyr(p, plyrOptions));

    // 현재 재생 중인 플레이어 추적
    let currentPlayer = null;

    // 한 번에 하나의 플레이어만 재생되도록 설정
    players.forEach(player => {
        player.on('play', event => {
            // 다른 모든 플레이어 일시정지
            players.forEach(otherPlayer => {
                if (otherPlayer !== player && otherPlayer.playing) {
                    otherPlayer.pause();
                }
            });
            currentPlayer = player;
        });

        // 플레이어 종료 시 처리
        player.on('ended', event => {
            currentPlayer = null;
        });
    });

    // 스페이스바로 재생/일시정지 제어
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && currentPlayer) {
            e.preventDefault();
            if (currentPlayer.playing) {
                currentPlayer.pause();
            } else {
                currentPlayer.play();
            }
        }
    });

    // 페이지 로드 애니메이션
    animateOnLoad();
});

// 페이지 로드 시 애니메이션
function animateOnLoad() {
    const cards = document.querySelectorAll('.music-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 비디오 배경 처리
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('header video');
    
    if (video) {
        console.log('비디오 태그 발견');
        
        // 비디오 메타데이터 로드
        video.addEventListener('loadedmetadata', function() {
            console.log('비디오 메타데이터 로드');
        });
        
        // 비디오 데이터 로드
        video.addEventListener('loadeddata', function() {
            console.log('비디오 데이터 로드 성공');
        });
        
        // 비디오 재생 시작
        video.addEventListener('play', function() {
            console.log('비디오 재생 시작');
        });
        
        // 에러 처리
        video.addEventListener('error', function(e) {
            console.error('비디오 에러:', e);
            video.style.display = 'none';
        });
        
        // 강제 재생 시도
        video.load();
        video.play().catch(function(error) {
            console.log('자동 재생 실패, 클릭하여 재생:', error);
        });
    } else {
        console.log('비디오 태그를 찾을 수 없음');
    }
});

// 로고 이미지 로드 에러 처리
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.onerror = function() {
            // 로고 이미지 로드 실패 시 대체 텍스트 표시
            const logoContainer = logo.parentElement;
            const altText = document.createElement('div');
            altText.style.width = '80px';
            altText.style.height = '80px';
            altText.style.margin = '0 auto 20px';
            altText.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)';
            altText.style.borderRadius = '15px';
            altText.style.display = 'flex';
            altText.style.alignItems = 'center';
            altText.style.justifyContent = 'center';
            altText.style.color = 'white';
            altText.style.fontSize = '24px';
            altText.style.fontWeight = 'bold';
            altText.innerHTML = '애니고';
            
            logo.style.display = 'none';
            logoContainer.insertBefore(altText, logo);
        };
    }
});

// 모바일 터치 이벤트 최적화
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
}, false);

function handleSwipeGesture() {
    // 스와이프 제스처는 현재 구현하지 않음
    // 필요시 추가 기능 구현 가능
}

// 네트워크 상태 체크
window.addEventListener('online', function() {
    console.log('네트워크 연결됨');
});

window.addEventListener('offline', function() {
    console.log('네트워크 연결 끊김');
    alert('네트워크 연결이 끊어졌습니다. 일부 기능이 제한될 수 있습니다.');
});