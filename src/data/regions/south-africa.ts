import { Region } from '../types';

export const southAfricaRegions: Region[] = [
  {
    id: 'south-africa',
    nameKo: '남아프리카 공화국',
    nameEn: 'South Africa',
    parentId: null,
    children: ['sa-constantia', 'sa-stellenbosch', 'sa-paarl', 'sa-swartland', 'sa-walker-bay', 'sa-elgin'],
    level: 'country',
    summary: '대서양과 인도양이 만나는 케이프 지역의 따뜻한 지중해성 산지로, 차가운 벵겔라 해류와 케이프 닥터 바람이 열을 식혀 슈냉 블랑, 카베르네 소비뇽 블렌드, 고유 품종 피노타지 등 다양한 와인을 생산한다.',
    climate: {
      type: ['지중해성', '해양 영향(해안)'],
      description: '포도밭 대부분은 웨스턴 케이프에 있으며 덥고 건조한 여름의 지중해성 기후이다. 서해안을 따라 남극에서 올라오는 차가운 벵겔라 해류와, 여름에 남동쪽에서 강하게 부는 건조한 바람 케이프 닥터(Cape Doctor)가 기온을 낮추고 곰팡이병을 줄인다. 해안에서 멀어질수록 덥고 건조해지며 관개가 필요하다. 산지 경사지는 고도와 방향에 따라 다양한 미기후를 만든다.',
      influencingFactors: ['벵겔라 해류(차가운 해류)', '케이프 닥터(건조한 남동풍)', '폴스 베이(False Bay)의 해풍', '산지 경사지와 방향', '내륙의 고온 건조와 관개', '가뭄'],
    },
    soils: [
      { type: ['화강암'], description: '스텔렌보쉬, 팔, 스워틀랜드 팔데베르크 등 산기슭의 풍화된 화강암. 보수력이 좋다.' },
      { type: ['사암', '셰일(편암)'], description: '테이블 마운틴 사암과 말름즈버리 셰일. 척박하고 배수가 좋다.' },
    ],
    grapes: [
      { grapeId: 'chenin-blanc', role: 'primary', notes: '남아공에서 가장 많이 재배되는 품종. 현지명 스틴(Steen). 일상 와인부터 올드 바인 고급 와인, 스위트, 스파클링, 브랜디까지 다양하게 사용.' },
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '가장 많이 재배되는 레드 품종 중 하나. 스텔렌보쉬의 보르도 블렌드.' },
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '스워틀랜드의 론 스타일과 스텔렌보쉬, 팔의 풍만한 스타일.' },
      { grapeId: 'pinotage', role: 'primary', notes: '남아공 고유 품종. 1925년 스텔렌보쉬 대학의 페롤드(Perold) 교수가 피노 누아 × 생소로 교배.' },
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '콘스탄시아, 엘긴, 더반빌 등 서늘한 해안 지역.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '워커 베이, 엘긴의 서늘한 기후. 캅 클라시크 스파클링에도 사용.' },
      { grapeId: 'merlot', role: 'secondary', notes: '보르도 블렌드.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '워커 베이(헤멜 엔 아르데), 엘긴.' },
      { grapeId: 'grenache', role: 'secondary', notes: '스워틀랜드의 론 스타일 블렌드.' },
      { grapeId: 'semillon', role: 'secondary', notes: '콘스탄시아, 프란슈후크의 올드 바인과 소비뇽 블랑 블렌드.' },
    ],
    classifications: [
      {
        name: 'WO (Wine of Origin)',
        description: '지리적 경계를 정하는 원산지 체계. 큰 단위에서 작은 단위로 나뉜다.',
        levels: [
          { name: '지리적 단위 (Geographical Unit)', description: '가장 큰 단위. 예: 웨스턴 케이프(Western Cape).' },
          { name: '지역 (Region)', description: '예: 코스탈 리전(Coastal Region), 케이프 사우스 코스트(Cape South Coast), 브리드 리버 밸리(Breede River Valley).' },
          { name: '지구 (District)', description: '예: 스텔렌보쉬, 스워틀랜드, 팔, 워커 베이, 엘긴.' },
          { name: '와드 (Ward)', description: '가장 작은 단위. 예: 콘스탄시아, 헤멜 엔 아르데 밸리, 시몬스베르크-스텔렌보쉬.' },
        ],
      },
      {
        name: '라벨 규정',
        description: '품종과 빈티지 표기는 최소 85%, WO 원산지 표기는 100% 해당 지역산이어야 한다.',
      },
      {
        name: '올드 바인 프로젝트 (Certified Heritage Vineyards)',
        description: '수령 35년 이상의 포도밭을 인증하여 라벨에 식재 연도를 표시하는 제도.',
      },
    ],
    wineStyles: [
      { name: '슈냉 블랑', description: '신선한 무오크 스타일(사과, 시트러스, 열대과일)부터 올드 바인의 농축된 오크 숙성 스타일, 스위트 와인까지 다양하다.' },
      { name: '보르도 블렌드', description: '카베르네 소비뇽 중심의 구조감 있는 레드. 스텔렌보쉬가 대표.' },
      { name: '피노타지', description: '진한 색, 블랙베리, 자두, 훈연과 흙 풍미, 높은 알코올. 일부는 커피 향을 강조한 스타일도 있다. 피노타지를 포함한 레드 블렌드는 케이프 블렌드(Cape Blend)라 불린다.' },
      { name: '론 스타일 레드', description: '스워틀랜드의 시라, 그르나슈, 생소, 무르베드르 블렌드.' },
      { name: '캅 클라시크 (Cap Classique)', description: '병 내 2차 발효(전통 방식)로 만든 남아공 스파클링 와인.' },
    ],
    keyFacts: [
      '슈냉 블랑이 가장 많이 재배되는 품종이다',
      '피노타지(Pinotage)는 피노 누아 × 생소(Cinsault, 당시 현지명 에르미타주 Hermitage)의 교배종으로 남아공 고유 품종이다',
      '케이프 닥터는 여름의 강한 남동풍으로 포도밭을 서늘하고 건조하게 하여 곰팡이병을 줄인다',
      '역사적으로 협동조합 중심의 대량 생산 체제였으나 1990년대 이후 품질 중심으로 크게 변화했다',
      '브리드 리버 밸리(로버트슨, 워세스터)는 덥고 건조한 내륙의 관개 지역이다',
    ],
    examTips: [
      '벵겔라 해류와 케이프 닥터가 기후를 완화하는 원리를 서술형으로 대비할 것',
      'WO 단계(지리적 단위 > 지역 > 지구 > 와드)와 라벨 규정(85%, 원산지 100%)을 암기할 것',
      '피노타지의 부모 품종과 탄생 배경이 자주 출제된다',
      '슈냉 블랑의 다양한 스타일과 올드 바인의 의미를 설명할 수 있어야 한다',
    ],
  },
  {
    id: 'sa-constantia',
    nameKo: '콘스탄시아',
    nameEn: 'Constantia',
    parentId: 'south-africa',
    children: [],
    level: 'region',
    summary: '케이프타운 남쪽 테이블 마운틴 산맥 기슭의 서늘한 역사적 산지로, 소비뇽 블랑과 세미용, 그리고 18-19세기에 유럽 왕실이 즐긴 전설적인 스위트 와인 뱅 드 콘스탄스로 유명하다.',
    climate: {
      type: ['서늘한 지중해성', '해양 영향'],
      description: '양쪽 바다(폴스 베이와 대서양)에 가깝고 케이프 닥터의 서늘한 바람을 직접 받아 남아공에서 가장 서늘한 산지 중 하나이다. 경사지가 동쪽을 향해 오후의 강한 햇볕을 덜 받는다.',
      influencingFactors: ['폴스 베이와 대서양의 해양 영향', '케이프 닥터', '동향 경사지', '상대적으로 많은 강수량'],
    },
    soils: [
      { type: ['화강암', '사암'], description: '콘스탄시아베르크 산 경사지의 풍화된 화강암과 사암 토양.' },
    ],
    grapes: [
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '대표 품종. 높은 산도, 시트러스와 풀향.' },
      { grapeId: 'semillon', role: 'secondary', notes: '소비뇽 블랑과 블렌딩한 보르도 스타일 화이트.' },
      { grapeId: 'chardonnay', role: 'secondary' },
      { grapeId: 'cabernet-sauvignon', role: 'secondary', notes: '일부 보르도 블렌드.' },
    ],
    classifications: [
      { name: '와드 (Ward)', description: '콘스탄시아는 케이프 타운 지구(District) 내의 와드이다.' },
    ],
    wineStyles: [
      { name: '소비뇽 블랑', description: '높은 산도, 시트러스, 풀향, 피망의 신선한 스타일.' },
      { name: '뱅 드 콘스탄스 (Vin de Constance)', description: '뮈스카 블랑 아 프티 그랭(Muscat de Frontignan)을 나무에서 말려(늦수확, 건포도화) 만든 주정강화하지 않은 스위트 와인. 18-19세기에 유명했고 20세기 후반에 부활했다.' },
    ],
    keyFacts: [
      '남아공 와인 산업이 시작된 역사적인 지역으로 17세기 말 포도 재배가 시작되었다',
      '뱅 드 콘스탄스는 나폴레옹 등이 즐긴 것으로 알려진 역사적 스위트 와인이다',
      '도시 확장으로 포도밭 면적이 제한되어 있다',
    ],
    examTips: [
      '해양 영향과 케이프 닥터로 서늘한 기후 = 소비뇽 블랑 산지라는 연결을 기억할 것',
      '뱅 드 콘스탄스는 귀부나 주정강화가 아닌 나무에서 말린 포도(늦수확)로 만든다는 점에 주의할 것',
    ],
  },
  {
    id: 'sa-stellenbosch',
    nameKo: '스텔렌보쉬',
    nameEn: 'Stellenbosch',
    parentId: 'south-africa',
    children: [],
    level: 'region',
    summary: '케이프타운 동쪽의 남아공 대표 고급 산지로, 폴스 베이의 해풍과 다양한 산지 경사지 덕분에 구조감 있는 카베르네 소비뇽, 보르도 블렌드, 피노타지, 슈냉 블랑을 생산한다.',
    climate: {
      type: ['따뜻한 지중해성'],
      description: '따뜻하고 건조한 여름의 지중해성 기후. 남쪽의 폴스 베이에서 불어오는 서늘한 해풍과 케이프 닥터가 오후 기온을 낮춘다. 시몬스베르크, 헬더베르크 등 산지 경사지는 고도와 방향에 따라 서늘한 미기후를 만든다.',
      influencingFactors: ['폴스 베이의 해풍', '케이프 닥터', '산지 경사지(고도, 방향)', '건조한 여름'],
    },
    soils: [
      { type: ['화강암'], description: '산기슭 경사지의 풍화된 화강암. 보수력이 좋아 관개 없이도 재배가 가능한 곳이 있다. 고급 레드에 적합하다.' },
      { type: ['사암', '충적토'], description: '계곡 바닥과 서쪽의 사암, 충적토. 화이트 품종에 적합하다.' },
    ],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '대표 품종. 단독 또는 보르도 블렌드.' },
      { grapeId: 'merlot', role: 'secondary', notes: '보르도 블렌드.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '풍만한 시라즈.' },
      { grapeId: 'pinotage', role: 'primary', notes: '피노타지가 탄생한 곳. 고품질 피노타지와 케이프 블렌드.' },
      { grapeId: 'chenin-blanc', role: 'primary', notes: '올드 바인 슈냉 블랑.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary' },
      { grapeId: 'chardonnay', role: 'secondary' },
    ],
    classifications: [
      { name: '지구 (District)', description: '스텔렌보쉬는 코스탈 리전 내 지구이며, 시몬스베르크-스텔렌보쉬(Simonsberg-Stellenbosch), 존커스훅 밸리(Jonkershoek Valley), 방훅(Banghoek) 등 여러 와드가 있다.' },
    ],
    wineStyles: [
      { name: '카베르네 소비뇽, 보르도 블렌드', description: '풀바디, 블랙커런트와 블랙체리, 허브 풍미, 단단한 타닌. 프렌치 오크 숙성으로 장기 숙성 가능.' },
      { name: '피노타지, 케이프 블렌드', description: '블랙베리, 자두, 향신료의 진한 레드. 케이프 블렌드는 피노타지를 일정 비율 포함한 블렌드.' },
      { name: '슈냉 블랑', description: '올드 바인에서 농축된 과일, 오크 숙성의 복합미.' },
    ],
    keyFacts: [
      '남아공을 대표하는 고급 레드 와인 산지이다',
      '스텔렌보쉬 대학은 남아공 와인 연구와 교육의 중심이며 피노타지가 이곳에서 탄생했다',
      '헬더베르크(Helderberg)는 폴스 베이에 가까워 서늘한 경사지로 알려져 있다',
    ],
    examTips: [
      '폴스 베이 해풍과 산지 경사지가 따뜻한 기후를 완화하는 원리를 설명할 것',
      '스텔렌보쉬 = 카베르네 소비뇽 / 보르도 블렌드 / 피노타지 연결을 기억할 것',
    ],
  },
  {
    id: 'sa-paarl',
    nameKo: '팔',
    nameEn: 'Paarl',
    parentId: 'south-africa',
    children: [],
    level: 'region',
    summary: '스텔렌보쉬 북쪽의 더 따뜻한 내륙 산지로, 풀바디의 시라즈와 피노타지, 카베르네 소비뇽, 슈냉 블랑을 생산하며 인근에 프란슈후크 계곡이 있다.',
    climate: {
      type: ['따뜻한-더운 지중해성'],
      description: '바다에서 더 멀어 스텔렌보쉬보다 덥고 건조하다. 베르그 강(Berg River) 유역의 계곡 바닥은 덥고, 산지 경사지는 상대적으로 서늘하다.',
      influencingFactors: ['바다와의 거리(더 내륙)', '베르그 강', '산지 경사지', '덥고 건조한 여름'],
    },
    soils: [
      { type: ['화강암', '사암', '셰일'], description: '팔 산(Paarl Mountain)의 화강암 등 다양한 토양.' },
    ],
    grapes: [
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '따뜻한 기후의 풀바디 시라즈.' },
      { grapeId: 'pinotage', role: 'primary' },
      { grapeId: 'cabernet-sauvignon', role: 'primary' },
      { grapeId: 'chenin-blanc', role: 'primary' },
      { grapeId: 'semillon', role: 'secondary', notes: '프란슈후크의 올드 바인 세미용.' },
    ],
    classifications: [
      { name: '지구와 주변 산지', description: '팔은 코스탈 리전 내 지구이다. 프란슈후크(Franschhoek, 17세기 프랑스 위그노 정착지), 웰링턴(Wellington) 등이 주변의 주요 산지이다.' },
    ],
    wineStyles: [
      { name: '풀바디 레드', description: '잘 익은 과일의 시라즈, 피노타지, 카베르네 소비뇽.' },
      { name: '슈냉 블랑', description: '잘 익은 과일 풍미의 화이트.' },
    ],
    keyFacts: [
      '프란슈후크는 프랑스 위그노 이민자들이 정착한 계곡으로, 오래된 세미용 포도밭과 캅 클라시크 스파클링으로 알려져 있다',
    ],
    examTips: [
      '스텔렌보쉬(해양 영향 큼)와 팔(더 내륙, 더 따뜻함)의 기후 차이를 비교할 것',
    ],
  },
  {
    id: 'sa-swartland',
    nameKo: '스워틀랜드',
    nameEn: 'Swartland',
    parentId: 'south-africa',
    children: [],
    level: 'region',
    summary: '케이프타운 북쪽의 덥고 건조한 밀밭 지대로, 관개 없이 재배하는 올드 바인 부시 바인에서 농축된 슈냉 블랑과 론 스타일 레드를 생산하며 남아공 혁신 와인의 중심지로 떠올랐다.',
    climate: {
      type: ['덥고 건조한 지중해성'],
      description: '여름이 덥고 건조하며 강수량이 적다. 서해안의 벵겔라 해류와 대서양의 해풍이 어느 정도 열을 식힌다. 관개 없는 건지 농법(dry farming)으로 낮은 수확량과 농축된 포도를 얻는다.',
      influencingFactors: ['덥고 건조한 여름', '대서양과 벵겔라 해류의 영향', '건지 농법(관개 없음)', '가뭄'],
    },
    soils: [
      { type: ['화강암'], description: '팔데베르크(Paardeberg) 산의 풍화된 화강암. 보수력이 있어 건지 농법에 유리하다.' },
      { type: ['셰일(편암)', '철석'], description: '말름즈버리 셰일과 철분이 많은 토양.' },
    ],
    grapes: [
      { grapeId: 'chenin-blanc', role: 'primary', notes: '올드 바인 부시 바인 슈냉 블랑.' },
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '론 스타일 레드의 중심.' },
      { grapeId: 'grenache', role: 'secondary', notes: '론 블렌드.' },
      { grapeId: 'pinotage', role: 'secondary' },
    ],
    classifications: [
      { name: '지구 (District)', description: '스워틀랜드는 코스탈 리전 내 지구이다.' },
    ],
    wineStyles: [
      { name: '올드 바인 슈냉 블랑', description: '농축된 사과, 핵과류, 꿀 풍미. 오래된 큰 오크통이나 콘크리트 숙성, 야생 효모 발효 등 최소 개입 양조가 많다.' },
      { name: '론 스타일 레드', description: '시라, 그르나슈, 생소, 무르베드르 블렌드. 신선하고 향신료가 있는 스타일.' },
      { name: '화이트 블렌드', description: '슈냉 블랑에 다른 화이트 품종을 섞은 복합적인 블렌드.' },
    ],
    keyFacts: [
      '2000년대 이후 혁신적인 소규모 생산자들(스워틀랜드 인디펜던트 프로듀서스 등)이 이끄는 지역이다',
      '부시 바인(bush vine, 고블렛) 수형과 건지 농법이 특징이다',
    ],
    examTips: [
      '건지 농법과 부시 바인이 덥고 건조한 기후에서 유리한 이유(그늘 제공, 낮은 수확량, 물 절약)를 설명할 것',
      '스워틀랜드 = 올드 바인 슈냉 블랑 + 론 스타일 연결을 기억할 것',
    ],
  },
  {
    id: 'sa-walker-bay',
    nameKo: '워커 베이',
    nameEn: 'Walker Bay (Hemel-en-Aarde)',
    parentId: 'south-africa',
    children: [],
    level: 'region',
    summary: '허마너스 근처 케이프 사우스 코스트의 서늘한 해안 산지로, 헤멜 엔 아르데 계곡을 중심으로 부르고뉴 스타일의 피노 누아와 샤르도네를 생산한다.',
    climate: {
      type: ['서늘한 해양성'],
      description: '바다(워커 베이)와 가까워 서늘한 해풍의 영향을 크게 받는다. 생장기가 길고 서늘하여 피노 누아와 샤르도네에 적합하다.',
      influencingFactors: ['대서양(워커 베이)의 서늘한 해풍', '케이프 닥터', '긴 생장기'],
    },
    soils: [
      { type: ['셰일', '점토', '사암', '화강암'], description: '점토가 많은 셰일 토양과 사암, 화강암 토양. 점토 토양은 피노 누아와 샤르도네에 적합하다.' },
    ],
    grapes: [
      { grapeId: 'pinot-noir', role: 'primary', notes: '남아공 최고 수준의 피노 누아.' },
      { grapeId: 'chardonnay', role: 'primary', notes: '높은 산도의 우아한 샤르도네.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary' },
    ],
    classifications: [
      {
        name: '지구와 와드',
        description: '워커 베이는 케이프 사우스 코스트 지역의 지구이며, 헤멜 엔 아르데 계곡의 세 와드가 대표적이다.',
        levels: [
          { name: '헤멜 엔 아르데 밸리 (Hemel-en-Aarde Valley)', description: '바다에 가장 가까운 와드.' },
          { name: '어퍼 헤멜 엔 아르데 밸리 (Upper Hemel-en-Aarde Valley)', description: '계곡 중간 부분.' },
          { name: '헤멜 엔 아르데 리지 (Hemel-en-Aarde Ridge)', description: '가장 높고 내륙 쪽의 능선 지대.' },
        ],
      },
    ],
    wineStyles: [
      { name: '피노 누아', description: '붉은 과일, 흙 풍미, 섬세한 타닌, 높은 산도.' },
      { name: '샤르도네', description: '시트러스, 핵과류, 미네랄, 프렌치 오크의 복합미.' },
    ],
    keyFacts: [
      '헤멜 엔 아르데(Hemel-en-Aarde)는 "하늘과 땅"이라는 뜻이다',
      '보트 리버(Bot River) 등 다른 와드도 포함한다',
    ],
    examTips: [
      '남아공에서 피노 누아와 샤르도네를 떠올릴 때 워커 베이와 엘긴의 서늘한 기후를 연결할 것',
    ],
  },
  {
    id: 'sa-elgin',
    nameKo: '엘긴',
    nameEn: 'Elgin',
    parentId: 'south-africa',
    children: [],
    level: 'region',
    summary: '스텔렌보쉬 남동쪽 산지의 높은 고원에 있는 서늘한 사과 재배 지대로, 산도가 높은 소비뇽 블랑, 샤르도네, 피노 누아를 생산한다.',
    climate: {
      type: ['서늘한 해양성', '고지대'],
      description: '해발고도가 높고 바다와 가까워 남아공에서 가장 서늘한 산지 중 하나이다. 여름에 해양성 구름이 덮여 기온을 낮추고, 강수량도 상대적으로 많다.',
      influencingFactors: ['해발고도', '해양 영향과 여름 구름', '서늘한 기온', '상대적으로 많은 강수량'],
    },
    soils: [
      { type: ['셰일', '사암'], description: '보케벨트 셰일과 테이블 마운틴 사암 토양.' },
    ],
    grapes: [
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '높은 산도와 선명한 아로마.' },
      { grapeId: 'chardonnay', role: 'primary' },
      { grapeId: 'pinot-noir', role: 'primary' },
      { grapeId: 'riesling', role: 'secondary', notes: '서늘한 기후의 리슬링.' },
      { grapeId: 'syrah-shiraz', role: 'permitted', notes: '서늘한 기후 스타일.' },
    ],
    classifications: [
      { name: '지구 (District)', description: '엘긴은 케이프 사우스 코스트 지역의 지구이다(과거 오버버그 지구의 와드였다가 독립).' },
    ],
    wineStyles: [
      { name: '소비뇽 블랑', description: '높은 산도, 시트러스, 풀향의 서늘한 기후 스타일.' },
      { name: '샤르도네, 피노 누아', description: '우아하고 산도가 높은 스타일.' },
    ],
    keyFacts: [
      '전통적으로 사과 과수원 지대였으며 포도 재배는 비교적 최근에 확대되었다',
    ],
    examTips: [
      '고도와 해양 영향이 함께 작용하는 서늘한 기후 산지의 예로 기억할 것',
    ],
  },
];
