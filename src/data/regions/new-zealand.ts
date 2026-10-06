import { Region } from '../types';

export const newZealandRegions: Region[] = [
  {
    id: 'new-zealand',
    nameKo: '뉴질랜드',
    nameEn: 'New Zealand',
    parentId: null,
    children: ['nz-marlborough', 'nz-hawkes-bay', 'nz-martinborough', 'nz-central-otago'],
    level: 'country',
    summary: '남북으로 길게 뻗은 서늘한 해양성 섬나라로, 강렬한 아로마의 말보로 소비뇽 블랑과 센트럴 오타고, 마틴보로의 피노 누아로 세계적 명성을 얻었다.',
    climate: {
      type: ['서늘한 해양성', '온화한 해양성(북섬)', '대륙성(센트럴 오타고)'],
      description: '어느 포도밭도 바다에서 멀지 않아 대부분 해양성 기후이다. 북섬은 따뜻하고 습하며, 남섬으로 갈수록 서늘하고 건조해진다. 서쪽의 산맥이 편서풍의 비를 막아 동쪽 해안 산지들은 비그늘 효과로 건조하고 일조량이 풍부하다. 강한 자외선과 서늘한 밤이 선명한 과일 향과 높은 산도를 만든다.',
      influencingFactors: ['태평양과 태즈먼 해의 해양 영향', '서던 알프스 등 산맥의 비그늘 효과', '편서풍', '강한 일조량과 자외선', '서늘한 밤'],
    },
    soils: [
      { type: ['충적토', '자갈'], description: '강이 만든 비옥한 충적 평야가 많아 활력이 높다. 캐노피 관리가 중요하다.' },
      { type: ['편암', '뢰스', '점토'], description: '센트럴 오타고의 편암과 뢰스, 말보로 남쪽 계곡의 점토 등 지역별로 다르다.' },
    ],
    grapes: [
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '가장 많이 재배되는 품종이자 수출의 중심. 말보로가 대표 산지.' },
      { grapeId: 'pinot-noir', role: 'primary', notes: '가장 많이 재배되는 레드 품종. 센트럴 오타고, 마틴보로, 말보로.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '호크스 베이, 기즈번, 말보로 등 전국에서 재배.' },
      { grapeId: 'pinot-grigio-gris', role: 'secondary', notes: '피노 그리. 다양한 당도의 화이트.' },
      { grapeId: 'riesling', role: 'secondary', notes: '남섬(말보로, 와이파라, 센트럴 오타고)에서 드라이부터 스위트까지.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '호크스 베이의 김블렛 그래블스가 대표 산지. 서늘한 기후의 후추 향 스타일.' },
      { grapeId: 'merlot', role: 'secondary', notes: '호크스 베이의 보르도 블렌드.' },
      { grapeId: 'cabernet-sauvignon', role: 'permitted', notes: '호크스 베이의 가장 따뜻한 자갈 토양에서만 완숙된다.' },
    ],
    classifications: [
      {
        name: 'GI (Geographical Indication)',
        description: '2017년부터 등록이 시작된 지리적 표시 제도. 뉴질랜드 전체, 섬, 지역(Region), 하위 지역 단위의 GI가 등록되어 있다.',
      },
      {
        name: '라벨 규정 (85% 규칙)',
        description: '품종, 빈티지, 지역을 표기하려면 각각 최소 85% 이상이어야 한다.',
      },
    ],
    wineStyles: [
      { name: '말보로 소비뇽 블랑', description: '드라이, 높은 산도, 강렬한 아로마. 구스베리, 패션프루트, 자몽, 피망, 풀향. 대부분 무오크로 저온 발효하여 신선한 과일 향을 보존한다.' },
      { name: '피노 누아', description: '센트럴 오타고는 잘 익은 과일 중심의 진한 스타일, 마틴보로와 말보로는 더 흙내음과 구조감 있는 스타일.' },
      { name: '호크스 베이 레드', description: '메를로 중심의 보르도 블렌드와 후추 향의 시라.' },
      { name: '샤르도네와 아로마틱 화이트', description: '날렵한 샤르도네, 피노 그리, 리슬링. 스파클링 와인도 생산된다.' },
    ],
    keyFacts: [
      '소비뇽 블랑이 생산량과 수출 모두에서 압도적인 비중을 차지한다',
      '말보로는 뉴질랜드에서 가장 큰 와인 산지이다',
      '스크류캡 사용 비율이 매우 높다',
      '뉴질랜드 지속가능 와인 재배 인증(SWNZ, Sustainable Winegrowing New Zealand)에 대부분의 포도밭이 참여한다',
      '기즈번(Gisborne)은 북섬 동쪽의 샤르도네 산지, 와이파라(Waipara)는 남섬 캔터베리의 리슬링, 피노 누아 산지이다',
    ],
    examTips: [
      '비그늘 효과와 강한 일조, 서늘한 밤이 소비뇽 블랑의 강렬한 아로마와 산도를 만드는 과정을 설명할 것',
      '센트럴 오타고는 뉴질랜드에서 유일하게 대륙성 기후라는 점을 기억할 것',
      '비옥한 충적토의 높은 활력과 캐노피 관리의 필요성이 출제될 수 있다',
    ],
  },
  {
    id: 'nz-marlborough',
    nameKo: '말보로',
    nameEn: 'Marlborough',
    parentId: 'new-zealand',
    children: [],
    level: 'region',
    summary: '남섬 북동쪽 끝의 일조량 많고 건조한 산지로, 세계 시장에 뉴질랜드를 알린 강렬한 소비뇽 블랑의 본고장이자 뉴질랜드 최대 산지이다.',
    climate: {
      type: ['서늘한 해양성'],
      description: '서쪽 산맥의 비그늘에 있어 건조하고 일조량이 많다. 따뜻하고 화창한 낮과 서늘한 밤의 큰 일교차가 높은 산도와 강렬한 아로마를 만든다. 긴 생장기와 가을의 건조한 날씨가 장점이며, 봄 서리는 위험 요소이다.',
      influencingFactors: ['비그늘 효과', '많은 일조량', '큰 일교차', '해양 영향', '봄 서리'],
    },
    soils: [
      { type: ['자갈', '충적토'], description: '와이라우 밸리의 돌이 많은 충적토. 배수가 좋고 돌이 열을 저장한다. 일부는 비옥하여 활력이 높다.' },
      { type: ['점토'], description: '남쪽 계곡(Southern Valleys)의 점토 토양. 피노 누아에 적합하다.' },
    ],
    grapes: [
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '압도적인 주력 품종.' },
      { grapeId: 'pinot-noir', role: 'primary', notes: '남쪽 계곡의 점토 토양에서 스틸 와인과 스파클링용으로 재배.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '스틸 와인과 스파클링 와인.' },
      { grapeId: 'pinot-grigio-gris', role: 'secondary' },
      { grapeId: 'riesling', role: 'secondary' },
    ],
    classifications: [
      {
        name: '주요 하위 지역',
        description: '말보로 내 주요 계곡.',
        levels: [
          { name: '와이라우 밸리 (Wairau Valley)', description: '가장 넓고 중심이 되는 계곡. 잘 익은 열대과일 풍미의 소비뇽 블랑.' },
          { name: '아와테레 밸리 (Awatere Valley)', description: '더 남쪽, 더 높고 서늘하며 바람이 많다. 더 허브 향과 풀향이 강하고 산도 높은 소비뇽 블랑.' },
          { name: '남쪽 계곡 (Southern Valleys)', description: '점토 토양. 피노 누아와 구조감 있는 화이트.' },
        ],
      },
    ],
    wineStyles: [
      { name: '말보로 소비뇽 블랑', description: '드라이, 높은 산도, 라이트-미디엄 바디. 패션프루트, 구스베리, 자몽, 피망, 풀향. 스테인리스 스틸 저온 발효로 일찍 마시는 스타일이 대부분이지만, 오크 발효나 야생 효모 발효를 한 복합적인 스타일도 있다.' },
      { name: '피노 누아', description: '붉은 과일 중심, 센트럴 오타고보다 가볍고 산도가 높다.' },
      { name: '스파클링 와인', description: '샤르도네와 피노 누아로 만든 전통 방식 스파클링.' },
    ],
    keyFacts: [
      '1973년 대규모 상업용 포도밭이 조성된 이후 급성장했다',
      '1980년대 중반 출시된 말보로 소비뇽 블랑이 국제적인 명성을 얻으며 뉴질랜드 와인의 아이콘이 되었다',
      '와이라우 밸리와 아와테레 밸리의 스타일 차이가 중요하다',
    ],
    examTips: [
      '말보로 소비뇽 블랑의 아로마 특징을 기후(일조, 일교차)와 양조(저온 발효, 무오크, 스크류캡)로 설명할 것',
      '와이라우 vs 아와테레 비교가 자주 출제된다',
    ],
  },
  {
    id: 'nz-hawkes-bay',
    nameKo: '호크스 베이',
    nameEn: "Hawke's Bay",
    parentId: 'new-zealand',
    children: [],
    level: 'region',
    summary: '북섬 동해안의 따뜻한 산지로, 배수가 좋은 김블렛 그래블스의 자갈 토양에서 보르도 블렌드와 시라를, 그리고 고품질 샤르도네를 생산한다.',
    climate: {
      type: ['온화한 해양성'],
      description: '뉴질랜드에서 가장 따뜻하고 일조량이 많은 산지 중 하나이다. 서쪽 산맥이 비를 막아주지만 가을에 사이클론성 비가 올 수 있어 빈티지 편차가 있다.',
      influencingFactors: ['따뜻한 기온', '많은 일조량', '비그늘 효과', '가을 비'],
    },
    soils: [
      { type: ['자갈'], description: '김블렛 그래블스(Gimblett Gravels): 옛 강바닥의 자갈 토양. 매우 척박하고 배수가 좋으며 열을 저장하여 포도가 잘 익는다.' },
      { type: ['충적토', '점토', '실트'], description: '더 비옥한 토양에서는 화이트 품종과 메를로가 재배된다.' },
    ],
    grapes: [
      { grapeId: 'merlot', role: 'primary', notes: '보르도 블렌드의 중심 품종.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '가장 따뜻한 자갈 토양에서 블렌딩용으로 재배.' },
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '김블렛 그래블스의 후추 향, 우아한 시라.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '잘 익은 핵과류 풍미의 고품질 샤르도네.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary' },
    ],
    classifications: [],
    wineStyles: [
      { name: '보르도 블렌드', description: '메를로 중심에 카베르네 소비뇽, 카베르네 프랑 등을 블렌딩. 미디엄-풀바디, 잘 익은 블랙 과일.' },
      { name: '시라', description: '검은 후추, 블랙베리, 꽃 향의 서늘한 기후 스타일.' },
      { name: '샤르도네', description: '핵과류와 시트러스, 오크 숙성의 복합미.' },
    ],
    keyFacts: [
      '뉴질랜드 레드 와인(보르도 블렌드, 시라)의 중심지이다',
      '김블렛 그래블스는 토양을 기준으로 정의된 특별한 구역이다',
    ],
    examTips: [
      '자갈 토양(배수, 열 저장)이 늦게 익는 카베르네 소비뇽과 시라의 완숙을 돕는 원리를 설명할 것',
    ],
  },
  {
    id: 'nz-martinborough',
    nameKo: '마틴보로',
    nameEn: 'Martinborough (Wairarapa)',
    parentId: 'new-zealand',
    children: [],
    level: 'region',
    summary: '북섬 남쪽 끝 와이라라파 지역의 작은 마을 산지로, 서늘하고 건조하며 바람이 강한 기후에서 구조감 있는 피노 누아를 생산한다.',
    climate: {
      type: ['서늘한 해양성'],
      description: '서쪽 산맥의 비그늘로 건조하다. 남쪽에서 불어오는 강하고 차가운 바람이 꽃 피는 시기의 결실을 방해하여 수확량이 낮고, 그 결과 농축된 포도가 만들어진다. 큰 일교차가 산도를 유지한다.',
      influencingFactors: ['비그늘 효과', '강한 바람(낮은 수확량)', '큰 일교차', '긴 건조한 가을'],
    },
    soils: [
      { type: ['자갈', '뢰스'], description: '마틴보로 테라스(Martinborough Terrace)의 배수가 좋은 자갈 위에 얇은 뢰스가 덮인 토양.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '대표 품종. 농축되고 흙내음과 구조감이 있는 스타일.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary' },
      { grapeId: 'chardonnay', role: 'secondary' },
    ],
    classifications: [],
    wineStyles: [
      { name: '마틴보로 피노 누아', description: '붉은 과일과 검은 과일, 흙과 향신료 풍미. 센트럴 오타고보다 구조감 있고 짭짤한 풍미가 있다는 평가.' },
    ],
    keyFacts: [
      '와이라라파(Wairarapa) 지역의 중심 산지이다',
      '강한 바람으로 수확량이 자연적으로 낮다',
    ],
    examTips: [
      '바람이 수확량과 농축도에 미치는 영향을 설명할 수 있어야 한다',
    ],
  },
  {
    id: 'nz-central-otago',
    nameKo: '센트럴 오타고',
    nameEn: 'Central Otago',
    parentId: 'new-zealand',
    children: [],
    level: 'region',
    summary: '남섬 남부 내륙의 산악 지대로, 뉴질랜드에서 유일하게 대륙성 기후를 가지며 잘 익은 과일 풍미의 피노 누아로 유명하다.',
    climate: {
      type: ['대륙성'],
      description: '세계 최남단 와인 산지 중 하나로, 산맥으로 둘러싸인 내륙이라 뉴질랜드에서 유일한 대륙성 기후이다. 여름은 짧고 덥고 건조하며 일조량이 많고, 겨울은 춥다. 매우 큰 일교차, 낮은 강수량(관개 필요), 봄과 가을 서리가 특징이다.',
      influencingFactors: ['대륙성(내륙, 산맥)', '매우 큰 일교차', '낮은 강수량과 관개', '봄, 가을 서리', '높은 해발고도와 강한 자외선'],
    },
    soils: [
      { type: ['편암', '뢰스', '자갈'], description: '편암이 풍화된 척박한 토양과 바람에 쌓인 뢰스. 배수가 좋고 활력이 낮다.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '압도적인 주력 품종.' },
      { grapeId: 'pinot-grigio-gris', role: 'secondary' },
      { grapeId: 'riesling', role: 'secondary', notes: '드라이부터 스위트까지 다양한 스타일.' },
      { grapeId: 'chardonnay', role: 'secondary' },
    ],
    classifications: [
      {
        name: '주요 하위 지역',
        description: '센트럴 오타고 내 주요 지역.',
        levels: [
          { name: '배녹번 (Bannockburn)', description: '가장 따뜻하고 건조한 지역 중 하나. 진하고 잘 익은 피노 누아.' },
          { name: '깁스턴 (Gibbston)', description: '가장 높고 서늘한 지역. 더 가볍고 섬세한 스타일.' },
          { name: '벤디고, 와나카, 알렉산드라 등', description: '각기 다른 미기후를 가진 하위 지역들.' },
        ],
      },
    ],
    wineStyles: [
      { name: '센트럴 오타고 피노 누아', description: '진한 색, 잘 익은 붉은 과일과 검은 과일(체리, 블랙베리), 향신료와 허브 풍미, 높은 산도. 뉴질랜드 피노 누아 중 과일 풍미가 가장 풍부한 편이다.' },
    ],
    keyFacts: [
      '뉴질랜드에서 유일한 대륙성 기후 산지이다',
      '세계에서 가장 남쪽에 있는 와인 산지 중 하나이다',
      '서리 방지를 위해 방상 팬(wind machine)과 스프링클러를 사용한다',
    ],
    examTips: [
      '대륙성 기후의 특징(큰 일교차, 서리, 건조)이 피노 누아 스타일에 미치는 영향을 서술할 것',
      '배녹번(따뜻함)과 깁스턴(서늘함)의 대비를 기억할 것',
    ],
  },
];
