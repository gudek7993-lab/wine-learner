import { Region } from '../types';

export const usaRegions: Region[] = [
  {
    id: 'usa',
    nameKo: '미국',
    nameEn: 'USA',
    parentId: null,
    children: ['usa-napa', 'usa-sonoma', 'usa-central-coast', 'usa-oregon', 'usa-washington', 'usa-new-york'],
    level: 'country',
    summary: '캘리포니아가 생산량의 대부분을 차지하며, 나파 밸리의 카베르네 소비뇽, 소노마와 오리건의 피노 누아, 워싱턴의 건조한 내륙 레드, 뉴욕 핑거 레이크스의 리슬링까지 다양한 스타일을 생산한다.',
    climate: {
      type: ['지중해성(캘리포니아)', '서늘한 해양성(오리건)', '건조한 대륙성(워싱턴 동부)', '대륙성(뉴욕)'],
      description: '캘리포니아 해안 지역은 따뜻하고 건조한 지중해성 기후이며, 차가운 캘리포니아 해류 위의 태평양에서 생기는 안개와 해풍이 계곡을 따라 들어와 기온을 낮춘다. 바다와의 거리와 해안 산맥의 틈(gap)이 지역별 기후를 결정한다. 오리건은 서늘하고 습하며, 워싱턴 동부는 캐스케이드 산맥의 비그늘로 사막에 가깝다.',
      influencingFactors: ['차가운 캘리포니아 해류', '태평양의 안개와 해풍', '해안 산맥과 틈(gap)', '캐스케이드 산맥의 비그늘(워싱턴)', '오대호와 핑거 레이크스(뉴욕)'],
    },
    soils: [
      { type: ['충적토', '화산성 토양', '사암'], description: '나파와 소노마는 충적 선상지, 화산성 토양 등 매우 다양하다.' },
      { type: ['조리(Jory) 화산성 토양', '해양 퇴적토', '뢰스'], description: '오리건 윌라멧 밸리의 붉은 화산성 조리 토양과 해양 퇴적토, 워싱턴의 빙하기 대홍수가 남긴 모래와 뢰스.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '나파 밸리의 상징. 소노마 알렉산더 밸리, 워싱턴, 파소 로블스에서도 중요.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '미국에서 가장 많이 재배되는 화이트. 풍만한 오크와 말로락틱 스타일부터 절제된 스타일까지.' },
      { grapeId: 'pinot-noir', role: 'primary', notes: '소노마(러시안 리버 밸리, 소노마 코스트), 카르네로스, 산타 바바라, 오리건 윌라멧 밸리.' },
      { grapeId: 'merlot', role: 'secondary', notes: '나파, 워싱턴, 롱아일랜드.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '워싱턴, 센트럴 코스트(파소 로블스, 산타 바바라).' },
      { grapeId: 'sauvignon-blanc', role: 'secondary', notes: '나파와 소노마. 오크 숙성한 스타일은 퓌메 블랑(Fumé Blanc)이라고도 부른다.' },
      { grapeId: 'riesling', role: 'secondary', notes: '워싱턴과 뉴욕 핑거 레이크스.' },
      { grapeId: 'pinot-grigio-gris', role: 'secondary', notes: '오리건의 대표 화이트(피노 그리).' },
      { grapeId: 'zinfandel', role: 'primary', notes: '캘리포니아의 대표 헤리티지 품종' },
    ],
    classifications: [
      {
        name: 'AVA (American Viticultural Area)',
        description: '지리적 경계만 정하는 원산지 체계. 품종, 수확량, 양조 방법은 규제하지 않는다. 큰 AVA 안에 작은 AVA가 겹쳐 존재할 수 있다(예: 노스 코스트 > 나파 밸리 > 오크빌).',
      },
      {
        name: '라벨 규정 (연방 기준)',
        description: '원산지 단위에 따라 기준이 다르다.',
        levels: [
          { name: '품종 표기', description: '최소 75%. 오리건은 대부분의 품종에 90%를 요구한다.' },
          { name: 'AVA 표기', description: '최소 85%가 해당 AVA산이어야 한다.' },
          { name: '주(State), 카운티 표기', description: '최소 75%. 캘리포니아주 표기는 100% 캘리포니아산이어야 한다.' },
          { name: '빈티지 표기', description: 'AVA 표기 시 95%, 그 외 85%.' },
        ],
      },
    ],
    wineStyles: [
      { name: '나파 카베르네 소비뇽', description: '풀바디, 높은 알코올, 잘 익은 블랙커런트와 블랙베리, 새 프렌치 오크의 바닐라와 토스트 풍미, 부드럽고 성숙한 타닌.' },
      { name: '캘리포니아 샤르도네', description: '전통적으로 말로락틱 발효와 새 오크로 버터, 바닐라 풍미의 풍만한 스타일. 최근에는 산도와 절제를 강조하는 스타일도 많다.' },
      { name: '서늘한 기후 피노 누아', description: '소노마 코스트, 러시안 리버 밸리, 산타 바바라, 오리건의 붉은 과일 중심 피노 누아.' },
      { name: '진판델', description: '이탈리아의 프리미티보와 같은 품종. 고르지 않게 익어 높은 알코올과 잼 같은 과일 풍미를 보인다. 소노마 드라이 크릭 밸리, 로다이, 파소 로블스. 블러시 스타일의 화이트 진판델도 있다.' },
    ],
    keyFacts: [
      '캘리포니아가 미국 와인 생산량의 대부분을 차지한다',
      '센트럴 밸리(Central Valley)는 덥고 건조한 관개 지역으로 대량 생산 와인의 원천이며, 로다이(Lodi)는 올드 바인 진판델로 유명하다',
      '진판델(Zinfandel)은 캘리포니아의 특징적인 품종이다',
      'AVA는 경계만 정할 뿐 품종이나 생산 방법을 규제하지 않는다',
      '1976년 파리의 심판(Judgment of Paris)에서 캘리포니아 와인이 프랑스 와인을 이기며 국제적 명성을 얻었다',
    ],
    examTips: [
      '캘리포니아 해안의 안개와 해풍이 계곡별 기후를 어떻게 결정하는지 설명할 수 있어야 한다',
      '라벨 규정 수치(품종 75%, AVA 85%, 빈티지 95%/85%, 오리건 90%)를 암기할 것',
      '워싱턴 동부가 사막에 가까운 이유(캐스케이드 산맥의 비그늘)를 기억할 것',
    ],
  },
  {
    id: 'usa-napa',
    nameKo: '나파 밸리',
    nameEn: 'Napa Valley',
    parentId: 'usa',
    children: [],
    level: 'region',
    summary: '샌프란시스코 북쪽의 좁은 계곡으로, 남쪽은 산 파블로 만의 안개로 서늘하고 북쪽은 더운 기후 차이 속에서 미국 최고 수준의 카베르네 소비뇽을 생산한다.',
    climate: {
      type: ['따뜻한 지중해성'],
      description: '여름이 따뜻하고 건조하다. 남쪽 끝은 산 파블로 만(San Pablo Bay)에서 밀려오는 안개와 서늘한 바람의 영향을 강하게 받아 서늘하고, 북쪽(칼리스토가)으로 갈수록 더워진다. 서쪽의 마야카마스 산맥과 동쪽의 바카 산맥 사이의 계곡이며, 산지 포도밭은 안개선 위에 있어 낮에 서늘하고 밤에 따뜻하다.',
      influencingFactors: ['산 파블로 만의 안개와 해풍', '남북 기온 차이', '마야카마스 산맥(서), 바카 산맥(동)', '산지의 해발고도'],
    },
    soils: [
      { type: ['충적 선상지', '자갈', '롬'], description: '계곡 바닥 서쪽의 배수가 좋은 충적 선상지(러더퍼드, 오크빌의 벤치 지대).' },
      { type: ['화산성 토양'], description: '산지(하웰 마운틴, 마운트 비더 등)와 계곡 동쪽의 척박한 화산성 토양.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '대표 품종. 단독 또는 보르도 블렌드(메리티지 Meritage)로 생산.' },
      { grapeId: 'merlot', role: 'secondary', notes: '블렌딩 및 단일 품종.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '카르네로스 등 서늘한 남쪽.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary', notes: '스테인리스 스틸 또는 오크 숙성 스타일.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '로스 카르네로스(Los Carneros)의 서늘한 기후에서 스틸과 스파클링용.' },
    ],
    classifications: [
      {
        name: '나파 밸리의 하위 AVA',
        description: '나파 밸리 AVA 안에 다수의 하위 AVA가 있다.',
        levels: [
          { name: '로스 카르네로스 (Los Carneros)', description: '남쪽 끝, 소노마와 공유. 산 파블로 만의 영향으로 가장 서늘하다. 피노 누아, 샤르도네, 스파클링.' },
          { name: '오크빌, 러더퍼드 (Oakville, Rutherford)', description: '계곡 중앙의 핵심 카베르네 산지. 러더퍼드는 "러더퍼드 더스트"라 불리는 흙먼지 풍미로 알려져 있다.' },
          { name: '스태그스 립 디스트릭트 (Stags Leap District)', description: '부드러운 타닌의 우아한 카베르네.' },
          { name: '하웰 마운틴 (Howell Mountain)', description: '동쪽 산지. 안개선 위의 화산성 토양에서 구조감 있는 카베르네.' },
          { name: '칼리스토가 (Calistoga)', description: '북쪽 끝, 가장 더운 지역.' },
        ],
      },
    ],
    wineStyles: [
      { name: '나파 카베르네 소비뇽', description: '풀바디, 높은 알코올, 잘 익은 블랙커런트와 블랙베리, 새 프렌치 오크 숙성, 부드러운 타닌. 고가의 컬트 와인도 많다.' },
      { name: '카르네로스 샤르도네, 피노 누아, 스파클링', description: '서늘한 남쪽의 높은 산도 스타일.' },
    ],
    keyFacts: [
      '미국 생산량에서 차지하는 비중은 작지만 가장 유명하고 비싼 산지이다',
      '계곡 바닥은 남쪽이 서늘하고 북쪽이 덥다',
      '로스 카르네로스는 나파와 소노마에 걸쳐 있다',
    ],
    examTips: [
      '산 파블로 만의 안개가 남쪽을 서늘하게 하는 원리와 그에 따른 품종 배치를 설명할 것',
      '산지 포도밭(안개선 위)과 계곡 바닥 포도밭의 차이를 비교할 수 있어야 한다',
    ],
  },
  {
    id: 'usa-sonoma',
    nameKo: '소노마 카운티',
    nameEn: 'Sonoma County',
    parentId: 'usa',
    children: [],
    level: 'region',
    summary: '나파 서쪽, 태평양과 맞닿은 넓은 카운티로, 안개 낀 서늘한 러시안 리버 밸리와 소노마 코스트의 피노 누아와 샤르도네, 따뜻한 드라이 크릭 밸리의 진판델과 알렉산더 밸리의 카베르네 소비뇽까지 다양하다.',
    climate: {
      type: ['지중해성', '서늘한 해양성(해안)'],
      description: '나파보다 바다에 가깝고 넓어 기후 차이가 크다. 태평양의 안개가 러시안 리버와 페탈루마 갭(Petaluma Gap)을 통해 내륙으로 들어와 서쪽과 남쪽을 서늘하게 한다. 북쪽 내륙의 계곡은 따뜻하다.',
      influencingFactors: ['태평양의 안개', '러시안 리버', '페탈루마 갭', '해안 산맥'],
    },
    soils: [
      { type: ['골드리지(Goldridge) 사질 롬', '충적토', '화산성 토양'], description: '러시안 리버 밸리의 배수가 좋은 사질 토양 등 다양하다.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '러시안 리버 밸리, 소노마 코스트.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '러시안 리버 밸리, 소노마 코스트.' },
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '알렉산더 밸리 등 따뜻한 내륙.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary' },
      { grapeId: 'merlot', role: 'secondary' },
      { grapeId: 'zinfandel', role: 'primary', notes: '드라이 크릭 밸리 올드 바인' },
    ],
    classifications: [
      {
        name: '소노마의 주요 AVA',
        description: '기후가 서로 다른 여러 AVA가 있다.',
        levels: [
          { name: '러시안 리버 밸리 (Russian River Valley)', description: '아침 안개로 서늘하다. 피노 누아, 샤르도네.' },
          { name: '소노마 코스트 (Sonoma Coast)', description: '태평양 연안의 서늘한 지역. 섬세한 피노 누아와 샤르도네.' },
          { name: '드라이 크릭 밸리 (Dry Creek Valley)', description: '따뜻한 지역. 진판델로 유명.' },
          { name: '알렉산더 밸리 (Alexander Valley)', description: '따뜻한 북쪽 내륙. 부드러운 카베르네 소비뇽.' },
        ],
      },
    ],
    wineStyles: [
      { name: '러시안 리버 피노 누아', description: '잘 익은 붉은 과일, 높은 산도, 오크 숙성.' },
      { name: '드라이 크릭 진판델', description: '잘 익은 블랙베리, 향신료, 높은 알코올.' },
      { name: '알렉산더 밸리 카베르네', description: '나파보다 부드럽고 과일 중심.' },
    ],
    keyFacts: [
      '로스 카르네로스 AVA는 나파와 공유한다',
      '같은 카운티 안에 서늘한 피노 누아 산지와 따뜻한 진판델, 카베르네 산지가 공존한다',
    ],
    examTips: [
      '소노마 하위 AVA별 기후와 대표 품종을 짝지어 기억할 것',
    ],
  },
  {
    id: 'usa-central-coast',
    nameKo: '센트럴 코스트',
    nameEn: 'Central Coast',
    parentId: 'usa',
    children: [],
    level: 'region',
    summary: '샌프란시스코 남쪽에서 산타 바바라까지 이어지는 광대한 AVA로, 동서로 열린 계곡을 통해 바닷바람이 들어오는 서늘한 산타 바바라와 몬터레이, 따뜻한 파소 로블스를 포함한다.',
    climate: {
      type: ['지중해성', '서늘한 해양성(해안 계곡)'],
      description: '산타 바바라 카운티는 계곡이 동서 방향으로 열려 있어 태평양의 차가운 공기와 안개가 내륙 깊숙이 들어와 매우 서늘하다. 몬터레이도 몬터레이 만의 영향으로 서늘하고 바람이 강하다. 반면 내륙의 파소 로블스는 낮에 덥고 밤에 서늘하다.',
      influencingFactors: ['동서 방향으로 열린 계곡(산타 바바라)', '태평양의 안개와 해풍', '몬터레이 만', '파소 로블스의 큰 일교차'],
    },
    soils: [
      { type: ['사질토', '석회질 토양', '충적토'], description: '지역별로 다양하다. 파소 로블스 서쪽에는 석회질 토양이 있다.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '산타 리타 힐스(Sta. Rita Hills), 산타 마리아 밸리, 몬터레이.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '몬터레이, 산타 바바라.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '파소 로블스, 산타 바바라의 론 스타일.' },
      { grapeId: 'grenache', role: 'secondary', notes: '파소 로블스의 론 블렌드.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '파소 로블스.' },
      { grapeId: 'zinfandel', role: 'secondary', notes: '파소 로블레스' },
    ],
    classifications: [
      {
        name: '주요 하위 지역',
        description: '센트럴 코스트 AVA 내 주요 지역.',
        levels: [
          { name: '산타 바바라 카운티 (산타 리타 힐스, 산타 마리아 밸리)', description: '동서로 열린 계곡 덕분에 매우 서늘하다. 피노 누아, 샤르도네.' },
          { name: '몬터레이 (Monterey)', description: '서늘하고 바람이 강하다. 샤르도네, 피노 누아.' },
          { name: '파소 로블스 (Paso Robles)', description: '따뜻한 내륙. 카베르네 소비뇽, 진판델, 론 품종.' },
        ],
      },
    ],
    wineStyles: [
      { name: '산타 바바라 피노 누아', description: '높은 산도와 선명한 붉은 과일.' },
      { name: '파소 로블스 레드', description: '잘 익은 과일의 카베르네 소비뇽, 진판델, 론 스타일 블렌드.' },
    ],
    keyFacts: [
      '산타 바바라의 동서 방향 계곡은 캘리포니아 해안에서 드문 지형으로, 서늘한 공기가 깊숙이 들어온다',
    ],
    examTips: [
      '계곡의 방향(동서)이 해양 영향을 어떻게 키우는지 설명할 수 있어야 한다',
    ],
  },
  {
    id: 'usa-oregon',
    nameKo: '오리건',
    nameEn: 'Oregon (Willamette Valley)',
    parentId: 'usa',
    children: [],
    level: 'region',
    summary: '캘리포니아 북쪽의 서늘하고 습한 주로, 윌라멧 밸리에서 부르고뉴와 비교되는 우아한 피노 누아와 피노 그리, 샤르도네를 생산한다.',
    climate: {
      type: ['서늘한 해양성'],
      description: '해안 산맥(Coast Range)이 태평양의 비와 차가운 바람을 어느 정도 막아주지만, 캘리포니아보다 서늘하고 비가 많다. 여름은 따뜻하고 건조하나 가을 수확기 비와 빈티지 편차가 위험 요소이다. 반 듀저 회랑(Van Duzer Corridor)을 통해 서늘한 해풍이 들어온다.',
      influencingFactors: ['해안 산맥(비와 바람 차단)', '태평양의 해양 영향', '반 듀저 회랑의 해풍', '가을 수확기 비', '빈티지 편차'],
    },
    soils: [
      { type: ['조리(Jory) 화산성 토양'], description: '던디 힐스(Dundee Hills)의 붉은 화산성 점토. 배수가 좋다.' },
      { type: ['해양 퇴적토', '뢰스'], description: '야멜-칼튼 등의 해양 퇴적 사암 토양과 바람에 쌓인 뢰스.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '대표 품종. 윌라멧 밸리가 중심.' },
      { grapeId: 'pinot-grigio-gris', role: 'primary', notes: '피노 그리. 오리건의 대표 화이트.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '날렵하고 산도 높은 스타일로 주목받고 있다.' },
      { grapeId: 'syrah-shiraz', role: 'permitted', notes: '남부 오리건(로그 밸리 등)의 따뜻한 지역.' },
    ],
    classifications: [
      { name: '윌라멧 밸리 AVA', description: '오리건 피노 누아의 중심. 던디 힐스, 야멜-칼튼, 에올라-아미티 힐스 등 하위 AVA가 있다.' },
      { name: '오리건 라벨 규정', description: '품종 표기 시 대부분의 품종에 최소 90%를 요구하여 연방 기준(75%)보다 엄격하다.' },
    ],
    wineStyles: [
      { name: '윌라멧 밸리 피노 누아', description: '라이트-미디엄 바디, 높은 산도, 체리와 라즈베리, 흙과 버섯 풍미. 캘리포니아보다 섬세하고 부르고뉴와 비교된다.' },
      { name: '피노 그리', description: '배와 사과, 핵과류 풍미의 미디엄 바디 드라이 화이트.' },
    ],
    keyFacts: [
      '1960년대에 개척자들이 피노 누아를 심으며 본격적인 산업이 시작되었다',
      '부르고뉴의 생산자들도 투자한 산지이다',
      '대부분 중소 규모의 가족 경영 와이너리이다',
    ],
    examTips: [
      '오리건의 품종 표기 90% 규정을 연방 기준 75%와 비교해 기억할 것',
      '해안 산맥과 반 듀저 회랑이 기후에 미치는 영향을 설명할 것',
    ],
  },
  {
    id: 'usa-washington',
    nameKo: '워싱턴',
    nameEn: 'Washington State',
    parentId: 'usa',
    children: [],
    level: 'region',
    summary: '캐스케이드 산맥 동쪽의 사막에 가까운 건조한 대륙성 지역으로, 관개와 긴 일조 시간 덕분에 산도가 좋은 카베르네 소비뇽, 메를로, 시라와 리슬링을 생산한다.',
    climate: {
      type: ['건조한 대륙성'],
      description: '포도밭 대부분이 캐스케이드 산맥 동쪽의 비그늘에 있어 강수량이 매우 적은 반사막 기후이므로 콜럼비아 강 등에서 관개해야 한다. 북쪽 위도로 여름 일조 시간이 길고 낮은 덥고 밤은 서늘해 큰 일교차가 산도를 유지한다. 겨울 혹한(동해)이 위험 요소이다.',
      influencingFactors: ['캐스케이드 산맥의 비그늘', '관개(콜럼비아 강)', '높은 위도의 긴 일조 시간', '큰 일교차', '겨울 혹한'],
    },
    soils: [
      { type: ['모래', '뢰스', '실트'], description: '빙하기 말 미줄라 대홍수(Missoula Floods)가 남긴 모래와 실트, 바람에 쌓인 뢰스. 모래 토양 덕분에 필록세라에 강해 대부분 자근 포도나무를 심는다.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '가장 중요한 레드 품종.' },
      { grapeId: 'merlot', role: 'primary', notes: '워싱턴의 강점 품종.' },
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '왈라 왈라 등에서 고품질 시라.' },
      { grapeId: 'chardonnay', role: 'primary' },
      { grapeId: 'riesling', role: 'primary', notes: '드라이부터 스위트까지 다양한 스타일.' },
    ],
    classifications: [
      {
        name: '주요 AVA',
        description: '콜럼비아 밸리 AVA가 대부분의 포도밭을 포함하는 광역 AVA이다.',
        levels: [
          { name: '콜럼비아 밸리 (Columbia Valley)', description: '워싱턴 동부의 광역 AVA.' },
          { name: '야키마 밸리 (Yakima Valley)', description: '워싱턴 최초의 AVA.' },
          { name: '왈라 왈라 밸리 (Walla Walla Valley)', description: '오리건과 걸쳐 있는 고급 산지.' },
          { name: '레드 마운틴 (Red Mountain)', description: '덥고 건조한 작은 AVA. 구조감 있는 카베르네 소비뇽.' },
        ],
      },
    ],
    wineStyles: [
      { name: '카베르네 소비뇽, 메를로', description: '잘 익은 블랙 과일과 신선한 산도. 캘리포니아보다 산도가 높은 편.' },
      { name: '시라', description: '블랙 과일과 향신료, 일부는 고기 같은 풍미.' },
      { name: '리슬링', description: '오프 드라이부터 드라이까지, 과일 중심의 스타일.' },
    ],
    keyFacts: [
      '캘리포니아에 이어 미국 2위의 와인 생산 주이다',
      '모래 토양 덕분에 자근(own-rooted) 포도나무 재배가 가능하다',
      '많은 와이너리가 시애틀 등 서쪽에 있고 포도는 동쪽에서 운송해 온다',
    ],
    examTips: [
      '비그늘 효과로 인한 건조 기후와 관개 필요성, 겨울 혹한 위험을 함께 설명할 것',
      '같은 이름의 오리건 주와 기후가 전혀 다르다는 점(서쪽 습함 vs 동쪽 건조)을 구분할 것',
    ],
  },
  {
    id: 'usa-new-york',
    nameKo: '뉴욕',
    nameEn: 'New York (Finger Lakes)',
    parentId: 'usa',
    children: [],
    level: 'region',
    summary: '미국 동부의 추운 대륙성 산지로, 깊은 빙하호가 기온을 완화하는 핑거 레이크스의 리슬링과 해양성 롱아일랜드의 메를로가 대표적이다.',
    climate: {
      type: ['서늘한 대륙성', '해양성(롱아일랜드)'],
      description: '겨울이 매우 춥고 생장기가 짧다. 핑거 레이크스의 깊은 호수는 여름에 열을 저장했다가 가을, 겨울에 방출하여 혹한과 서리 피해를 줄이고 생장기를 연장한다. 롱아일랜드는 대서양의 영향으로 온화한 해양성이다.',
      influencingFactors: ['깊은 빙하호(핑거 레이크스)', '추운 겨울', '짧은 생장기', '대서양(롱아일랜드)'],
    },
    soils: [
      { type: ['셰일', '빙하 퇴적토'], description: '핑거 레이크스 호숫가 경사지의 셰일과 빙하 퇴적토. 배수가 좋다.' },
    ],
    grapes: [
      { grapeId: 'riesling', role: 'primary', notes: '핑거 레이크스의 대표 품종. 드라이부터 스위트까지.' },
      { grapeId: 'chardonnay', role: 'secondary' },
      { grapeId: 'pinot-noir', role: 'secondary' },
      { grapeId: 'merlot', role: 'secondary', notes: '롱아일랜드.' },
      { grapeId: 'vidal', role: 'secondary', notes: '내한성 교배종, 아이스와인과 늦수확' },
    ],
    classifications: [
      { name: '주요 AVA', description: '핑거 레이크스(Finger Lakes), 롱아일랜드(Long Island), 허드슨 리버 등.' },
    ],
    wineStyles: [
      { name: '핑거 레이크스 리슬링', description: '높은 산도, 라임과 사과, 미네랄. 드라이부터 스위트, 아이스 와인까지.' },
      { name: '롱아일랜드 레드', description: '메를로, 카베르네 프랑 중심의 보르도 스타일.' },
    ],
    keyFacts: [
      '추운 기후 때문에 전통적으로 비티스 라브루스카(콩코드 등)와 하이브리드 품종이 많이 재배되었다',
      '핑거 레이크스는 빙하가 깎아 만든 길고 깊은 호수들이 손가락처럼 늘어선 지형이다',
    ],
    examTips: [
      '깊은 호수가 기온을 완화하는 원리(열 저장과 방출)를 설명할 수 있어야 한다',
    ],
  },
];
