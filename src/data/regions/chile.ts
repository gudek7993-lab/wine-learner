import { Region } from '../types';

export const chileRegions: Region[] = [
  {
    id: 'chile',
    nameKo: '칠레',
    nameEn: 'Chile',
    parentId: null,
    children: ['chile-elqui-limari', 'chile-casablanca', 'chile-maipo', 'chile-colchagua', 'chile-bio-bio'],
    level: 'country',
    summary: '안데스 산맥과 태평양 사이에 남북으로 길게 뻗은 나라로, 차가운 훔볼트 해류와 안데스의 서늘한 공기 덕분에 지중해성 기후에서도 신선함을 유지하며, 카베르네 소비뇽과 카르메네르, 해안 지역의 소비뇽 블랑과 샤르도네가 대표적이다.',
    climate: {
      type: ['지중해성', '서늘한 해양성(해안)', '서늘하고 습한 기후(남부)'],
      description: '대부분의 산지는 덥고 건조한 여름의 지중해성 기후이다. 태평양의 차가운 훔볼트 해류가 해안에 아침 안개(카만차카)와 서늘한 해풍을 만들고, 밤에는 안데스 산맥에서 차가운 공기가 내려와 큰 일교차를 만든다. 동서 방향의 차이가 남북 위도 차이만큼 중요하며, 남쪽으로 갈수록 서늘하고 비가 많아진다. 건조한 기후로 병해가 적고, 안데스 눈 녹은 물로 관개한다.',
      influencingFactors: ['훔볼트 해류(차가운 해류)', '아침 안개(카만차카)와 해풍', '안데스 산맥의 서늘한 공기', '해안 산맥', '남북 위도 차이', '안데스 눈 녹은 물 관개'],
    },
    soils: [
      { type: ['충적토', '자갈'], description: '센트럴 밸리 바닥의 비옥한 충적토와 안데스 기슭의 자갈 토양.' },
      { type: ['화강암', '점토'], description: '해안 산맥 쪽의 화강암과 점토 토양.' },
      { type: ['석회암'], description: '리마리 밸리 일부에 칠레에서 드문 석회질 토양이 있다.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '가장 많이 재배되는 품종. 마이포 밸리(특히 알토 마이포)가 대표 산지. 블랙커런트와 민트 풍미.' },
      { grapeId: 'merlot', role: 'secondary', notes: '오랫동안 카르메네르와 혼동되어 함께 재배되었다.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '따뜻한 콜차과와 서늘한 엘키, 리마리, 해안 지역에서 스타일이 다르다.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '카사블랑카, 산 안토니오, 남부 지역의 서늘한 기후.' },
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '가장 많이 재배되는 화이트. 카사블랑카, 레이다 등 해안 지역.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '카사블랑카, 리마리 등 해안과 북부 지역.' },
      { grapeId: 'riesling', role: 'permitted', notes: '비오비오 등 남부 지역.' },
      { grapeId: 'gewurztraminer', role: 'permitted', notes: '비오비오 등 남부 지역.' },
      { grapeId: 'carignan', role: 'permitted', notes: '마울레의 건지 농법 올드 바인' },
      { grapeId: 'carmenere', role: 'primary', notes: '칠레의 대표 품종' },
    ],
    classifications: [
      {
        name: 'DO (Denominación de Origen) 지역 구분',
        description: '북쪽에서 남쪽으로 지역(Region) > 하위 지역(Sub-region) > 존(Zone) > 구역(Area)으로 나뉜다. 지리적 경계만 정하며 품종과 생산 방법은 규제하지 않는다.',
        levels: [
          { name: '코킴보 (Coquimbo)', description: '북부. 엘키, 리마리, 초아파 밸리.' },
          { name: '아콩카과 (Aconcagua)', description: '아콩카과 밸리, 카사블랑카 밸리, 산 안토니오 밸리(레이다 포함).' },
          { name: '센트럴 밸리 (Central Valley)', description: '마이포, 라펠(카차포알, 콜차과), 쿠리코, 마울레 밸리. 생산량이 가장 많다.' },
          { name: '남부 지역 (Southern Region)', description: '이타타, 비오비오, 말레코 밸리. 서늘하고 비가 많다.' },
        ],
      },
      {
        name: '코스타 / 엔트레 코르디예라스 / 안데스',
        description: '2011년 도입된 동서 방향의 보조 표기. 코스타(해안, 서늘함), 엔트레 코르디예라스(두 산맥 사이 평지, 따뜻함), 안데스(산기슭, 큰 일교차)로 기후 차이를 라벨에 표시한다. 자율적으로 사용한다.',
      },
      {
        name: '라벨 규정 (85% 규칙)',
        description: '품종, 빈티지, DO를 표기하려면 각각 최소 85% 이상이어야 한다.',
      },
    ],
    wineStyles: [
      { name: '카베르네 소비뇽', description: '잘 익은 블랙커런트와 블랙체리, 민트 풍미. 저가의 과일 중심 와인부터 알토 마이포의 장기 숙성형 고급 와인까지.' },
      { name: '카르메네르', description: '칠레의 상징 품종. 진한 색, 부드러운 타닌, 블랙베리와 자두, 덜 익으면 피망과 허브 향이 강하다. 늦게 익으므로 따뜻하고 긴 생장기가 필요하다.' },
      { name: '해안 지역 소비뇽 블랑', description: '카사블랑카, 레이다의 높은 산도와 시트러스, 풀향, 열대과일 풍미.' },
      { name: '샤르도네와 피노 누아', description: '해안과 북부, 남부의 서늘한 지역에서 산도가 높은 스타일.' },
    ],
    keyFacts: [
      '필록세라가 없는 나라로, 엄격한 검역 덕분에 대부분 자근(own-rooted) 포도나무를 심는다',
      '카르메네르(Carmenère)는 1994년 메를로와 다른 품종임이 확인되었다',
      '파이스(País)는 역사적으로 가장 중요했던 품종으로, 남부 이타타와 마울레에 올드 바인이 남아 있다',
      '훔볼트 해류와 안데스 산맥의 서늘한 공기가 따뜻한 기후를 완화하는 2대 요인이다',
      '건조한 기후로 곰팡이병이 적어 유기농 재배에 유리하다',
      '서늘한 해안 산지 개발은 1980년대 카사블랑카에서 시작되었다',
    ],
    examTips: [
      '칠레 기후를 완화하는 요인(훔볼트 해류, 해풍과 안개, 안데스의 서늘한 공기)을 서술형으로 정리할 것',
      '동서 방향(코스타, 엔트레 코르디예라스, 안데스)의 기후 차이가 남북 차이만큼 중요하다는 점을 기억할 것',
      '카르메네르의 특징(피망 향, 늦은 숙성)과 메를로와의 혼동 역사가 자주 출제된다',
      '필록세라가 없는 이유(지리적 고립: 안데스, 사막, 태평양, 남극)와 검역을 설명할 것',
    ],
  },
  {
    id: 'chile-elqui-limari',
    nameKo: '엘키 밸리, 리마리 밸리',
    nameEn: 'Elqui & Limarí Valleys',
    parentId: 'chile',
    children: [],
    level: 'region',
    summary: '아타카마 사막 남쪽 끝 코킴보 지역의 북부 산지로, 위도는 낮지만 해안 안개와 높은 고도 덕분에 서늘하여 생동감 있는 샤르도네, 소비뇽 블랑, 시라를 생산한다.',
    climate: {
      type: ['건조한 기후', '해양 영향(리마리)', '고지대(엘키)'],
      description: '적도에 가까워 일조량이 매우 강하고 강수량이 거의 없어 관개가 필수이다. 리마리는 해안에서 들어오는 아침 안개(카만차카)와 해풍으로 서늘하고, 엘키는 안데스로 깊이 들어간 높은 고도의 포도밭에서 매우 큰 일교차를 보인다.',
      influencingFactors: ['훔볼트 해류와 아침 안개(카만차카)', '높은 고도(엘키)', '강한 일조량', '매우 낮은 강수량과 관개'],
    },
    soils: [
      { type: ['석회암', '점토'], description: '리마리 밸리 일부의 석회질 토양. 칠레에서 드물며 미네랄 풍미의 샤르도네로 유명하다.' },
      { type: ['자갈', '암석'], description: '엘키 밸리의 척박한 산지 토양.' },
    ],
    grapes: [
      { grapeId: 'chardonnay', role: 'primary', notes: '리마리의 대표 품종. 석회질 토양의 높은 산도와 미네랄.' },
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '엘키, 리마리의 신선한 스타일.' },
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '엘키, 리마리의 서늘한 기후 시라. 후추와 꽃 향.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '리마리 해안 지역.' },
    ],
    classifications: [
      { name: '코킴보 지역 (Coquimbo)', description: '엘키, 리마리, 초아파 밸리를 포함한다.' },
    ],
    wineStyles: [
      { name: '리마리 샤르도네', description: '높은 산도, 시트러스, 미네랄. 절제된 오크.' },
      { name: '엘키, 리마리 시라', description: '검은 후추, 블랙베리, 신선한 산도의 우아한 스타일.' },
    ],
    keyFacts: [
      '엘키 밸리는 전통적으로 피스코(Pisco) 증류주용 포도 산지였다',
      '리마리는 칠레에서 드문 석회질 토양으로 유명하다',
    ],
    examTips: [
      '낮은 위도에서도 서늘한 기후가 가능한 이유(해양 안개, 고도)를 설명할 것',
    ],
  },
  {
    id: 'chile-casablanca',
    nameKo: '카사블랑카 밸리',
    nameEn: 'Casablanca Valley',
    parentId: 'chile',
    children: [],
    level: 'region',
    summary: '산티아고와 발파라이소 사이 해안 가까운 서늘한 계곡으로, 1980년대 개척된 칠레 최초의 대표적 서늘한 해안 산지이며 소비뇽 블랑, 샤르도네, 피노 누아가 중심이다.',
    climate: {
      type: ['서늘한 지중해성', '해양 영향'],
      description: '훔볼트 해류의 영향을 받은 차가운 해풍과 아침 안개가 계곡으로 들어와 오후 기온을 낮춘다. 생장기가 길어 산도와 아로마가 보존된다. 봄 서리와 물 부족(관개용 수자원 제한)이 위험 요소이다.',
      influencingFactors: ['훔볼트 해류', '아침 안개와 오후 해풍', '봄 서리', '관개용 물 부족'],
    },
    soils: [
      { type: ['화강암', '점토', '모래'], description: '해안 산맥의 풍화된 화강암 위 점토와 모래 토양.' },
    ],
    grapes: [
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '대표 품종. 높은 산도와 시트러스, 풀향.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '신선한 과일과 산도의 샤르도네.' },
      { grapeId: 'pinot-noir', role: 'primary', notes: '서늘한 기후의 붉은 과일 풍미.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '서늘한 기후의 후추 향 시라.' },
    ],
    classifications: [
      { name: '아콩카과 지역 (Aconcagua)', description: '카사블랑카는 아콩카과 지역에 속한다. 남쪽에 인접한 산 안토니오 밸리(레이다 포함)는 바다에 더 가까워 더 서늘하다.' },
    ],
    wineStyles: [
      { name: '카사블랑카 소비뇽 블랑', description: '높은 산도, 자몽, 라임, 풀향, 열대과일. 무오크로 신선하게 만든다.' },
      { name: '샤르도네, 피노 누아', description: '신선한 과일 중심, 산도가 높다.' },
    ],
    keyFacts: [
      '1980년대 개발된 칠레 최초의 주요 서늘한 해안 산지이다',
      '서리와 물 부족이 가장 큰 재배상의 과제이다',
      '인접한 산 안토니오 밸리의 레이다(Leyda)도 소비뇽 블랑과 피노 누아로 유명하다',
    ],
    examTips: [
      '해안 산지(카사블랑카)와 센트럴 밸리 산지(마이포)의 기후와 품종 차이를 비교할 것',
    ],
  },
  {
    id: 'chile-maipo',
    nameKo: '마이포 밸리',
    nameEn: 'Maipo Valley',
    parentId: 'chile',
    children: [],
    level: 'region',
    summary: '수도 산티아고를 둘러싼 센트럴 밸리 북단의 역사적 산지로, 특히 안데스 기슭의 알토 마이포에서 칠레 최고 수준의 카베르네 소비뇽을 생산한다.',
    climate: {
      type: ['따뜻한 지중해성'],
      description: '따뜻하고 건조한 여름의 지중해성 기후. 해안 산맥이 해양 영향을 대부분 막아주며, 안데스 기슭(알토 마이포)은 밤에 산에서 내려오는 차가운 공기로 큰 일교차를 보여 신선함과 구조감을 유지한다.',
      influencingFactors: ['안데스 산맥의 서늘한 밤 공기', '해안 산맥(해양 영향 차단)', '건조한 여름', '마이포 강 관개'],
    },
    soils: [
      { type: ['자갈', '충적토'], description: '알토 마이포의 배수가 좋은 자갈 토양(안데스 충적 선상지). 카베르네 소비뇽에 적합하다.' },
      { type: ['점토', '롬'], description: '계곡 바닥의 더 비옥한 토양.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '대표 품종. 블랙커런트, 민트, 유칼립투스 풍미.' },
      { grapeId: 'merlot', role: 'secondary', notes: '보르도 블렌드.' },
      { grapeId: 'syrah-shiraz', role: 'secondary' },
      { grapeId: 'chardonnay', role: 'permitted' },
      { grapeId: 'carmenere', role: 'secondary' },
    ],
    classifications: [
      {
        name: '마이포의 하위 구역',
        description: '동서 방향으로 기후가 다르다.',
        levels: [
          { name: '알토 마이포 (Alto Maipo)', description: '안데스 기슭의 높은 지역(푸엔테 알토, 피르케 등). 고급 카베르네 소비뇽.' },
          { name: '센트럴 마이포 (Central Maipo)', description: '계곡 중앙. 따뜻하고 생산량이 많다.' },
          { name: '파시피코 마이포 (Pacific Maipo)', description: '해안 쪽. 더 서늘하다.' },
        ],
      },
    ],
    wineStyles: [
      { name: '마이포 카베르네 소비뇽', description: '풀바디, 잘 익은 블랙 과일, 민트와 유칼립투스, 단단하지만 부드러운 타닌. 고급 와인은 프렌치 오크 숙성으로 장기 숙성 가능.' },
    ],
    keyFacts: [
      '칠레의 역사적인 대형 와이너리들이 이곳에서 시작되었다',
      '센트럴 밸리 지역에 속한다',
      '알토 마이포는 칠레 아이콘 카베르네 와인의 산지이다',
    ],
    examTips: [
      '안데스의 서늘한 밤 공기가 알토 마이포 카베르네의 품질에 기여하는 원리를 설명할 것',
    ],
  },
  {
    id: 'chile-colchagua',
    nameKo: '콜차과 밸리',
    nameEn: 'Colchagua Valley (Rapel)',
    parentId: 'chile',
    children: [],
    level: 'region',
    summary: '라펠 밸리의 남쪽 하위 지역으로, 따뜻한 기후에서 풍만한 레드 와인을 생산하며 특히 아팔타의 경사지가 카르메네르와 시라, 카베르네 소비뇽으로 유명하다.',
    climate: {
      type: ['따뜻한 지중해성'],
      description: '센트럴 밸리의 따뜻한 지역으로 늦게 익는 카르메네르와 카베르네 소비뇽이 완숙되기 좋다. 서쪽 해안 쪽(파레도네스 등)은 해양 영향으로 더 서늘하다.',
      influencingFactors: ['따뜻하고 건조한 여름', '해안 쪽의 해양 영향', '안데스 쪽의 서늘한 공기'],
    },
    soils: [
      { type: ['화강암', '점토', '충적토'], description: '아팔타 경사지의 풍화된 화강암, 계곡 바닥의 충적토와 점토.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary' },
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '풍만한 따뜻한 기후 스타일.' },
      { grapeId: 'merlot', role: 'secondary' },
      { grapeId: 'malbec', role: 'secondary', notes: '블렌딩에 사용.' },
      { grapeId: 'grenache', role: 'permitted', notes: '론 스타일 블렌드.' },
      { grapeId: 'carmenere', role: 'primary' },
    ],
    classifications: [
      { name: '라펠 밸리 (Rapel Valley)', description: '센트럴 밸리 지역에 속하며, 북쪽의 카차포알(Cachapoal)과 남쪽의 콜차과(Colchagua) 두 하위 지역으로 나뉜다.' },
    ],
    wineStyles: [
      { name: '콜차과 레드', description: '풀바디, 잘 익은 블랙 과일, 부드러운 타닌. 카르메네르, 카베르네 소비뇽, 시라 단일 품종 또는 블렌드.' },
    ],
    keyFacts: [
      '아팔타(Apalta)는 말발굽 모양의 경사지로 고급 레드 와인 산지이다',
      '카르메네르(Carmenère)의 대표 산지 중 하나이다',
    ],
    examTips: [
      '따뜻한 기후가 늦게 익는 카르메네르의 완숙(피망 향 감소)에 유리하다는 점을 연결할 것',
    ],
  },
  {
    id: 'chile-bio-bio',
    nameKo: '비오비오 밸리',
    nameEn: 'Bío-Bío Valley',
    parentId: 'chile',
    children: [],
    level: 'region',
    summary: '칠레 남부 지역의 서늘하고 비가 많은 산지로, 아로마틱 화이트와 피노 누아, 샤르도네를 생산하며 인접한 이타타는 올드 바인 파이스와 생소로 주목받는다.',
    climate: {
      type: ['서늘한 해양성'],
      description: '남쪽 위도로 센트럴 밸리보다 서늘하고 강수량이 많다. 생장기가 짧고 서리와 곰팡이병이 위험 요소이다.',
      influencingFactors: ['높은 위도', '많은 강수량', '서늘한 기온', '서리와 곰팡이병 위험'],
    },
    soils: [
      { type: ['화산성 토양', '충적토', '화강암'], description: '지역별로 다양하다.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary' },
      { grapeId: 'chardonnay', role: 'primary' },
      { grapeId: 'sauvignon-blanc', role: 'secondary' },
      { grapeId: 'riesling', role: 'secondary', notes: '서늘한 기후의 아로마틱 화이트.' },
      { grapeId: 'gewurztraminer', role: 'secondary', notes: '서늘한 기후의 아로마틱 화이트.' },
    ],
    classifications: [
      { name: '남부 지역 (Southern Region)', description: '이타타(Itata), 비오비오(Bío-Bío), 말레코(Malleco) 밸리로 구성된다.' },
    ],
    wineStyles: [
      { name: '서늘한 기후 화이트', description: '리슬링, 게뷔르츠트라미너, 소비뇽 블랑, 샤르도네의 높은 산도와 아로마.' },
      { name: '피노 누아', description: '가볍고 신선한 붉은 과일 풍미.' },
    ],
    keyFacts: [
      '인접한 이타타(Itata)에는 관개 없이 재배되는 파이스(País), 생소(Cinsault), 머스캣 올드 바인이 많다',
      '칠레의 서늘한 기후 품종을 위한 개척지이다',
    ],
    examTips: [
      '칠레 남부로 갈수록 서늘하고 비가 많아진다는 남북 기후 경향을 기억할 것',
    ],
  },
];
