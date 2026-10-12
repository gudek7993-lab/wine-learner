import { Region } from '../types';

export const argentinaRegions: Region[] = [
  {
    id: 'argentina',
    nameKo: '아르헨티나',
    nameEn: 'Argentina',
    parentId: null,
    children: ['argentina-salta', 'argentina-mendoza', 'argentina-patagonia'],
    level: 'country',
    summary: '안데스 산맥 동쪽 기슭의 건조한 고지대 산지로, 높은 해발고도가 낮은 위도의 열을 식혀 진한 말벡과 아로마틱한 토론테스를 생산하는 남미 최대의 와인 생산국이다.',
    climate: {
      type: ['건조한 대륙성', '고지대 사막성'],
      description: '대부분의 포도밭은 안데스 산맥의 비그늘에 있어 매우 건조하고 일조량이 풍부하다. 위도가 낮아 원래 덥지만, 높은 해발고도가 기온을 낮추고 매우 큰 일교차를 만들어 산도와 색, 아로마를 보존한다. 강한 자외선은 껍질을 두껍게 하여 색과 타닌을 높인다. 강수량이 적어 안데스 눈 녹은 물로 관개해야 하며, 병해가 적다. 우박과 꽃 피는 시기의 존다(Zonda) 바람이 주요 위험 요소이다.',
      influencingFactors: ['높은 해발고도', '안데스 산맥의 비그늘(매우 건조)', '매우 큰 일교차', '강한 자외선', '안데스 눈 녹은 물 관개', '우박', '존다(Zonda) 바람'],
    },
    soils: [
      { type: ['충적토', '모래', '자갈'], description: '안데스에서 흘러내린 강이 만든 배수가 좋은 충적토. 척박한 자갈과 모래 토양이 많다.' },
      { type: ['석회질 자갈'], description: '우코 밸리 일부(괄탈라리 등)에는 석회 성분이 있는 자갈 토양이 있다.' },
    ],
    grapes: [
      { grapeId: 'malbec', role: 'primary', notes: '아르헨티나의 대표 품종이자 가장 많이 재배되는 고급 레드. 프랑스 카오르에서 유래.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '단독 또는 말벡과 블렌딩.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '산 후안 등 따뜻한 지역.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '파타고니아와 우코 밸리의 높은 지대.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '우코 밸리의 고지대에서 고품질.' },
      { grapeId: 'sauvignon-blanc', role: 'permitted', notes: '서늘한 고지대.' },
      { grapeId: 'torrontes', role: 'primary', notes: '아르헨티나의 대표 화이트' },
    ],
    classifications: [
      {
        name: '원산지 체계',
        description: '아르헨티나의 원산지 표기 체계.',
        levels: [
          { name: 'IP (Indicación de Procedencia)', description: '가장 기본적인 지리적 표기.' },
          { name: 'IG (Indicación Geográfica)', description: '품질이나 특성이 지리적 원산지와 관련된 지역. 대부분의 고급 와인이 사용한다(예: 파라헤 알타미라, 괄탈라리 등).' },
          { name: 'DOC (Denominación de Origen Controlada)', description: '루한 데 쿠요(Luján de Cuyo)와 산 라파엘(San Rafael) 두 곳이 있다.' },
        ],
      },
    ],
    wineStyles: [
      { name: '말벡', description: '진한 보라색, 블랙베리, 자두, 블랙체리, 제비꽃 향, 부드럽고 벨벳 같은 타닌, 미디엄-높은 산도. 과일 중심의 무오크 스타일부터 오크 숙성한 고급 스타일까지.' },
      { name: '토론테스', description: '아르헨티나 고유의 아로마틱 화이트(토론테스 리오하노 Torrontés Riojano가 가장 품질이 좋다). 장미, 복숭아, 라이치 향의 드라이 와인으로 아로마가 강하지만 산도는 중간 정도.' },
      { name: '레드 블렌드와 기타 레드', description: '말벡-카베르네 블렌드, 보나르다(Bonarda, 두 번째로 많이 재배되는 레드)의 과일 중심 와인.' },
      { name: '대량 생산 와인', description: '크리오야 그란데(Criolla Grande), 세레사(Cereza) 같은 핑크 껍질 품종으로 만든 국내 소비용 와인.' },
    ],
    keyFacts: [
      '포도밭 대부분이 해발 수백 m에서 1,500m 이상의 고지대에 있으며, 살타에는 세계에서 가장 높은 축에 드는 포도밭이 있다',
      '멘도사가 아르헨티나 와인 생산의 대부분을 차지한다',
      '우박 피해를 막기 위해 그물(hail net)을 설치하는 포도밭이 많다',
      '보나르다(Bonarda)는 두 번째로 많이 재배되는 레드 품종이다',
      '토론테스(Torrontés)는 머스캣 오브 알렉산드리아와 크리오야 치카(파이스)의 자연 교배종이다',
      '건조한 기후로 병해가 적어 포도 재배가 비교적 쉽다',
    ],
    examTips: [
      '낮은 위도의 더운 기후를 해발고도가 어떻게 완화하는지(기온, 일교차, 자외선) 서술형으로 대비할 것',
      '고도가 높을수록 말벡의 스타일이 어떻게 변하는지(더 높은 산도, 꽃 향, 신선함)를 설명할 수 있어야 한다',
      '우박과 존다 바람 같은 재배상의 위험 요소를 기억할 것',
      '토론테스의 특징(강한 아로마, 중간 산도, 살타의 고지대)이 자주 출제된다',
    ],
  },
  {
    id: 'argentina-salta',
    nameKo: '살타',
    nameEn: 'Salta (Cafayate)',
    parentId: 'argentina',
    children: [],
    level: 'region',
    summary: '아르헨티나 북서부의 칼차키 계곡에 있는 세계 최고(最高) 고도 수준의 산지로, 카파야테를 중심으로 아로마틱한 토론테스와 진하고 강렬한 말벡을 생산한다.',
    climate: {
      type: ['고지대 사막성'],
      description: '위도가 매우 낮지만 해발고도가 아주 높아(카파야테 주변 약 1,700m, 일부 포도밭은 3,000m 이상) 기온이 완화된다. 매우 강한 일조량과 자외선, 극단적인 일교차, 매우 낮은 강수량이 특징이다.',
      influencingFactors: ['매우 높은 해발고도', '극단적 일교차', '매우 강한 자외선', '낮은 위도', '매우 낮은 강수량'],
    },
    soils: [
      { type: ['모래', '자갈'], description: '척박하고 배수가 좋은 사질 충적토.' },
    ],
    grapes: [
      { grapeId: 'malbec', role: 'primary', notes: '강한 자외선으로 껍질이 두꺼워져 색과 타닌이 매우 진하다.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '진하고 구조감 있는 스타일.' },
      { grapeId: 'torrontes', role: 'primary', notes: '카파야테, 고지대' },
    ],
    classifications: [
      { name: '칼차키 계곡 (Valles Calchaquíes)', description: '살타, 투쿠만, 카타마르카에 걸친 고지대 계곡. 카파야테(Cafayate)가 중심 마을이다.' },
    ],
    wineStyles: [
      { name: '토론테스', description: '고지대에서 산도와 아로마가 보존된 드라이 화이트. 장미, 오렌지 꽃, 복숭아 향. 살타는 토론테스의 대표 산지이다.' },
      { name: '말벡, 카베르네', description: '매우 진한 색, 농축된 블랙 과일, 높은 타닌.' },
    ],
    keyFacts: [
      '세계에서 가장 높은 축에 드는 포도밭이 있다',
      '토론테스 리오하노(Torrontés Riojano)의 대표 산지이다',
    ],
    examTips: [
      '강한 자외선이 껍질 두께, 색, 타닌에 미치는 영향을 설명할 수 있어야 한다',
      '살타 = 토론테스 연결을 기억할 것',
    ],
  },
  {
    id: 'argentina-mendoza',
    nameKo: '멘도사',
    nameEn: 'Mendoza',
    parentId: 'argentina',
    children: ['argentina-uco-valley'],
    level: 'region',
    summary: '아르헨티나 와인 생산의 대부분을 차지하는 최대 산지로, 루한 데 쿠요와 마이푸의 전통적인 말벡부터 더 높은 우코 밸리의 신선하고 섬세한 고급 와인까지 생산한다.',
    climate: {
      type: ['건조한 대륙성'],
      description: '안데스의 비그늘에 있어 반사막 기후이다. 여름 낮은 덥지만 해발고도로 밤이 서늘하다. 강수량이 적어 관개가 필수이며, 우박과 존다 바람이 위험 요소이다.',
      influencingFactors: ['해발고도', '안데스의 비그늘', '큰 일교차', '관개', '우박', '존다 바람'],
    },
    soils: [
      { type: ['충적토', '자갈', '모래'], description: '멘도사 강 등이 만든 충적토. 배수가 좋고 척박하다.' },
    ],
    grapes: [
      { grapeId: 'malbec', role: 'primary', notes: '대표 품종.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '우코 밸리 고지대.' },
      { grapeId: 'syrah-shiraz', role: 'permitted' },
      { grapeId: 'torrontes', role: 'secondary', notes: '더 단순한 스타일' },
    ],
    classifications: [
      {
        name: '멘도사의 주요 하위 지역',
        description: '해발고도와 위치에 따라 스타일이 다르다.',
        levels: [
          { name: '루한 데 쿠요, 마이푸 (Luján de Cuyo, Maipú)', description: '멘도사 시 남쪽의 전통적인 고급 산지 "프리메라 소나(Primera Zona)". 올드 바인 말벡. 루한 데 쿠요는 DOC이다.' },
          { name: '우코 밸리 (Uco Valley)', description: '더 남쪽의 높은 고지대. 신선하고 우아한 고급 와인.' },
          { name: '동부, 남부 멘도사', description: '더 낮고 따뜻한 지역. 대량 생산 와인. 남부의 산 라파엘(San Rafael)은 DOC이다.' },
        ],
      },
    ],
    wineStyles: [
      { name: '루한 데 쿠요 말벡', description: '풀바디, 잘 익은 블랙 과일, 부드럽고 풍만한 타닌. 우코 밸리보다 더 풍만한 스타일.' },
      { name: '말벡 블렌드', description: '카베르네 소비뇽 등과 블렌딩한 구조감 있는 레드.' },
    ],
    keyFacts: [
      '아르헨티나 최대의 와인 산지이다',
      '루한 데 쿠요(Luján de Cuyo)는 아르헨티나 최초의 DOC이다',
      '북쪽의 산 후안(San Juan)은 더 덥고 시라로 알려져 있다',
    ],
    examTips: [
      '같은 멘도사 안에서도 고도 차이로 스타일이 달라짐을 설명할 것(루한 데 쿠요 vs 우코 밸리)',
    ],
  },
  {
    id: 'argentina-uco-valley',
    nameKo: '우코 밸리',
    nameEn: 'Uco Valley',
    parentId: 'argentina-mendoza',
    children: [],
    level: 'sub-region',
    summary: '멘도사 남서쪽 안데스 기슭의 고지대 계곡으로, 높은 해발고도의 서늘한 기후에서 산도가 높고 꽃 향이 풍부한 고급 말벡과 샤르도네를 생산한다.',
    climate: {
      type: ['서늘한 고지대 대륙성'],
      description: '해발 약 900-1,500m(일부 그 이상)의 높은 고지대로 멘도사의 다른 지역보다 서늘하다. 극단적인 일교차, 강한 자외선, 늦은 봄 서리와 우박이 특징이다.',
      influencingFactors: ['높은 해발고도', '극단적 일교차', '강한 자외선', '서리', '우박'],
    },
    soils: [
      { type: ['자갈', '모래', '석회질 토양'], description: '안데스의 충적 선상지에서 온 돌이 많은 척박한 토양. 일부에는 석회 성분이 있다.' },
    ],
    grapes: [
      { grapeId: 'malbec', role: 'primary', notes: '신선하고 꽃 향이 있는 고급 말벡.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '높은 산도의 우아한 샤르도네.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '가장 높은 지대에서 재배.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary' },
      { grapeId: 'sauvignon-blanc', role: 'permitted' },
    ],
    classifications: [
      {
        name: '주요 하위 지역',
        description: '우코 밸리의 세 주요 부서(데파르타멘토)와 주목받는 IG.',
        levels: [
          { name: '투푼가토 (Tupungato)', description: '북쪽. 괄탈라리(Gualtallary) IG가 유명하다.' },
          { name: '투누얀 (Tunuyán)', description: '중앙. 로스 차카예스(Los Chacayes) 등.' },
          { name: '산 카를로스 (San Carlos)', description: '남쪽. 파라헤 알타미라(Paraje Altamira) IG가 유명하다.' },
        ],
      },
    ],
    wineStyles: [
      { name: '우코 밸리 말벡', description: '진한 색, 신선한 블랙 과일과 붉은 과일, 제비꽃 향, 높은 산도, 촘촘한 타닌. 루한 데 쿠요보다 섬세하다.' },
      { name: '샤르도네', description: '높은 산도, 시트러스, 미네랄. 절제된 오크.' },
    ],
    keyFacts: [
      '아르헨티나 고급 와인 투자의 중심지로 해외 생산자도 많이 진출했다',
      '세부 IG(괄탈라리, 파라헤 알타미라 등)로 테루아를 표현하는 흐름이 있다',
    ],
    examTips: [
      '고도가 높을수록 산도와 아로마가 보존되는 원리를 우코 밸리 말벡으로 설명할 것',
    ],
  },
  {
    id: 'argentina-patagonia',
    nameKo: '파타고니아',
    nameEn: 'Patagonia',
    parentId: 'argentina',
    children: [],
    level: 'region',
    summary: '아르헨티나 남부의 고도가 낮은 산지로, 고도 대신 높은 위도로 서늘함을 얻어 우아한 피노 누아와 말벡을 생산한다.',
    climate: {
      type: ['서늘한 대륙성'],
      description: '다른 아르헨티나 산지보다 고도가 낮지만 남쪽 위도로 서늘하다. 건조하고 일조량이 많으며 강한 바람이 껍질을 두껍게 하고 병해를 줄인다. 큰 일교차가 산도를 유지한다.',
      influencingFactors: ['높은 위도', '낮은 해발고도', '강한 바람', '건조한 기후', '큰 일교차'],
    },
    soils: [
      { type: ['충적토', '모래', '자갈'], description: '강 유역의 충적토.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '서늘한 기후의 우아한 피노 누아.' },
      { grapeId: 'malbec', role: 'primary', notes: '멘도사보다 산도가 높고 섬세한 스타일.' },
      { grapeId: 'merlot', role: 'secondary' },
      { grapeId: 'sauvignon-blanc', role: 'secondary' },
      { grapeId: 'chardonnay', role: 'secondary' },
    ],
    classifications: [
      { name: '주요 지역', description: '네우켄(Neuquén)과 리오 네그로(Río Negro). 리오 네그로에는 오래된 포도밭이 있다.' },
    ],
    wineStyles: [
      { name: '파타고니아 피노 누아', description: '붉은 과일, 높은 산도, 가벼운-미디엄 바디.' },
      { name: '파타고니아 말벡', description: '더 신선하고 산도가 높은 섬세한 스타일.' },
    ],
    keyFacts: [
      '아르헨티나에서 고도가 아닌 위도로 서늘한 기후를 얻는 산지이다',
    ],
    examTips: [
      '살타와 멘도사(고도) vs 파타고니아(위도)의 기후 완화 요인을 비교할 것',
    ],
  },
];
