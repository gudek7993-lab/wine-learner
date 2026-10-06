import { Region } from '../types';

export const australiaRegions: Region[] = [
  {
    id: 'australia',
    nameKo: '호주',
    nameEn: 'Australia',
    parentId: null,
    children: [
      'australia-barossa',
      'australia-eden-valley',
      'australia-clare-valley',
      'australia-mclaren-vale',
      'australia-adelaide-hills',
      'australia-coonawarra',
      'australia-hunter-valley',
      'australia-yarra-valley',
      'australia-margaret-river',
      'australia-tasmania',
    ],
    level: 'country',
    summary: '내륙의 관개 대량 생산 지역부터 해안과 고지대의 서늘한 고급 산지까지 폭넓은 기후를 가진 신세계 대표 국가로, 바로사 시라즈, 클레어와 에덴 밸리 리슬링, 헌터 세미용, 쿠나와라와 마가렛 리버 카베르네가 상징적이다.',
    climate: {
      type: ['지중해성', '따뜻한-뜨거운 대륙성', '해양성', '서늘한 기후(고지대, 남부)'],
      description: '대부분의 포도밭은 남동부(사우스 오스트레일리아, 빅토리아, 뉴사우스웨일스)와 남서부(웨스턴 오스트레일리아)에 있다. 내륙은 덥고 건조하여 관개가 필수이며, 고급 산지는 남극해와 인도양 같은 바다, 해발고도, 높은 위도를 통해 열을 완화한다. 가뭄, 산불, 수확기 비(북부 뉴사우스웨일스) 등이 주요 위험 요소이다.',
      influencingFactors: ['남극해와 인도양의 해양 영향', '해발고도', '위도(남쪽일수록 서늘)', '내륙의 고온 건조', '관개용 수자원(머레이 강)', '가뭄과 산불'],
    },
    soils: [
      { type: ['테라 로사(석회암 위 적색토)'], description: '쿠나와라의 상징적 토양. 배수가 좋은 붉은 표토 아래 석회암 층이 있다.' },
      { type: ['사질토', '점토', '롬', '편암', '화강암'], description: '광대한 국토만큼 지역별로 매우 다양하다. 바로사는 사질 롬과 점토, 에덴 밸리와 클레어 밸리는 척박한 암석 토양이 많다.' },
    ],
    grapes: [
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '호주에서 가장 많이 재배되는 품종이자 상징. 따뜻한 바로사, 맥라렌 베일의 풍만한 스타일부터 서늘한 지역의 후추 향 스타일까지 다양하다.' },
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '쿠나와라와 마가렛 리버가 대표 산지. 민트와 유칼립투스 풍미가 나타나기도 한다.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '가장 많이 재배되는 화이트. 과거의 풍만한 오크 스타일에서 현재는 더 날렵하고 절제된 스타일로 변화. 야라 밸리, 애들레이드 힐스, 마가렛 리버, 태즈메이니아가 유명.' },
      { grapeId: 'riesling', role: 'primary', notes: '클레어 밸리와 에덴 밸리의 드라이 리슬링. 라임 풍미와 높은 산도, 숙성 시 토스트 향.' },
      { grapeId: 'semillon', role: 'secondary', notes: '헌터 밸리의 무오크 저알코올 세미용과 마가렛 리버의 소비뇽 블랑 블렌드.' },
      { grapeId: 'grenache', role: 'secondary', notes: '바로사와 맥라렌 베일의 올드 바인. GSM 블렌드의 핵심.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '야라 밸리, 모닝턴 페닌슐라, 태즈메이니아 등 서늘한 지역.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary', notes: '애들레이드 힐스, 마가렛 리버(세미용과 블렌드).' },
      { grapeId: 'merlot', role: 'permitted', notes: '카베르네 블렌딩 파트너로 주로 사용.' },
    ],
    classifications: [
      {
        name: 'GI (Geographical Indication)',
        description: '지리적 경계만 정하는 원산지 체계로, 품종, 수확량, 양조 방법은 규제하지 않는다.',
        levels: [
          { name: '주 (State)', description: '사우스 오스트레일리아, 빅토리아 등 주 단위.' },
          { name: '존 (Zone)', description: '여러 지역을 묶은 큰 단위. 예: 바로사 존(바로사 밸리 + 에덴 밸리).' },
          { name: '리전 (Region)', description: '바로사 밸리, 쿠나와라 등 일정한 기후와 토양 특성을 가진 지역.' },
          { name: '서브리전 (Sub-region)', description: '리전 안의 더 작은 단위. 예: 에덴 밸리 내 하이 이든(High Eden).' },
        ],
      },
      {
        name: '사우스 이스턴 오스트레일리아 (South Eastern Australia)',
        description: '여러 주에 걸친 광역 GI. 리버랜드, 리베리나, 머레이 달링 등 관개 지역 포도를 블렌딩한 대량 생산 브랜드 와인에 사용된다.',
      },
      {
        name: '라벨 규정 (85% 규칙)',
        description: '품종, 빈티지, GI를 라벨에 표기하려면 각각 최소 85%가 해당 조건을 충족해야 한다.',
      },
    ],
    wineStyles: [
      { name: '따뜻한 지역 시라즈', description: '바로사, 맥라렌 베일. 풀바디, 높은 알코올, 블랙베리, 자두, 초콜릿, 감초 풍미. 아메리칸 오크 숙성이 전통적.' },
      { name: '서늘한 지역 시라즈', description: '야라 밸리, 에덴 밸리 등. 미디엄 바디, 검은 후추와 붉은 과일 풍미. 비오니에와 함께 발효하기도 한다.' },
      { name: '카베르네 소비뇽', description: '쿠나와라(블랙커런트, 민트, 단단한 타닌)와 마가렛 리버(우아한 보르도 스타일 블렌드).' },
      { name: '드라이 리슬링', description: '클레어 밸리와 에덴 밸리. 라임, 레몬, 높은 산도. 병 숙성 시 토스트와 꿀 향.' },
      { name: '헌터 밸리 세미용', description: '일찍 수확한 저알코올, 무오크 와인. 젊을 때는 중성적이고 산도가 높으나 숙성되면 토스트, 꿀, 견과류 향이 생긴다.' },
      { name: '스파클링과 주정강화', description: '태즈메이니아의 전통 방식 스파클링, 바로사의 스파클링 시라즈, 러더글렌의 머스캣 같은 주정강화 스위트 와인.' },
    ],
    keyFacts: [
      'GI 체계는 지리적 경계만 정하며 품종이나 생산 방법은 규제하지 않는다',
      '라벨 표기는 품종, 빈티지, GI 각각 85% 규칙을 따른다',
      '사우스 오스트레일리아는 엄격한 검역으로 필록세라가 없어 세계에서 가장 오래된 축에 드는 자근(own-rooted) 올드 바인이 남아 있다',
      '리버랜드, 리베리나, 머레이 달링 같은 내륙 관개 지역이 생산량의 큰 부분을 차지한다',
      '호주는 스크류캡 사용을 적극적으로 선도한 국가로, 2000년 클레어 밸리 리슬링 생산자들이 대표적이다',
      '리베리나는 귀부 세미용 스위트 와인으로도 알려져 있다',
    ],
    examTips: [
      '지역별 기후를 완화하는 요소(해양, 고도, 위도)를 구체적인 지역과 연결해 설명할 수 있어야 한다',
      'GI 단계(주 > 존 > 리전 > 서브리전)와 85% 규칙을 기억할 것',
      '따뜻한 지역과 서늘한 지역 시라즈의 스타일 차이가 자주 출제된다',
      '헌터 세미용의 특이한 양조 방식(조기 수확, 무오크, 장기 병 숙성)을 서술형으로 대비할 것',
    ],
  },
  {
    id: 'australia-barossa',
    nameKo: '바로사 밸리',
    nameEn: 'Barossa Valley',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '애들레이드 북동쪽의 따뜻하고 건조한 계곡으로, 필록세라 이전부터 이어진 올드 바인에서 풍만하고 농축된 시라즈와 그르나슈를 생산하는 호주 레드의 상징 산지이다.',
    climate: {
      type: ['따뜻한-더운 대륙성', '지중해성'],
      description: '여름이 덥고 건조하며 강수량이 적어 관개가 필요한 경우가 많다. 서늘한 밤이 어느 정도 산도를 유지해 주지만, 전반적으로 포도가 쉽게 완숙되어 높은 알코올과 풍부한 과일 풍미를 만든다.',
      influencingFactors: ['덥고 건조한 여름', '낮은 강수량', '올드 바인(깊은 뿌리, 낮은 수확량)', '관개'],
    },
    soils: [
      { type: ['사질 롬', '점토', '적갈색 토양'], description: '계곡 바닥의 비교적 비옥한 토양부터 언덕의 척박한 토양까지 다양하다.' },
    ],
    grapes: [
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '대표 품종. 올드 바인에서 농축된 풀바디 시라즈를 만든다.' },
      { grapeId: 'grenache', role: 'primary', notes: '올드 바인 그르나슈. 단독 또는 GSM 블렌드(그르나슈, 시라즈, 무르베드르)로 사용.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '단독 또는 시라즈와 블렌딩(호주 특유의 카베르네-시라즈 블렌드).' },
      { grapeId: 'semillon', role: 'secondary', notes: '전통적인 화이트 품종.' },
    ],
    classifications: [
      {
        name: '바로사 올드 바인 차터 (Barossa Old Vine Charter)',
        description: '포도나무 수령에 따라 등급을 매기는 자율 규약.',
        levels: [
          { name: 'Old Vine', description: '수령 35년 이상.' },
          { name: 'Survivor Vine', description: '수령 70년 이상.' },
          { name: 'Centenarian Vine', description: '수령 100년 이상.' },
          { name: 'Ancestor Vine', description: '수령 125년 이상.' },
        ],
      },
    ],
    wineStyles: [
      { name: '바로사 시라즈', description: '풀바디, 높은 알코올, 부드럽고 성숙한 타닌. 블랙베리, 자두, 초콜릿, 감초, 향신료 풍미. 전통적으로 아메리칸 오크, 현대에는 프렌치 오크도 사용.' },
      { name: 'GSM 블렌드', description: '그르나슈의 붉은 과일과 향신료, 시라즈의 구조와 색, 무르베드르(현지명 마타로 Mataro)의 타닌을 결합.' },
      { name: '스파클링 시라즈', description: '시라즈로 만든 호주 특유의 레드 스파클링 와인.' },
    ],
    keyFacts: [
      '바로사 존은 바로사 밸리와 에덴 밸리로 구성된다',
      '사우스 오스트레일리아에는 필록세라가 없어 19세기 중반에 심은 자근 포도나무가 아직 남아 있다',
      '19세기 독일계(실레지아) 이민자들이 정착하며 포도 재배를 발전시켰다',
      '무르베드르는 호주에서 마타로(Mataro)라고 불린다',
    ],
    examTips: [
      '바로사 시라즈의 풍미와 구조를 따뜻한 기후와 올드 바인으로 설명할 것',
      '바로사(따뜻함, 레드)와 인접한 에덴 밸리(고지대, 서늘함, 리슬링)의 대비가 자주 출제된다',
    ],
  },
  {
    id: 'australia-eden-valley',
    nameKo: '에덴 밸리',
    nameEn: 'Eden Valley',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '바로사 밸리 동쪽의 더 높은 고지대로, 서늘한 기후 덕분에 라임 향의 섬세한 드라이 리슬링과 우아한 시라즈를 생산한다.',
    climate: {
      type: ['서늘한-온화한 대륙성'],
      description: '바로사 밸리보다 해발고도가 높아 서늘하며, 큰 일교차가 산도를 유지한다. 바람이 많은 언덕 지형이다.',
      influencingFactors: ['해발고도', '일교차', '바람에 노출된 언덕'],
    },
    soils: [
      { type: ['척박한 암석 토양', '편암', '화강암'], description: '척박하고 배수가 좋아 활력이 낮고 농축된 포도를 만든다.' },
    ],
    grapes: [
      { grapeId: 'riesling', role: 'primary', notes: '대표 품종. 라임, 시트러스 꽃, 높은 산도. 클레어 밸리보다 더 꽃 향이 있다고 평가되기도 한다.' },
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '바로사보다 우아하고 산도가 높은 시라즈. 매우 오래된 포도밭도 있다.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '고지대의 섬세한 샤르도네.' },
    ],
    classifications: [
      { name: '하이 이든 (High Eden)', description: '에덴 밸리 내 가장 높은 지대의 서브리전.' },
    ],
    wineStyles: [
      { name: '드라이 리슬링', description: '라임, 레몬, 꽃 향, 높은 산도. 숙성 시 토스트와 꿀 향.' },
      { name: '에덴 밸리 시라즈', description: '바로사보다 미디엄 바디에 가깝고 향신료와 꽃 향, 신선한 산도.' },
    ],
    keyFacts: [
      '바로사 존에 속하며 바로사 밸리와 인접하지만 더 높고 서늘하다',
      '호주 리슬링의 2대 산지(클레어 밸리, 에덴 밸리) 중 하나이다',
    ],
    examTips: [
      '해발고도가 기후를 완화하는 대표 사례로 에덴 밸리를 활용할 것',
    ],
  },
  {
    id: 'australia-clare-valley',
    nameKo: '클레어 밸리',
    nameEn: 'Clare Valley',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '사우스 오스트레일리아 북쪽의 대륙성 산지로, 덥지만 해발고도와 서늘한 밤 덕분에 산도가 높은 라임 향의 드라이 리슬링을 생산한다.',
    climate: {
      type: ['따뜻한 대륙성'],
      description: '낮은 덥고 건조하지만 해발고도가 있고 밤이 서늘해 큰 일교차가 산도를 지켜준다. 바다의 영향은 거의 없다.',
      influencingFactors: ['해발고도', '서늘한 밤(큰 일교차)', '건조한 기후', '오후의 서늘한 바람'],
    },
    soils: [
      { type: ['석회암 위 테라 로사'], description: '워터베일(Watervale) 지역의 석회질 토양. 향이 풍부한 리슬링.' },
      { type: ['슬레이트', '편암'], description: '폴리시 힐(Polish Hill) 지역의 척박한 슬레이트 토양. 더 단단하고 미네랄한 리슬링.' },
    ],
    grapes: [
      { grapeId: 'riesling', role: 'primary', notes: '대표 품종. 라임, 레몬, 높은 산도의 드라이 스타일.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '구조감 있는 풀바디 시라즈.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '진하고 구조감 있는 레드.' },
    ],
    classifications: [],
    wineStyles: [
      { name: '클레어 밸리 리슬링', description: '드라이, 높은 산도, 라임과 레몬 풍미. 젊을 때 신선하고 병 숙성으로 토스트, 꿀 향이 생긴다. 무오크 양조, 스크류캡 마감이 일반적.' },
      { name: '레드 와인', description: '농축된 시라즈와 카베르네 소비뇽.' },
    ],
    keyFacts: [
      '2000년 클레어 밸리 리슬링 생산자들이 집단으로 스크류캡을 도입한 것은 호주 스크류캡 확산의 상징적 사건이다',
      '워터베일과 폴리시 힐이 대표적인 하위 지역이다',
    ],
    examTips: [
      '더운 지역에서도 고품질 리슬링이 나올 수 있는 이유(고도, 일교차)를 설명할 것',
      '스크류캡이 리슬링의 신선한 과일 향 보존에 유리하다는 점과 연결해 기억할 것',
    ],
  },
  {
    id: 'australia-mclaren-vale',
    nameKo: '맥라렌 베일',
    nameEn: 'McLaren Vale',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '애들레이드 남쪽, 바다와 가까운 따뜻한 지중해성 산지로 풍만한 시라즈와 올드 바인 그르나슈가 대표적이다.',
    climate: {
      type: ['따뜻한 지중해성'],
      description: '따뜻하고 건조한 여름이지만 세인트 빈센트 만(Gulf St Vincent)에서 불어오는 바다 바람이 오후 기온을 완화한다.',
      influencingFactors: ['세인트 빈센트 만의 해풍', '따뜻하고 건조한 여름', '지중해성 기후'],
    },
    soils: [
      { type: ['사질토', '점토', '석회암', '철분 토양'], description: '매우 다양한 토양이 모자이크처럼 분포한다.' },
    ],
    grapes: [
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '대표 품종. 풍만하고 진한 시라즈, 다크 초콜릿 풍미로 알려져 있다.' },
      { grapeId: 'grenache', role: 'primary', notes: '올드 바인 그르나슈가 특히 유명하다.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '구조감 있는 레드.' },
    ],
    classifications: [],
    wineStyles: [
      { name: '맥라렌 베일 시라즈', description: '풀바디, 잘 익은 블랙베리, 자두, 초콜릿 풍미, 부드러운 타닌.' },
      { name: '그르나슈와 GSM', description: '붉은 과일과 향신료 풍미. 최근 더 신선하고 가벼운 스타일도 늘고 있다.' },
    ],
    keyFacts: [
      '바다 바람이 기온을 완화하는 따뜻한 산지이다',
      '이탈리아와 스페인 품종 등 지중해 품종 실험이 활발하다',
    ],
    examTips: [
      '바로사(내륙)와 맥라렌 베일(해안)의 기후 차이를 비교할 수 있어야 한다',
    ],
  },
  {
    id: 'australia-adelaide-hills',
    nameKo: '애들레이드 힐스',
    nameEn: 'Adelaide Hills',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '애들레이드 동쪽 마운트 로프티 산맥의 고지대로, 해발고도 덕분에 서늘하여 소비뇽 블랑, 샤르도네, 피노 누아와 스파클링 와인을 생산한다.',
    climate: {
      type: ['서늘한 기후'],
      description: '해발고도가 높아 주변 지역보다 서늘하고 강수량이 많다. 큰 일교차가 산도와 아로마를 보존한다.',
      influencingFactors: ['해발고도', '일교차', '상대적으로 많은 강수량'],
    },
    soils: [
      { type: ['편암', '사암', '점토'], description: '다양한 토양이 언덕 지형에 분포한다.' },
    ],
    grapes: [
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '신선한 시트러스와 열대과일 풍미.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '날렵하고 산도 높은 현대적 스타일.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '스틸 와인과 스파클링 와인 모두에 사용.' },
    ],
    classifications: [],
    wineStyles: [
      { name: '소비뇽 블랑', description: '말보로보다 덜 강렬하지만 신선한 시트러스와 열대과일 풍미.' },
      { name: '샤르도네', description: '높은 산도, 시트러스와 핵과류, 절제된 오크 사용.' },
    ],
    keyFacts: [
      '사우스 오스트레일리아에서 해발고도로 서늘한 기후를 얻는 대표 산지이다',
    ],
    examTips: [
      '고도를 이용한 서늘한 기후 산지의 예로 기억할 것',
    ],
  },
  {
    id: 'australia-coonawarra',
    nameKo: '쿠나와라',
    nameEn: 'Coonawarra',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '사우스 오스트레일리아 남동부 라임스톤 코스트의 평탄한 산지로, 좁고 긴 테라 로사 토양 띠에서 민트와 블랙커런트 풍미의 구조감 있는 카베르네 소비뇽을 생산한다.',
    climate: {
      type: ['온화한 해양성'],
      description: '남극해의 차가운 영향으로 서늘하고 생장기가 길다. 봄 서리와 수확기 비가 위험 요소이다. 평탄한 지형이다.',
      influencingFactors: ['남극해의 차가운 해양 영향', '긴 생장기', '봄 서리', '평탄한 지형'],
    },
    soils: [
      { type: ['테라 로사'], description: '석회암 위에 얇게 덮인 붉은 점토성 표토. 배수가 좋고 석회암 아래에 지하수가 있어 활력을 조절한다. 남북으로 길고 폭이 좁은 띠 모양으로 분포한다.' },
      { type: ['검은 토양(rendzina)'], description: '테라 로사 띠 바깥의 배수가 덜 좋은 토양.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '대표 품종. 블랙커런트, 민트, 유칼립투스 풍미와 단단한 타닌.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '미디엄-풀바디의 후추 향 시라즈.' },
      { grapeId: 'merlot', role: 'permitted', notes: '카베르네 블렌딩.' },
    ],
    classifications: [],
    wineStyles: [
      { name: '쿠나와라 카베르네 소비뇽', description: '진한 색, 블랙커런트, 민트, 유칼립투스 풍미, 높은 산도와 단단한 타닌. 장기 숙성 가능.' },
    ],
    keyFacts: [
      '테라 로사(Terra Rossa) 토양으로 유명하며, 경계 설정을 두고 법적 논쟁이 있었다',
      '라임스톤 코스트 존(Limestone Coast)에 속한다',
      '호주를 대표하는 카베르네 소비뇽 산지이다',
    ],
    examTips: [
      '테라 로사 토양의 구조(석회암 위 붉은 표토)와 장점(배수, 활력 조절)을 설명할 것',
      '쿠나와라 = 카베르네 소비뇽 + 민트/유칼립투스 연결을 기억할 것',
    ],
  },
  {
    id: 'australia-hunter-valley',
    nameKo: '헌터 밸리',
    nameEn: 'Hunter Valley',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '뉴사우스웨일스 시드니 북쪽의 덥고 습한 아열대성 산지로, 조기 수확한 무오크 저알코올 세미용과 미디엄 바디의 흙내음 시라즈로 유명하다.',
    climate: {
      type: ['덥고 습한 아열대성'],
      description: '호주 주요 산지 중 가장 덥고 습한 축에 속한다. 오후의 구름과 해풍이 열을 일부 완화하지만, 수확기 비와 습도로 인한 곰팡이병이 큰 위험 요소이다. 이 때문에 포도를 일찍 수확한다.',
      influencingFactors: ['높은 습도', '수확기 비(사이클론 영향)', '오후의 구름과 해풍', '곰팡이병 위험'],
    },
    soils: [
      { type: ['모래', '충적토'], description: '강가의 모래 토양은 세미용에 적합하다.' },
      { type: ['점토', '화산성 토양'], description: '언덕의 점토 토양은 시라즈에 적합하다.' },
    ],
    grapes: [
      { grapeId: 'semillon', role: 'primary', notes: '대표 품종. 비가 오기 전 일찍 수확하여 저알코올(약 10-11%)로 만든다.' },
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '미디엄 바디, 흙내음과 가죽 풍미의 시라즈.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '과일 중심의 샤르도네.' },
    ],
    classifications: [],
    wineStyles: [
      { name: '헌터 밸리 세미용', description: '드라이, 저알코올, 높은 산도, 무오크. 젊을 때는 레몬과 풀 향으로 중성적이지만 5-10년 이상 병 숙성하면 토스트, 꿀, 견과류 향이 생겨 오크 숙성한 것처럼 느껴진다.' },
      { name: '헌터 밸리 시라즈', description: '미디엄 바디, 붉은 과일, 흙, 가죽 풍미. 바로사보다 가볍고 섬세하다.' },
    ],
    keyFacts: [
      '호주에서 가장 오래된 와인 산지 중 하나이다',
      '수확기 비를 피하기 위한 조기 수확이 독특한 저알코올 세미용 스타일을 만들었다',
    ],
    examTips: [
      '덥고 습한 기후가 수확 시점과 와인 스타일에 미치는 영향을 서술할 수 있어야 한다',
      '헌터 세미용은 오크 없이도 숙성으로 토스트 향이 생긴다는 점이 자주 출제된다',
    ],
  },
  {
    id: 'australia-yarra-valley',
    nameKo: '야라 밸리',
    nameEn: 'Yarra Valley',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '빅토리아주 멜버른 동쪽의 서늘한 산지로, 우아한 피노 누아와 샤르도네, 전통 방식 스파클링 와인을 생산한다.',
    climate: {
      type: ['서늘한-온화한 기후'],
      description: '지역 안에서도 해발고도 차이가 커서, 높은 곳(어퍼 야라)은 서늘하고 낮은 계곡 바닥은 더 따뜻하다. 이 다양성 덕분에 피노 누아, 샤르도네부터 카베르네 소비뇽, 시라즈까지 재배된다.',
      influencingFactors: ['해발고도 차이', '서늘한 기후', '봄 서리', '산불 위험'],
    },
    soils: [
      { type: ['회색 사질 점토 롬'], description: '계곡 북쪽의 오래된 토양.' },
      { type: ['붉은 화산성 토양'], description: '남쪽 어퍼 야라의 비옥한 화산성 토양.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '대표 품종. 붉은 과일 풍미의 우아한 스타일.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '날렵하고 섬세한 현대적 샤르도네.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '서늘한 기후의 후추 향 시라즈.' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '따뜻한 계곡 바닥에서 재배.' },
    ],
    classifications: [],
    wineStyles: [
      { name: '피노 누아', description: '라이트-미디엄 바디, 체리와 딸기, 섬세한 타닌.' },
      { name: '샤르도네', description: '높은 산도, 시트러스와 핵과류, 절제된 오크.' },
      { name: '전통 방식 스파클링', description: '샤르도네와 피노 누아로 만든 스파클링.' },
    ],
    keyFacts: [
      '빅토리아주의 대표적인 서늘한 기후 산지이다',
      '빅토리아주에는 모닝턴 페닌슐라(Mornington Peninsula) 등 피노 누아 산지가 더 있다',
    ],
    examTips: [
      '같은 지역 안에서도 고도 차이로 다양한 품종이 재배될 수 있음을 예로 들 것',
    ],
  },
  {
    id: 'australia-margaret-river',
    nameKo: '마가렛 리버',
    nameEn: 'Margaret River',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '웨스턴 오스트레일리아 남서쪽 끝, 인도양에 둘러싸인 해양성 산지로 우아한 카베르네 소비뇽 블렌드와 고급 샤르도네, 소비뇽 블랑-세미용 블렌드를 생산한다.',
    climate: {
      type: ['온화한 해양성'],
      description: '세 면이 인도양과 남극해에 둘러싸여 온화하고 기온 변화가 적다. 겨울에 비가 많고 생장기는 건조하다. 강한 해풍이 꽃 피는 시기의 결실에 영향을 줄 수 있다.',
      influencingFactors: ['인도양의 해양 영향', '강한 해풍', '건조한 생장기', '작은 연간 기온 변화'],
    },
    soils: [
      { type: ['자갈', '사질 롬(라테라이트)'], description: '화강암이 풍화된 척박하고 배수가 좋은 토양.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '대표 품종. 단독 또는 메를로와 블렌딩한 보르도 스타일.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '진(Gin Gin) 클론 등으로 만든 농축되고 우아한 고급 샤르도네.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary', notes: '세미용과 블렌딩(SBS / SSB).' },
      { grapeId: 'semillon', role: 'secondary', notes: '소비뇽 블랑과 블렌딩.' },
      { grapeId: 'merlot', role: 'secondary', notes: '카베르네 블렌딩 파트너.' },
    ],
    classifications: [],
    wineStyles: [
      { name: '카베르네 소비뇽 (블렌드)', description: '블랙커런트, 삼나무 풍미, 잘 익었지만 단단한 타닌, 우아한 구조. 보르도와 비교되는 스타일.' },
      { name: '샤르도네', description: '농축된 핵과류와 시트러스, 높은 산도, 고급 프렌치 오크 숙성.' },
      { name: '소비뇽 블랑-세미용', description: '신선한 시트러스와 풀향의 블렌드. 일부는 오크 발효.' },
    ],
    keyFacts: [
      '1960년대 후반에야 상업적 와인 생산이 시작된 비교적 젊은 고급 산지이다',
      '호주 전체 생산량에서 차지하는 비중은 작지만 고급 와인 비중이 높다',
    ],
    examTips: [
      '해양성 기후(마가렛 리버)와 대륙성 기후(바로사) 카베르네/레드의 스타일 차이를 비교할 것',
    ],
  },
  {
    id: 'australia-tasmania',
    nameKo: '태즈메이니아',
    nameEn: 'Tasmania',
    parentId: 'australia',
    children: [],
    level: 'region',
    summary: '본토 남쪽의 섬으로 호주에서 가장 서늘한 산지이며, 전통 방식 스파클링 와인과 피노 누아, 샤르도네로 주목받는다.',
    climate: {
      type: ['서늘한 해양성'],
      description: '높은 위도와 남극해의 영향으로 호주에서 가장 서늘하다. 생장기가 길고 서늘하여 높은 산도와 섬세한 아로마를 만든다. 지역에 따라 동쪽은 비그늘로 건조하다.',
      influencingFactors: ['높은 위도', '남극해', '긴 생장기', '서늘한 기온'],
    },
    soils: [
      { type: ['다양(현무암, 사암, 이회토 등)'], description: '지역별로 다양하다.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '가장 중요한 품종. 스틸과 스파클링 모두에 사용.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '스파클링과 날렵한 스틸 와인.' },
      { grapeId: 'riesling', role: 'secondary', notes: '높은 산도의 리슬링.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary' },
    ],
    classifications: [],
    wineStyles: [
      { name: '전통 방식 스파클링', description: '샤르도네와 피노 누아로 만든 높은 산도의 섬세한 스파클링. 호주 본토 생산자들도 이곳 포도를 구입한다.' },
      { name: '피노 누아', description: '섬세한 붉은 과일과 높은 산도.' },
    ],
    keyFacts: [
      '호주에서 가장 서늘한 와인 산지이다',
      '타마르 밸리(Tamar Valley), 코울 리버(Coal River) 등이 주요 하위 지역이다',
    ],
    examTips: [
      '서늘한 기후 = 스파클링 와인용 높은 산도라는 연결을 기억할 것',
    ],
  },
];
