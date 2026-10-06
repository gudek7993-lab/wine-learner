import { Region } from '../types';

export const germanyRegions: Region[] = [
  {
    id: 'germany',
    nameKo: '독일',
    nameEn: 'Germany',
    parentId: null,
    children: ['germany-mosel', 'germany-rheingau', 'germany-pfalz', 'germany-rheinhessen'],
    level: 'country',
    summary: '위도가 높은 서늘한 기후의 리슬링 왕국. 강변 남향 경사지에서 섬세하고 산도 높은 와인을 만든다.',
    climate: {
      type: ['서늘한 대륙성'],
      description: '유럽에서 가장 북쪽에 위치한 주요 와인 생산국 중 하나. 서늘한 기후로 인해 포도의 완전한 성숙이 어려울 수 있으나, 이것이 독일 와인의 높은 산도와 섬세한 풍미를 만들어낸다.',
      influencingFactors: ['북위 47-52도의 높은 위도', '라인 강과 모젤 강의 온도 조절 효과', '남향 가파른 경사면', '지구 온난화의 긍정적 영향'],
    },
    soils: [
      { type: ['슬레이트', '석회암', '황토', '화산토'], description: '모젤의 청색/회색 슬레이트, 라인가우의 석회암과 황토, 팔츠의 다양한 토양 등 지역마다 특색이 있다.' },
    ],
    grapes: [
      { grapeId: 'riesling', role: 'primary', notes: '독일의 가장 고귀한 품종이자 대표 품종. 높은 산도, 꽃과 과일 향, 뛰어난 테루아 표현력, 장기 숙성 시 독특한 페트롤(석유) 향이 발전한다.' },
      { grapeId: 'pinot-noir', role: 'primary', notes: '슈패트부르군더(Spätburgunder). 피노 누아의 독일 이름. 독일에서 가장 많이 재배되는 적포도 품종으로, 바덴, 팔츠, 아르(Ahr)에서 주로 재배한다.' },
      { grapeId: 'pinot-grigio-gris', role: 'secondary', notes: '그라우부르군더(Grauburgunder). 바덴과 팔츠에서 드라이하고 풍부한 스타일로 생산.' },
      { grapeId: 'chardonnay', role: 'permitted', notes: '바덴과 팔츠 등 따뜻한 지역에서 재배가 늘고 있다.' },
    ],
    classifications: [
      {
        name: '독일 와인 품질 등급',
        description: 'EU 체계에 맞춘 독일 와인법의 기본 등급.',
        levels: [
          { name: '프레디카츠바인 (Prädikatswein)', description: '최상위 PDO 와인. 수확 시 포도 당도(머스트 중량)에 따라 6개 프레디카트로 나뉜다. 가당(샤프탈리제이션) 금지.' },
          { name: '크발리테츠바인 (Qualitätswein)', description: '13개 지정 재배 지역(안바우게비트)의 PDO 와인. 가당 허용. 흔히 QbA라고 부른다.' },
          { name: '란트바인 (Landwein)', description: 'PGI 지역 와인. 대부분 트로켄 또는 할프트로켄.' },
          { name: '도이처 바인 (Deutscher Wein)', description: '지리적 표시 없는 와인.' },
        ],
      },
      {
        name: '프레디카츠바인 (Prädikatswein) 시스템',
        description: '수확 시 포도의 당도(머스트 중량)에 따라 등급을 구분하는 독일 고유의 분류 체계. 설탕 첨가(샤프탈리제이션)가 금지된다. 등급은 최소 당도를 뜻할 뿐 완성된 와인의 당도를 의미하지는 않는다.',
        levels: [
          { name: '카비넷 (Kabinett)', description: '가장 낮은 프레디카트 등급. 가볍고 섬세한 스타일. 드라이부터 약간 달콤한 스타일까지.' },
          { name: '슈패트레제 (Spätlese)', description: '"늦은 수확"이라는 뜻. 카비넷보다 더 농축된 풍미. 드라이부터 미디엄 스위트까지.' },
          { name: '아우스레제 (Auslese)', description: '"엄선 수확". 완전히 익은 포도를 선별하여 수확. 달콤한 스타일이 많지만 드라이도 가능.' },
          { name: '베렌아우스레제 (Beerenauslese/BA)', description: '"알갱이 엄선 수확". 보트리티스(귀부병)에 감염된 포도알을 하나씩 선별. 매우 달콤하고 농축된 스위트 와인.' },
          { name: '트로켄베렌아우스레제 (Trockenbeerenauslese/TBA)', description: '"건조된 알갱이 엄선 수확". 보트리티스로 건포도처럼 쪼그라든 포도알로 만든 극도로 달콤한 와인. 가장 희귀하고 비싼 독일 와인.' },
          { name: '아이스바인 (Eiswein)', description: '포도가 나무에서 자연 동결된 상태(-7°C 이하)에서 수확하여 압착. 최소 당도는 BA와 같다. 귀부가 아닌 동결로 농축해 순수한 과일 풍미와 높은 산도가 특징. 기후 변화로 점점 생산이 어려워지고 있다.' },
        ],
      },
      {
        name: 'VDP (Verband Deutscher Prädikatsweingüter)',
        description: '독일 우수 와인 생산자 협회의 자체 분류 체계. 부르고뉴식 포도밭 등급 시스템을 채택했다.',
        levels: [
          { name: '구츠바인 (Gutswein)', description: '에스테이트 와인. 가장 기본 등급.' },
          { name: '오르츠바인 (Ortswein)', description: '마을 단위 와인.' },
          { name: '에르스테 라게 (Erste Lage)', description: '1등급 포도밭. 부르고뉴의 프리미에 크뤼에 해당.' },
          { name: '그로세 라게 (Grosse Lage)', description: '최상위 포도밭. 부르고뉴의 그랑 크뤼에 해당. 그로세스 게벡스(Grosses Gewächs/GG)는 그로세 라게의 드라이 와인.' },
        ],
      },
      {
        name: '당도 표시',
        description: '독일 와인 라벨에 표시되는 당도 용어.',
        levels: [
          { name: '트로켄 (Trocken)', description: '드라이. 잔당 4g/L 이하, 산도가 충분하면 최대 9g/L까지 허용.' },
          { name: '할프트로켄 (Halbtrocken)', description: '오프드라이. 잔당 12g/L 이하, 산도가 충분하면 최대 18g/L까지 허용.' },
          { name: '파인헤르프 (Feinherb)', description: '비공식 용어로 할프트로켄과 비슷한 오프드라이 스타일.' },
        ],
      },
    ],
    wineStyles: [
      { name: '트로켄 리슬링', description: '드라이 리슬링. 높은 산도와 미네랄 풍미가 특징적이며, 그로세스 게벡스(GG)가 최상위 드라이 리슬링이다.' },
      { name: '오프드라이 리슬링', description: '약간의 잔당이 높은 산도와 균형을 이루는 스타일. 카비넷과 슈패트레제 등급에서 많이 볼 수 있다.' },
      { name: '스위트 리슬링', description: 'BA, TBA, 아이스바인 등 고당도 스위트 와인. 높은 산도가 단맛과 균형을 이룬다.' },
      { name: '슈패트부르군더', description: '피노 누아의 독일 이름. 과거보다 더 진하고 오크를 사용한 모던 스타일이 증가하고 있다.' },
    ],
    keyFacts: [
      '프레디카츠바인 등급(최소 당도 순): 카비넷 → 슈패트레제 → 아우스레제 → BA(베렌아우스레제) → TBA(트로켄베렌아우스레제), 아이스바인은 BA와 같은 최소 당도',
      'Trocken = 드라이, Halbtrocken = 오프드라이',
      '기타 주요 품종: 뮐러투르가우(Müller-Thurgau, 재배 면적 2위), 실바너(Silvaner, 프랑켄), 도른펠더(Dornfelder, 진한 색의 레드)',
      'VDP 그로세 라게(Grosse Lage)는 독일 최상위 포도밭 등급이다',
      '그로세스 게벡스(Grosses Gewächs/GG)는 그로세 라게의 드라이 와인을 의미한다',
      '리슬링은 독일 전체 포도밭의 약 4분의 1을 차지하는 최다 재배 품종이다',
      '아이스바인은 -7°C 이하에서 수확해야 하며, 기후 변화로 생산이 점점 어려워지고 있다',
    ],
    examTips: [
      '프레디카츠바인 6단계를 반드시 암기할 것: 카비넷 → 슈패트레제 → 아우스레제 → BA → TBA, 그리고 아이스바인(BA와 같은 최소 당도)',
      'Trocken(드라이)과 Halbtrocken(오프드라이)은 당도 표시이고, 프레디카트(Kabinett 등)는 수확 시 포도 당도 등급임을 구분할 것',
      'VDP 분류: 구츠바인 → 오르츠바인 → 에르스테 라게 → 그로세 라게 순서로 암기',
      'GG(Grosses Gewächs) = 그로세 라게의 드라이 와인이라는 점을 기억할 것',
      'BA와 TBA는 보트리티스(귀부병), 아이스바인은 자연 동결이라는 차이를 명확히 할 것',
    ],
  },
  {
    id: 'germany-mosel',
    nameKo: '모젤',
    nameEn: 'Mosel',
    parentId: 'germany',
    children: [],
    level: 'region',
    summary: '모젤강의 가파른 슬레이트 경사지. 가볍고 산도 높으며 섬세한 리슬링의 대표 산지.',
    climate: {
      type: ['서늘한 대륙성'],
      description: '독일에서 가장 서늘한 와인 산지 중 하나. 모젤 강의 급격한 곡류가 남향 경사면을 만들어 일조량을 극대화한다. 강의 온도 조절 효과와 슬레이트의 열 반사가 포도 성숙을 돕는다.',
      influencingFactors: ['모젤 강의 온도 조절과 빛 반사', '극도로 가파른 남향, 남서향 경사면', '슬레이트의 열 흡수/반사', '서늘한 기후'],
    },
    soils: [
      { type: ['청색 슬레이트', '회색 슬레이트', '적색 슬레이트'], description: '모젤의 상징적인 토양. 슬레이트(점판암)가 낮 동안 열을 흡수하여 밤에 방출함으로써, 서늘한 기후에서 포도 성숙을 돕는다. 슬레이트 색상에 따라 와인의 풍미가 달라진다.' },
    ],
    grapes: [
      { grapeId: 'riesling', role: 'primary', notes: '모젤 포도밭의 약 60%를 차지하는 압도적인 품종. 모젤의 서늘한 기후에서 매우 높은 산도와 섬세한 꽃/과일 향, 슬레이트 미네랄 풍미를 가진 리슬링을 생산한다.' },
    ],
    wineStyles: [
      { name: '모젤 리슬링', description: '가볍고 섬세한 바디(오프드라이 카비넷은 알코올 8% 안팎)에 매우 높은 산도와 강렬한 꽃/과일 향을 가진 리슬링. 약간의 잔당과 높은 산도의 긴장감 있는 균형이 모젤 리슬링의 핵심이다. 슬레이트에서 오는 미네랄 풍미가 독특하다.' },
    ],
    keyFacts: [
      '유럽에서 가장 가파른 포도밭 중 하나인 칼몽(Calmont)을 비롯해 경사가 매우 가파른 포도밭이 많다',
      '슬레이트 토양이 열을 흡수/반사하여 서늘한 기후에서 포도 성숙을 돕는다',
      '리슬링이 전체 포도밭의 약 60%를 차지한다',
      '낮은 알코올, 높은 산도, 섬세한 풍미가 모젤 리슬링의 특징이다. 최근에는 드라이(트로켄) 스타일도 늘고 있다',
      '경사가 가팔라 기계화가 어렵고 대부분 손으로 작업해 생산비가 높다',
      '위르치거 뷔르츠가르텐, 베른카스텔러 독터 등 유명 포도밭이 있다',
    ],
    examTips: [
      '모젤 = 슬레이트 + 가파른 경사 + 가벼운 바디 + 높은 산도 리슬링으로 기억할 것',
      '라인가우 리슬링(더 풍부)과 모젤 리슬링(더 가볍고 섬세)의 스타일 차이를 구분할 것',
      '슬레이트가 열을 흡수/반사하는 역할이 서늘한 기후에서의 포도 성숙에 핵심적임을 이해할 것',
    ],
  },
  {
    id: 'germany-rheingau',
    nameKo: '라인가우',
    nameEn: 'Rheingau',
    parentId: 'germany',
    children: [],
    level: 'region',
    summary: '라인강이 동서로 흐르며 만든 남향 경사지. 모젤보다 바디가 있는 드라이 리슬링.',
    climate: {
      type: ['온난한 대륙성'],
      description: '라인 강이 동서로 흐르면서 남향 경사면을 형성하여 일조량이 풍부하다. 타우누스 산맥이 북풍을 차단하여 모젤보다 온난하다.',
      influencingFactors: ['라인 강의 동서 흐름(남향 경사면 형성)', '타우누스 산맥(북풍 차단)', '라인 강의 온도 조절', '풍부한 일조량'],
    },
    soils: [
      { type: ['황토', '이회암', '슬레이트', '석영암'], description: '다양한 토양이 분포한다. 라인 강 인근 낮은 곳의 황토와 이회암부터 언덕 위쪽의 슬레이트와 석영암까지 와인에 다양한 특성을 부여한다.' },
    ],
    grapes: [
      { grapeId: 'riesling', role: 'primary', notes: '라인가우 포도밭의 약 78%를 차지한다. 모젤보다 더 풍부하고 구조감 있는 리슬링을 생산한다.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '슈패트부르군더. 아스만스하우젠(Assmannshausen) 마을의 피노 누아가 유명하다' },
    ],
    wineStyles: [
      { name: '라인가우 리슬링', description: '모젤보다 더 풍부한 바디와 구조감을 가진 리슬링. 복숭아, 살구 등 핵과류 풍미와 미네랄이 특징적이다. 드라이 스타일(트로켄)이 많으며, 그로세스 게벡스(GG) 급의 최고급 드라이 리슬링을 생산한다.' },
    ],
    keyFacts: [
      '라인가우의 리슬링은 모젤보다 더 풍부한 바디(fuller body)를 가진다',
      '라인 강이 동서로 흐르면서 만드는 남향 경사면이 핵심 지형적 특징이다',
      '슐로스 요하니스베르크(Schloss Johannisberg)는 리슬링 역사에서 가장 중요한 와이너리 중 하나이다',
      '드라이(Trocken) 리슬링 생산의 선도 지역이다',
      '독일 리슬링의 고향으로 여겨지는 역사적인 산지이다',
    ],
    examTips: [
      '모젤 리슬링(가볍고 섬세)과 라인가우 리슬링(더 풍부한 바디)의 차이를 명확히 구분할 것',
      '라인 강의 동서 흐름이 남향 경사면을 형성한다는 지리적 특징을 기억할 것',
      '슈패트레제(늦은 수확)의 개념이 18세기 슐로스 요하니스베르크에서 수확 허가가 늦게 도착하면서 우연히 생겨났다는 일화를 기억할 것',
    ],
  },
  {
    id: 'germany-pfalz',
    nameKo: '팔츠',
    nameEn: 'Pfalz',
    parentId: 'germany',
    children: [],
    level: 'region',
    summary: '하르트 산맥이 비를 막아 따뜻하고 건조한 산지. 풍부한 드라이 리슬링과 슈패트부르군더.',
    climate: {
      type: ['온난한 대륙성'],
      description: '독일에서 가장 따뜻하고 건조한 와인 산지 중 하나. 하르트 산맥(Haardt Mountains)이 서쪽의 비와 찬 바람을 차단하여 온난하고 일조량이 풍부하다.',
      influencingFactors: ['하르트 산맥(비 차단)', '풍부한 일조량', '따뜻하고 건조한 기후', '프랑스 알자스와 인접'],
    },
    soils: [
      { type: ['석회암', '사암', '현무암', '점토'], description: '매우 다양한 토양 구성. 석회암, 사암, 현무암 등이 분포하여 다양한 스타일의 와인 생산이 가능하다.' },
    ],
    grapes: [
      { grapeId: 'riesling', role: 'primary', notes: '팔츠는 독일에서 리슬링을 가장 많이 재배하는 지역이다. 따뜻한 기후 덕분에 풍부하고 과일 향이 진한 리슬링을 생산한다.' },
      { grapeId: 'pinot-noir', role: 'primary', notes: '슈패트부르군더. 팔츠는 독일 피노 누아의 주요 산지이다. 따뜻한 기후에서 더 농축된 스타일을 생산한다.' },
      { grapeId: 'pinot-grigio-gris', role: 'secondary', notes: '그라우부르군더(Grauburgunder). 풍부한 드라이 화이트.' },
    ],
    wineStyles: [
      { name: '팔츠 리슬링', description: '독일의 다른 지역보다 더 풍부하고 과일 향이 진한 리슬링. 드라이 스타일이 주류이며, 알코올 도수도 상대적으로 높다.' },
      { name: '팔츠 슈패트부르군더', description: '독일에서 가장 따뜻한 산지에서 생산하는 피노 누아. 더 진하고 농축된 스타일로, 국제적인 수준의 품질을 보인다.' },
    ],
    keyFacts: [
      '독일에서 가장 따뜻하고 건조한 주요 와인 산지 중 하나이다',
      '도른펠더(Dornfelder) 같은 교배 적포도 품종도 널리 재배된다',
      '리슬링 재배 면적이 독일에서 가장 넓다',
      '슈패트부르군더(피노 누아)의 주요 산지로, 레드 와인 비중이 높다',
      '하르트 산맥은 보주 산맥의 북쪽 연장으로, 팔츠는 알자스 북쪽에 바로 맞닿아 있다',
      '독일에서 두 번째로 넓은 와인 산지(라인헤센 다음)이다',
    ],
    examTips: [
      '팔츠 = 독일에서 가장 따뜻한 산지 = 리슬링 + 슈패트부르군더(피노 누아) 모두 중요',
      '팔츠와 알자스가 같은 산맥의 양쪽에 위치한다는 지리적 관계를 기억할 것',
      '따뜻한 기후 = 더 풍부한 바디의 리슬링이라는 연결을 이해할 것',
    ],
  },
  {
    id: 'germany-rheinhessen',
    nameKo: '라인헤센',
    nameEn: 'Rheinhessen',
    parentId: 'germany',
    children: [],
    level: 'region',
    summary: '독일 최대 재배 지역. 대량 생산에서 품질 중심으로 변화 중이며 다양한 품종을 재배.',
    climate: {
      type: ['온난한 대륙성'],
      description: '라인 강의 곡류 안쪽에 위치하여 보호받는 지형. 독일의 주요 와인 산지 중 비교적 온난한 기후를 가진다.',
      influencingFactors: ['라인 강의 보호 효과', '비교적 온난한 기후', '다양한 토양과 미기후'],
    },
    soils: [
      { type: ['황토', '석회암', '이회암', '사질토'], description: '매우 다양한 토양이 분포하여 다양한 품종과 스타일의 와인 생산이 가능하다.' },
    ],
    grapes: [
      { grapeId: 'riesling', role: 'primary', notes: '최근 품질 중심의 리슬링 생산이 증가하고 있다. 나커하임(Nackenheim), 니어슈타인(Nierstein) 등의 프리미엄 포도밭이 유명하다.' },
      { grapeId: 'pinot-noir', role: 'secondary', notes: '슈패트부르군더. 재배가 늘고 있다.' },
    ],
    wineStyles: [
      { name: '라인헤센 리슬링', description: '다양한 스타일의 리슬링을 생산한다. 프리미엄 포도밭의 리슬링은 뛰어난 품질을 보여주며, 벌크 와인부터 최상위 와인까지 폭넓은 범위를 가진다.' },
      { name: '라인헤센 다양한 품종', description: '독일에서 가장 넓은 산지답게 뮐러투르가우, 실바너, 도른펠더 등 다양한 품종의 와인을 생산한다.' },
    ],
    keyFacts: [
      '독일에서 가장 넓은 와인 산지이다 (전체의 약 26%)',
      '과거에는 대량 생산 위주였으나, 최근 품질 중심으로 급격히 변화하고 있다',
      '뮐러투르가우(Müller-Thurgau)가 여전히 넓게 재배되며, 실바너(Silvaner)와 도른펠더(Dornfelder)도 중요하다',
      '로테 한(Roter Hang, 붉은 경사면)은 적색 토양의 프리미엄 포도밭 지대이다',
      '니어슈타인(Nierstein)과 나커하임(Nackenheim)이 프리미엄 포도밭으로 유명하다',
    ],
    examTips: [
      '라인헤센 = 독일 최대 산지 = 가장 다양한 품종과 스타일로 기억할 것',
      '과거 대량 생산에서 현재 품질 중심으로의 변화 트렌드를 이해할 것',
      '독일 4대 주요 와인 산지(모젤, 라인가우, 팔츠, 라인헤센)의 특성을 비교할 수 있어야 한다',
    ],
  },
];
