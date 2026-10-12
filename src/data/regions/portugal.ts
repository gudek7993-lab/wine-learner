import { Region } from '../types';

export const portugalRegions: Region[] = [
  {
    id: 'portugal',
    nameKo: '포르투갈',
    nameEn: 'Portugal',
    parentId: null,
    children: ['portugal-douro', 'portugal-vinho-verde', 'portugal-alentejo'],
    level: 'country',
    summary: '대서양의 서늘한 북부부터 덥고 건조한 남부까지. 풍부한 토착 품종과 포트, 마데이라 주정강화 와인.',
    climate: {
      type: ['대서양성', '지중해성', '대륙성'],
      description: '대서양의 강한 영향을 받는 서부 해안 지역부터 내륙의 뜨겁고 건조한 대륙성 기후까지 다양하다. 북부는 서늘하고 습하며, 남부는 덥고 건조하다.',
      influencingFactors: ['대서양', '해발고도', '남북으로 다양한 기후대', '내륙 산맥'],
    },
    soils: [
      { type: ['편암(schist)', '화강암', '점토', '석회암'], description: '도우루의 편암, 비뉴 베르데의 화강암, 알렌테주의 점토와 화강암 등 지역마다 매우 다양하다.' },
    ],
    grapes: [
      { grapeId: 'tempranillo', role: 'secondary', notes: '도우루에서는 틴타 로리즈(Tinta Roriz), 알렌테주에서는 아라고네즈(Aragonez)라 부른다. 블렌드에 과일 풍미와 구조를 더한다.' },
      { grapeId: 'albarino', role: 'primary', notes: '알바리뉴(Alvarinho). 비뉴 베르데 북부 몬사웅 이 멜가수(Monção e Melgaço)의 최고 품종. 스페인의 알바리뇨와 동일.' },
      { grapeId: 'syrah-shiraz', role: 'permitted', notes: '알렌테주와 리스보아 등 남부에서 국제 품종으로 재배.' },
      { grapeId: 'touriga-nacional', role: 'primary', notes: '포르투갈 대표 품종, 당에서도 중요' },
    ],
    classifications: [
      {
        name: 'DOC/IG 시스템',
        description: '포르투갈 와인 원산지 분류 체계. EU 체계에서 DOC는 DOP(PDO), 비뉴 헤지오날은 IGP(PGI)에 해당한다.',
        levels: [
          { name: 'DOC (Denominação de Origem Controlada)', description: '최상위 원산지 통제 명칭(DOP). 도우루, 포르투, 비뉴 베르데, 알렌테주, 마데이라 등.' },
          { name: 'VR (Vinho Regional)', description: '지역 와인(IG/IGP). 테주(Tejo), 리스보아(Lisboa), 알렌테자누(Alentejano) 등. 품종 선택이 자유로워 국제 품종도 사용한다.' },
          { name: '비뉴 (Vinho)', description: '지리적 표시 없는 와인. 포르투갈 어디에서나 생산 가능.' },
        ],
      },
    ],
    wineStyles: [
      { name: '도우루 레드', description: '투리가 나시오날 중심의 풍부하고 복합적인 드라이 레드 와인' },
      { name: '비뉴 베르데', description: '가볍고 상쾌한 화이트 와인. 약간의 발포감이 특징적이다.' },
      { name: '포트 와인', description: '도우루 밸리에서 생산되는 주정강화 스위트 와인' },
      { name: '마데이라', description: '마데이라 섬에서 생산되는 주정강화 와인. 산화 숙성이 특징.' },
    ],
    keyFacts: [
      '250개 이상의 토착 포도 품종을 보유하여 품종 다양성이 매우 높다',
      '투리가 나시오날(Touriga Nacional)은 포르투갈의 가장 고귀한 적포도 품종이다. 진한 색, 꽃과 검은 과일 향, 높은 탄닌',
      '투리가 프랑카(Touriga Franca)는 도우루에서 가장 많이 재배되는 적포도 품종이다',
      '과거의 IPR 등급은 대부분 DOC로 승격되거나 폐지되어, 현재는 DOC와 비뉴 헤지오날(VR)이 핵심이다',
      '포트 와인과 마데이라 와인이라는 세계적으로 유명한 주정강화 와인을 생산한다',
    ],
    examTips: [
      '포르투갈의 토착 품종이 매우 다양하며, 투리가 나시오날이 최고 품종임을 기억할 것',
      '틴타 로리즈(Tinta Roriz) = 템프라니요, 알바리뉴(Alvarinho) = 알바리뇨의 동의어 관계를 기억할 것',
      '포트 와인과 드라이 레드 와인 모두 도우루에서 생산됨을 구분할 것',
    ],
  },
  {
    id: 'portugal-douro',
    nameKo: '도우루',
    nameEn: 'Douro',
    parentId: 'portugal',
    children: [],
    level: 'region',
    summary: '도우루강 계곡의 덥고 건조한 편암 테라스. 포트 와인과 투리가 나시오날 중심의 드라이 레드.',
    climate: {
      type: ['대륙성', '지중해성'],
      description: '도우루 강 계곡을 따라 형성된 지역. 서쪽의 바이쇼 코르구(Baixo Corgo)는 대서양 영향으로 서늘하고 습하며, 동쪽의 도우루 수페리오르는 매우 덥고 건조하다. 시마 코르구가 중간 지대이다.',
      influencingFactors: ['도우루 강 계곡', '마라웅 산맥(대서양 바람 차단)', '가파른 경사지', '해발고도'],
    },
    soils: [
      { type: ['편암(schist)'], description: '도우루의 가장 특징적인 토양. 편암은 열을 흡수하고 보관하며, 층상 구조로 포도나무 뿌리가 깊이 파고들 수 있다. 가파른 경사지의 계단식 밭(테라스)이 유명하다.' },
    ],
    grapes: [
      { grapeId: 'tempranillo', role: 'primary', notes: '틴타 로리즈(Tinta Roriz). 템프라니요의 도우루 이름. 풍부한 과일 풍미와 구조감을 제공한다.' },
      { grapeId: 'touriga-nacional', role: 'primary', notes: '포트와 드라이 레드' },
    ],
    classifications: [
      { name: 'DOC 구분', description: '같은 지역에서 주정강화 와인은 포르투(Porto) DOC, 비주정강화 와인은 도우루(Douro) DOC로 표기한다.' },
    ],
    wineStyles: [
      { name: '도우루 드라이 레드', description: '투리가 나시오날 중심의 풍부하고 복합적인 드라이 레드 와인. 최근 포트 와인보다 드라이 레드 와인의 비중이 급격히 증가하고 있으며, 세계적인 주목을 받고 있다.' },
      { name: '포트 와인', description: '발효 중 포도 증류주(아구아르덴테, 약 77% ABV)를 첨가해 발효를 멈추고 단맛을 남긴 주정강화 와인. 루비, 토니, 빈티지, 레이트 보틀드 빈티지(LBV) 등 다양한 스타일이 있다.' },
    ],
    keyFacts: [
      '편암(schist) 토양의 가파른 계단식 밭(테라스)이 유네스코 세계문화유산으로 등재되어 있다',
      '전통적으로 포트 와인 산지였으나, 현재 드라이 레드 와인 생산이 급격히 증가하고 있다',
      '투리가 나시오날(진한 색, 구조), 투리가 프랑카(가장 많이 재배, 꽃 향), 틴타 로리즈(템프라니요)가 3대 핵심 적포도 품종이다',
      '보조 품종: 틴타 바호카(Tinta Barroca, 부드러운 과일 풍미), 틴투 캉(Tinto Cão, 산도와 향)',
      '도우루 강을 따라 바이쇼 코르구, 시마 코르구, 도우루 수페리오르 세 개의 서브 존으로 나뉜다',
      '포르투갈에서 가장 오래된 법적 와인 산지 경계(1756년)를 가지고 있다',
    ],
    examTips: [
      '편암(schist) 토양과 가파른 테라스(계단식 밭)는 도우루의 핵심 키워드이다',
      '드라이 레드 와인의 성장이 최근 트렌드라는 점을 기억할 것',
      '포트 와인은 도우루에서 생산되지만, 전통적으로 빌라 노바 데 가이아(Vila Nova de Gaia)에서 숙성/출하한다',
      '1756년 도우루의 법적 경계 설정은 세계 최초의 원산지 보호 시스템 중 하나이다',
    ],
  },
  {
    id: 'portugal-vinho-verde',
    nameKo: '비뉴 베르데',
    nameEn: 'Vinho Verde',
    parentId: 'portugal',
    children: [],
    level: 'region',
    summary: '포르투갈 북서부의 서늘하고 비가 많은 대서양성 기후. 가볍고 산도 높은 화이트와 알바리뉴.',
    climate: {
      type: ['대서양성'],
      description: '포르투갈 북서부의 서늘하고 습한 대서양성 기후. 풍부한 강수량과 서늘한 기온이 가볍고 상쾌한 와인 스타일을 만들어낸다.',
      influencingFactors: ['대서양', '높은 강수량', '서늘한 기온', '미뉴(Minho) 강'],
    },
    soils: [
      { type: ['화강암', '모래'], description: '화강암 기반의 토양이 와인에 미네랄 특성을 부여한다.' },
    ],
    grapes: [
      { grapeId: 'albarino', role: 'primary', notes: '알바리뉴(Alvarinho). 비뉴 베르데에서 가장 고급인 품종. 몬사웅(Monção)과 멜가수(Melgaço) 서브 존에서 주로 재배한다. 복숭아, 살구, 시트러스 풍미.' },
    ],
    wineStyles: [
      { name: '비뉴 베르데', description: '가볍고 상쾌한 화이트 와인. 전통적으로 약간의 발포감(spritz)이 있으며, 낮은 알코올과 높은 산도가 특징이다. 알바리뉴 단일 품종 와인은 더 풍부하고 알코올도 높다. "녹색 와인"이라는 이름은 와인의 색이 아니라, 젊은(미숙한) 상태에서 마신다는 의미이다.' },
    ],
    keyFacts: [
      '"비뉴 베르데(녹색 와인)"의 이름은 와인의 색이 아닌, 젊고 신선한 상태를 의미한다',
      '알바리뉴(Alvarinho)는 스페인의 알바리뇨(Albariño)와 동일 품종이다',
      '전통적으로 약간의 발포감(spritz)이 있는 가벼운 화이트 와인이 대표적이다',
      '포르투갈에서 가장 넓은 DOC 지역이다',
      '로우레이루(Loureiro, 꽃 향)와 트라자두라(Trajadura, 부드러운 과일 풍미)도 블렌딩에 널리 쓰인다',
      '화이트가 대표적이지만 레드와 로제, 스파클링도 생산하며 알바리뉴 단일 품종 프리미엄 와인이 늘고 있다',
    ],
    examTips: [
      '"비뉴 베르데"의 "베르데"는 색이 아닌 젊음/신선함을 의미한다는 점이 시험에 출제될 수 있다',
      '알바리뉴(포르투갈) = 알바리뇨(스페인) 동의어 관계를 기억할 것',
      '가볍고 낮은 알코올, 약간의 발포감이 비뉴 베르데의 핵심 특징이다',
    ],
  },
  {
    id: 'portugal-alentejo',
    nameKo: '알렌테주',
    nameEn: 'Alentejo',
    parentId: 'portugal',
    children: [],
    level: 'region',
    summary: '포르투갈 남부의 덥고 건조한 평원. 잘 익은 과일 풍미의 부드러운 레드 블렌드.',
    climate: {
      type: ['지중해성', '대륙성'],
      description: '포르투갈 남부의 넓은 평원 지대. 포르투갈에서 가장 덥고 건조한 지역 중 하나로, 여름 기온이 40°C를 넘기도 한다.',
      influencingFactors: ['높은 기온', '낮은 강수량', '넓은 평원 지형', '내륙 위치'],
    },
    soils: [
      { type: ['화강암', '편암', '점토'], description: '지역에 따라 화강암, 편암, 점토 등 다양한 토양이 분포한다.' },
    ],
    grapes: [
      { grapeId: 'tempranillo', role: 'primary', notes: '아라고네즈(Aragonez). 템프라니요의 알렌테주 현지 이름. 풍부한 과일 풍미의 와인을 생산한다.' },
      { grapeId: 'syrah-shiraz', role: 'secondary', notes: '더운 기후에 잘 적응해 블렌드와 단일 품종 와인에 사용된다.' },
      { grapeId: 'cabernet-sauvignon', role: 'permitted', notes: '비뉴 헤지오날 알렌테자누 와인의 블렌딩에 사용.' },
      { grapeId: 'touriga-nacional', role: 'secondary', notes: '블렌드' },
    ],
    wineStyles: [
      { name: '알렌테주 레드', description: '풍부하고 과일 향이 진한 미디엄~풀 바디 레드 와인. 따뜻한 기후에서 오는 잘 익은 과일 풍미와 부드러운 탄닌이 특징이다. 가성비가 좋은 와인으로 인기가 높다.' },
    ],
    keyFacts: [
      '포르투갈에서 가장 덥고 건조한 와인 산지 중 하나이다',
      '풍부하고 과일 향이 진한 레드 와인으로 유명하며, 가성비가 좋다',
      '아라고네즈(Aragonez) = 템프라니요의 알렌테주 현지 이름이다',
      '토착 품종: 트린카데이라(Trincadeira, 레드), 알리칸트 부셰(Alicante Bouschet, 레드), 안탕 바스(Antão Vaz, 화이트), 투리가 나시오날도 재배',
      'DOC 알렌테주와 더 유연한 비뉴 헤지오날 알렌테자누(Alentejano)로 나뉜다',
      '현대적인 양조 기술 도입으로 와인 품질이 크게 향상되었다',
      '코르크 참나무(cork oak) 숲이 많으며, 세계 코르크 생산의 중심지이다',
    ],
    examTips: [
      '아라고네즈(Aragonez) = 템프라니요의 또 다른 포르투갈 동의어임을 기억할 것',
      '따뜻한 기후가 풍부하고 과일 중심적인 레드 와인 스타일을 만든다는 연결을 이해할 것',
      '비뉴 베르데(서늘, 가벼운 화이트)와 알렌테주(따뜻, 풍부한 레드)의 극명한 대비를 기억할 것',
    ],
  },
];
