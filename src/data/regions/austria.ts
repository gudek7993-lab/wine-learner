import { Region } from '../types';

export const austriaRegions: Region[] = [
  {
    id: 'austria',
    nameKo: '오스트리아',
    nameEn: 'Austria',
    parentId: null,
    children: ['austria-niederosterreich', 'austria-burgenland', 'austria-steiermark'],
    level: 'country',
    summary: '그뤼너 벨트리너와 리슬링의 드라이 화이트, 블라우프랑키쉬와 츠바이겔트의 레드, 그리고 노이지들러 호수 주변의 귀부 스위트 와인으로 유명한 중부 유럽의 서늘한 대륙성 와인 산지이다.',
    climate: {
      type: ['대륙성', '서늘한 대륙성', '판노니아 대륙성(동부)'],
      description: '대부분의 포도밭은 알프스 동쪽 끝자락, 동부 지역(니더외스터라이히, 부르겐란트, 빈, 슈타이어마르크)에 집중되어 있다. 짧고 더운 여름과 춥고 긴 겨울의 대륙성 기후로, 동쪽으로 갈수록 헝가리 평원에서 오는 따뜻한 판노니아 기후의 영향이 강해지고, 북서쪽(발트피어텔)에서는 서늘한 공기가 유입된다. 따뜻한 낮과 서늘한 밤의 큰 일교차가 산도와 아로마를 보존한다.',
      influencingFactors: ['도나우(다뉴브) 강', '판노니아 평원의 따뜻한 공기(동쪽)', '발트피어텔의 서늘한 공기(북서쪽)', '노이지들러 호수', '알프스 산맥', '일교차'],
    },
    soils: [
      { type: ['뢰스(황토)'], description: '바람에 날려 쌓인 미세한 실트 토양. 크렘스탈, 캄프탈, 바그람의 낮은 경사지에 많으며 보수력이 좋아 그뤼너 벨트리너에 잘 맞는다.' },
      { type: ['편마암', '화강암(원생암)'], description: '바하우와 캄프탈, 크렘스탈의 가파른 경사지에 나타나는 척박한 원생암 토양. 배수가 좋고 리슬링에 적합하다.' },
      { type: ['석회암', '편암', '점토', '모래'], description: '부르겐란트와 슈타이어마르크에서는 석회암, 편암, 점토, 화산성 토양 등 다양한 토양이 나타난다.' },
    ],
    grapes: [
      { grapeId: 'gruner-veltliner', role: 'primary', notes: '오스트리아에서 가장 많이 재배되는 상징 품종. 흰후추, 사과, 시트러스, 허브 풍미. 가벼운 일상 와인부터 장기 숙성형 고급 와인까지 생산된다.' },
      { grapeId: 'riesling', role: 'primary', notes: '재배 면적은 작지만 바하우, 크렘스탈, 캄프탈의 경사지 원생암 토양에서 세계적 수준의 드라이 리슬링을 생산한다.' },
      { grapeId: 'sauvignon-blanc', role: 'secondary', notes: '슈타이어마르크(특히 쥐트슈타이어마르크)의 대표 품종. 신선하고 풀향과 시트러스, 미네랄이 특징.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '부르겐란트와 슈타이어마르크(현지명 모리용 Morillon)에서 재배된다.' },
      { grapeId: 'pinot-noir', role: 'permitted', notes: '현지명 블라우부르군더(Blauburgunder). 서늘한 지역에서 소량 재배.' },
    ],
    classifications: [
      {
        name: 'DAC (Districtus Austriae Controllatus)',
        description: '지역 고유의 전형적인 스타일을 법으로 정한 원산지 체계. 각 DAC마다 허용 품종과 스타일이 지정된다. 2003년 바인피어텔 DAC가 최초로 도입되었다.',
        levels: [
          { name: 'Gebietswein (지역 와인)', description: 'DAC 이름만 표기하는 기본 등급.' },
          { name: 'Ortswein (마을 와인)', description: '특정 마을 이름을 표기하는 중간 등급.' },
          { name: 'Riedenwein (단일 포도밭 와인)', description: '단일 포도밭(Ried) 이름을 표기하는 최상위 등급.' },
        ],
      },
      {
        name: '품질 등급 (Qualitätswein / Prädikatswein)',
        description: '독일과 유사하게 수확 시 당도(KMW)를 기준으로 한 등급. 프레디카츠바인에는 슈페트레제, 아우스레제, 베렌아우스레제, 아이스바인, 슈트로바인, 아우스브루흐, 트로켄베렌아우스레제가 있다.',
      },
    ],
    wineStyles: [
      { name: '그뤼너 벨트리너 (드라이)', description: '가벼운 스타일은 신선한 시트러스와 녹색 사과, 흰후추. 고급 스타일은 풀바디에 가깝고 핵과류와 향신료 풍미가 있으며 병 숙성으로 꿀과 토스트 향이 생긴다.' },
      { name: '드라이 리슬링', description: '높은 산도와 시트러스, 핵과류, 미네랄 풍미. 독일보다 대체로 알코올과 바디가 높은 드라이 스타일이다.' },
      { name: '블라우프랑키쉬, 츠바이겔트 레드', description: '블라우프랑키쉬는 높은 산도와 단단한 타닌, 블랙체리와 향신료 풍미. 츠바이겔트는 부드럽고 과일 중심의 레드. 주로 부르겐란트에서 생산된다.' },
      { name: '귀부 스위트 와인', description: '노이지들러 호수 주변의 습한 가을 아침 안개가 보트리티스를 유발하여 베렌아우스레제, 트로켄베렌아우스레제, 루스터 아우스브루흐 같은 스위트 와인을 만든다.' },
    ],
    keyFacts: [
      '그뤼너 벨트리너는 오스트리아에서 가장 많이 재배되는 품종이다',
      '주요 레드 품종은 츠바이겔트(가장 많이 재배되는 레드), 블라우프랑키쉬, 장크트 라우렌트(St. Laurent)이다',
      'DAC는 지역 + 품종 + 스타일을 묶은 원산지 체계이며 2003년 바인피어텔 DAC가 최초이다',
      'DAC 피라미드: 게비츠바인(지역) → 오르츠바인(마을) → 리덴바인(단일 포도밭)',
      '주요 와인 생산 주: 니더외스터라이히(가장 큼), 부르겐란트, 슈타이어마르크, 빈',
      '빈(Wien)은 수도 안에 상업적 포도밭이 있는 드문 도시로, 여러 품종을 함께 심고 수확하는 비너 게미슈터 자츠(Wiener Gemischter Satz) DAC가 유명하다',
    ],
    examTips: [
      '그뤼너 벨트리너의 대표 풍미(흰후추, 녹색 사과, 시트러스)와 토양(뢰스) 연결을 기억할 것',
      '바하우의 비네아 바하우 등급(슈타인페더 < 페더슈필 < 스마라그트) 알코올 기준이 자주 출제된다',
      '동쪽의 따뜻한 판노니아 공기와 북서쪽의 서늘한 공기가 만나는 기후 구조를 설명할 수 있어야 한다',
      '노이지들러 호수가 귀부 와인 생산에 유리한 이유(습한 아침 안개, 따뜻한 오후)를 서술형으로 대비할 것',
    ],
  },
  {
    id: 'austria-niederosterreich',
    nameKo: '니더외스터라이히',
    nameEn: 'Niederösterreich (Lower Austria)',
    parentId: 'austria',
    children: ['austria-wachau', 'austria-kamptal', 'austria-kremstal'],
    level: 'region',
    summary: '오스트리아에서 가장 큰 와인 생산 주로, 도나우 강을 따라 바하우, 크렘스탈, 캄프탈 등 그뤼너 벨트리너와 리슬링의 명산지가 이어진다.',
    climate: {
      type: ['서늘한 대륙성'],
      description: '대륙성 기후로 여름은 따뜻하고 건조하며 겨울은 춥다. 도나우 강 유역에서는 동쪽의 따뜻한 판노니아 공기와 북서쪽 발트피어텔의 서늘한 공기가 교차하여 큰 일교차를 만들고, 이것이 향과 산도를 보존한다.',
      influencingFactors: ['도나우 강(열 보존, 온도 완화)', '판노니아 평원의 따뜻한 공기', '발트피어텔의 서늘한 북서풍', '낮은 강수량'],
    },
    soils: [
      { type: ['뢰스'], description: '낮은 경사지와 평지에 깊게 쌓인 황토. 그뤼너 벨트리너에 적합하다.' },
      { type: ['편마암', '화강암', '편암'], description: '강가의 가파른 계단식 경사지에 나타나는 원생암. 리슬링이 주로 재배된다.' },
    ],
    grapes: [
      { grapeId: 'gruner-veltliner', role: 'primary', notes: '지역 전반에서 가장 중요한 품종. 바인피어텔은 가벼운 후추 향 스타일로 유명하다.' },
      { grapeId: 'riesling', role: 'primary', notes: '바하우, 크렘스탈, 캄프탈의 원생암 경사지에서 고품질 드라이 리슬링.' },
      { grapeId: 'pinot-noir', role: 'permitted', notes: '테르멘레기온 등에서 소량 재배.' },
    ],
    classifications: [
      {
        name: '니더외스터라이히의 주요 DAC',
        description: '바인피어텔, 바하우, 크렘스탈, 캄프탈, 트라이젠탈, 바그람, 카르눈툼, 테르멘레기온 등 대부분의 하위 지역이 DAC로 지정되어 있다.',
      },
    ],
    wineStyles: [
      { name: '그뤼너 벨트리너', description: '가볍고 후추 향이 있는 일상 와인부터 단일 포도밭의 농축된 장기 숙성형까지 다양하다.' },
      { name: '드라이 리슬링', description: '원생암 경사지에서 생산되는 높은 산도, 핵과류와 미네랄 풍미의 와인.' },
    ],
    keyFacts: [
      '오스트리아 최대의 와인 생산 주이다',
      '바인피어텔(Weinviertel)은 가장 넓은 하위 지역이며 오스트리아 최초의 DAC(2003년)이다',
      '도나우 강을 따라 서쪽에서 동쪽으로 바하우 → 크렘스탈 → 캄프탈(지류 캄프 강) 순으로 이어진다',
      '카르눈툼(Carnuntum)과 테르멘레기온(Thermenregion)은 레드 와인 비중이 상대적으로 높다',
    ],
    examTips: [
      '바하우, 크렘스탈, 캄프탈이 모두 니더외스터라이히에 속한다는 점을 정리할 것',
      '원생암 경사지 = 리슬링, 뢰스 = 그뤼너 벨트리너라는 토양과 품종의 대응 관계를 기억할 것',
    ],
  },
  {
    id: 'austria-wachau',
    nameKo: '바하우',
    nameEn: 'Wachau',
    parentId: 'austria-niederosterreich',
    children: [],
    level: 'sub-region',
    summary: '도나우 강변의 가파른 계단식 포도밭에서 오스트리아 최고 수준의 드라이 그뤼너 벨트리너와 리슬링을 생산하는 유네스코 세계문화유산 지역이다.',
    climate: {
      type: ['서늘한 대륙성'],
      description: '니더외스터라이히 주요 산지 중 가장 서쪽에 있어 서늘하다. 강수량이 적어 관개가 필요한 경우도 있다. 밤에는 북서쪽 발트피어텔에서 서늘한 공기가 내려오고, 낮에는 동쪽에서 따뜻한 판노니아 공기가 강을 따라 들어와 큰 일교차를 만든다. 도나우 강은 열을 저장하여 온도를 완화한다.',
      influencingFactors: ['도나우 강', '발트피어텔의 서늘한 밤 공기', '판노니아의 따뜻한 낮 공기', '남향의 가파른 계단식 경사지', '낮은 강수량'],
    },
    soils: [
      { type: ['편마암', '화강암'], description: '가파른 경사지의 척박하고 배수가 좋은 원생암 토양. 리슬링이 주로 이곳에 심어진다.' },
      { type: ['뢰스', '모래', '충적토'], description: '경사지 하단과 강가 평지의 깊은 토양. 그뤼너 벨트리너가 주로 재배된다.' },
    ],
    grapes: [
      { grapeId: 'gruner-veltliner', role: 'primary', notes: '가장 많이 재배되는 품종. 주로 뢰스 토양의 낮은 경사지에 심는다.' },
      { grapeId: 'riesling', role: 'primary', notes: '가장 높고 가파른 원생암 계단밭에서 재배되어 농축되고 장기 숙성 가능한 드라이 리슬링을 만든다.' },
    ],
    classifications: [
      {
        name: '비네아 바하우 (Vinea Wachau)',
        description: '바하우 생산자 협회의 자체 등급. 모두 드라이 와인이며 보당(챕탈리제이션)을 하지 않는다.',
        levels: [
          { name: '슈타인페더 (Steinfeder)', description: '최대 알코올 11.5%. 가볍고 신선한 스타일.' },
          { name: '페더슈필 (Federspiel)', description: '알코올 11.5-12.5%. 중간 바디의 우아한 스타일.' },
          { name: '스마라그트 (Smaragd)', description: '최소 알코올 12.5%. 가장 잘 익은 포도로 만든 풀바디, 장기 숙성형 와인.' },
        ],
      },
      {
        name: '바하우 DAC',
        description: '2020년 빈티지부터 도입. 지역 와인, 마을 와인, 단일 포도밭(Ried) 와인의 3단계로 구성된다.',
      },
    ],
    wineStyles: [
      { name: '스마라그트 그뤼너 벨트리너', description: '풀바디에 핵과류, 흰후추, 향신료 풍미. 병 숙성으로 복합미가 커진다.' },
      { name: '스마라그트 리슬링', description: '높은 산도와 농축된 복숭아, 살구, 시트러스, 미네랄 풍미. 장기 숙성이 가능하다.' },
      { name: '페더슈필, 슈타인페더', description: '더 가볍고 신선하며 일찍 마시기 좋은 스타일.' },
    ],
    keyFacts: [
      '도나우 강변의 계단식 포도밭이 있는 지역으로, 바하우 계곡은 유네스코 세계문화유산이다',
      '비네아 바하우 등급: 슈타인페더(11.5% 이하) < 페더슈필(11.5-12.5%) < 스마라그트(12.5% 이상)',
      '스마라그트(Smaragd)는 포도밭에 사는 에메랄드빛 도마뱀에서 유래한 이름이다',
      '계단밭은 기계화가 어려워 수작업이 필요하므로 생산 비용이 높다',
    ],
    examTips: [
      '세 등급의 알코올 기준과 스타일 차이를 반드시 암기할 것',
      '서늘한 밤 공기와 따뜻한 낮 공기가 만드는 일교차가 산도와 아로마 보존에 미치는 영향을 서술할 수 있어야 한다',
      '계단식 경사지의 장점(일조량, 배수)과 단점(높은 인건비)을 함께 정리할 것',
    ],
  },
  {
    id: 'austria-kamptal',
    nameKo: '캄프탈',
    nameEn: 'Kamptal',
    parentId: 'austria-niederosterreich',
    children: [],
    level: 'sub-region',
    summary: '도나우의 지류인 캄프 강 유역, 랑엔로이스 마을 주변에서 그뤼너 벨트리너와 리슬링 DAC 와인을 생산하는 지역으로 하일리겐슈타인 포도밭이 유명하다.',
    climate: {
      type: ['서늘한 대륙성'],
      description: '판노니아 평원의 따뜻한 공기와 북쪽 발트피어텔의 서늘한 공기가 만나 큰 일교차를 보인다. 바하우보다 약간 따뜻하고 개방된 지형이다.',
      influencingFactors: ['캄프 강', '발트피어텔의 서늘한 공기', '판노니아의 따뜻한 공기', '일교차'],
    },
    soils: [
      { type: ['뢰스'], description: '넓게 분포하는 황토. 그뤼너 벨트리너에 적합하다.' },
      { type: ['사암', '화산성 퇴적암'], description: '하일리겐슈타인(Heiligenstein) 언덕의 매우 오래된 사암과 화산성 퇴적암 토양. 리슬링으로 유명하다.' },
    ],
    grapes: [
      { grapeId: 'gruner-veltliner', role: 'primary', notes: '캄프탈 DAC의 주력 품종.' },
      { grapeId: 'riesling', role: 'primary', notes: '하일리겐슈타인 등 경사지의 단일 포도밭 리슬링이 유명하다.' },
    ],
    classifications: [
      { name: '캄프탈 DAC', description: '그뤼너 벨트리너와 리슬링만 DAC로 표기할 수 있다. 지역, 마을, 단일 포도밭 등급이 있다.' },
    ],
    wineStyles: [
      { name: '그뤼너 벨트리너', description: '후추 향과 과일 풍미의 균형이 좋은 드라이 화이트.' },
      { name: '드라이 리슬링', description: '높은 산도와 미네랄, 시트러스와 핵과류 풍미.' },
    ],
    keyFacts: [
      '중심 마을은 랑엔로이스(Langenlois)이다',
      '캄프 강(Kamp)은 도나우의 지류이며 지역 이름의 유래가 되었다',
      'DAC 허용 품종은 그뤼너 벨트리너와 리슬링이다',
    ],
    examTips: [
      '캄프탈, 크렘스탈, 바하우 모두 그뤼너 벨트리너와 리슬링이 중심이라는 공통점을 기억할 것',
    ],
  },
  {
    id: 'austria-kremstal',
    nameKo: '크렘스탈',
    nameEn: 'Kremstal',
    parentId: 'austria-niederosterreich',
    children: [],
    level: 'sub-region',
    summary: '바하우 동쪽, 크렘스 시 주변의 지역으로 원생암 경사지의 리슬링과 깊은 뢰스 토양의 그뤼너 벨트리너를 생산한다.',
    climate: {
      type: ['서늘한 대륙성'],
      description: '바하우와 비슷한 기후이나 동쪽으로 갈수록 판노니아의 따뜻한 영향이 커진다. 서늘한 밤 공기로 큰 일교차가 생긴다.',
      influencingFactors: ['도나우 강', '판노니아의 따뜻한 공기', '발트피어텔의 서늘한 공기'],
    },
    soils: [
      { type: ['원생암(편마암, 화강암)'], description: '크렘스 서쪽, 바하우와 접한 경사지의 척박한 토양. 리슬링에 적합하다.' },
      { type: ['뢰스'], description: '크렘스 동쪽과 남쪽의 깊은 황토층. 그뤼너 벨트리너에 적합하다.' },
    ],
    grapes: [
      { grapeId: 'gruner-veltliner', role: 'primary', notes: '뢰스 토양에서 재배되는 주력 품종.' },
      { grapeId: 'riesling', role: 'primary', notes: '원생암 경사지에서 바하우와 비슷한 스타일의 리슬링을 생산.' },
    ],
    classifications: [
      { name: '크렘스탈 DAC', description: '그뤼너 벨트리너와 리슬링으로 구성. 지역, 마을, 단일 포도밭 등급이 있다.' },
    ],
    wineStyles: [
      { name: '그뤼너 벨트리너', description: '뢰스 토양에서 나오는 풍만하고 후추 향이 있는 드라이 화이트.' },
      { name: '드라이 리슬링', description: '원생암의 영향으로 미네랄과 높은 산도가 돋보인다.' },
    ],
    keyFacts: [
      '중심 도시는 크렘스(Krems)이다',
      '바하우의 동쪽에 붙어 있으며 토양이 원생암(서쪽)에서 뢰스(동쪽)로 바뀐다',
    ],
    examTips: [
      '토양 차이에 따른 품종 배치(원생암 = 리슬링, 뢰스 = 그뤼너 벨트리너)를 예로 들어 설명할 것',
    ],
  },
  {
    id: 'austria-burgenland',
    nameKo: '부르겐란트',
    nameEn: 'Burgenland',
    parentId: 'austria',
    children: [],
    level: 'region',
    summary: '헝가리와 국경을 맞댄 오스트리아에서 가장 따뜻한 지역으로, 블라우프랑키쉬와 츠바이겔트 레드, 노이지들러 호수 주변의 귀부 스위트 와인으로 유명하다.',
    climate: {
      type: ['따뜻한 대륙성(판노니아)'],
      description: '헝가리 평원의 영향을 받는 따뜻하고 건조한 판노니아 기후로 오스트리아에서 가장 따뜻하다. 북쪽의 노이지들러 호수는 얕고 넓어 주변 온도를 완화하며, 가을에 습한 아침 안개와 따뜻한 오후가 반복되어 보트리티스(귀부병)가 잘 생긴다.',
      influencingFactors: ['판노니아 평원의 따뜻한 공기', '노이지들러 호수(온도 완화, 습도)', '가을 아침 안개', '낮은 강수량'],
    },
    soils: [
      { type: ['석회암', '편암'], description: '라이타 산맥(Leithaberg) 경사지의 석회암과 편암. 산도와 미네랄이 있는 와인을 만든다.' },
      { type: ['점토', '모래', '자갈'], description: '중부 부르겐란트의 무거운 점토 토양은 블라우프랑키쉬에 적합하고, 호수 동쪽은 모래와 자갈 토양이다.' },
    ],
    grapes: [
      { grapeId: 'chardonnay', role: 'secondary', notes: '라이타베르크 등에서 드라이 화이트 및 스위트 와인에 사용.' },
      { grapeId: 'gruner-veltliner', role: 'secondary', notes: '라이타베르크 DAC 화이트에 사용된다.' },
      { grapeId: 'pinot-noir', role: 'permitted', notes: '소량 재배.' },
    ],
    classifications: [
      {
        name: '부르겐란트의 주요 DAC',
        description: '지역별로 대표 품종과 스타일이 정해져 있다.',
        levels: [
          { name: '미텔부르겐란트 DAC (Mittelburgenland)', description: '블라우프랑키쉬 레드. 무거운 점토 토양에서 구조감 있는 와인.' },
          { name: '라이타베르크 DAC (Leithaberg)', description: '석회암과 편암 토양의 블라우프랑키쉬 레드와 화이트(그뤼너 벨트리너, 피노 블랑, 샤르도네 등).' },
          { name: '노이지들러제 DAC (Neusiedlersee)', description: '츠바이겔트 중심 레드와 귀부 스위트 와인.' },
          { name: '아이젠베르크 DAC (Eisenberg)', description: '남부 부르겐란트의 블라우프랑키쉬.' },
          { name: '루스터 아우스브루흐 DAC (Ruster Ausbruch)', description: '루스트 마을의 전통 귀부 스위트 와인.' },
        ],
      },
    ],
    wineStyles: [
      { name: '블라우프랑키쉬', description: '진한 색, 높은 산도, 단단한 타닌, 블랙체리와 블랙베리, 향신료 풍미의 레드. 오크 숙성 시 장기 숙성 가능.' },
      { name: '츠바이겔트', description: '블라우프랑키쉬 × 장크트 라우렌트 교배종. 체리 풍미의 부드럽고 과일 중심 레드.' },
      { name: '귀부 스위트 와인', description: '노이지들러 호수 주변에서 베렌아우스레제, 트로켄베렌아우스레제, 루스터 아우스브루흐를 비교적 안정적으로 생산한다. 아이스바인과 슈트로바인(건조 포도 와인)도 생산된다.' },
    ],
    keyFacts: [
      '오스트리아 레드 와인의 중심지이며 가장 따뜻한 지역이다',
      '블라우프랑키쉬(Blaufränkisch)가 가장 중요한 고급 레드 품종이며 츠바이겔트(Zweigelt), 장크트 라우렌트(St. Laurent)도 재배된다',
      '노이지들러 호수는 얕은 호수로 가을 안개를 만들어 귀부병 발생에 유리하다',
      '루스터 아우스브루흐(Ruster Ausbruch)는 루스트(Rust) 마을의 역사적인 귀부 와인이다',
    ],
    examTips: [
      '노이지들러 호수가 귀부 와인 생산에 유리한 이유를 기후 측면에서 설명할 것',
      '블라우프랑키쉬와 츠바이겔트의 스타일 차이(산도, 타닌, 과일)를 비교할 수 있어야 한다',
      '미텔부르겐란트 = 블라우프랑키쉬 DAC라는 연결을 기억할 것',
    ],
  },
  {
    id: 'austria-steiermark',
    nameKo: '슈타이어마르크',
    nameEn: 'Steiermark (Styria)',
    parentId: 'austria',
    children: [],
    level: 'region',
    summary: '슬로베니아와 접한 남동부의 언덕 지대로, 가파른 경사지에서 생동감 있는 소비뇽 블랑과 샤르도네(모리용)를 생산한다.',
    climate: {
      type: ['서늘한 대륙성', '지중해 영향'],
      description: '남쪽의 지중해 영향으로 다른 지역보다 강수량이 많고 습하다. 가파른 경사지와 서늘한 밤이 높은 산도와 선명한 아로마를 만든다.',
      influencingFactors: ['지중해의 따뜻하고 습한 공기', '가파른 경사지', '상대적으로 많은 강수량', '일교차'],
    },
    soils: [
      { type: ['이회토', '사암', '석회암'], description: '쥐트슈타이어마르크(남부)의 다양한 퇴적암 토양.' },
      { type: ['화산성 토양'], description: '불칸란트 슈타이어마르크(Vulkanland)의 화산성 토양.' },
    ],
    grapes: [
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '슈타이어마르크의 대표 품종. 시트러스, 구스베리, 풀향, 미네랄.' },
      { grapeId: 'chardonnay', role: 'secondary', notes: '현지명 모리용(Morillon).' },
    ],
    classifications: [
      { name: '슈타이어마르크의 DAC', description: '쥐트슈타이어마르크, 불칸란트 슈타이어마르크, 베스트슈타이어마르크 DAC가 있다.' },
    ],
    wineStyles: [
      { name: '소비뇽 블랑', description: '높은 산도와 시트러스, 풀향, 미네랄이 특징인 드라이 화이트. 단일 포도밭 와인은 오크 숙성으로 복합미를 더하기도 한다.' },
      { name: '실허 (Schilcher)', description: '베스트슈타이어마르크의 블라우어 빌트바허(Blauer Wildbacher) 품종으로 만든 산도 높은 로제.' },
    ],
    keyFacts: [
      '오스트리아 소비뇽 블랑의 중심지이다',
      '샤르도네를 모리용(Morillon)이라 부른다',
    ],
    examTips: [
      '오스트리아에서 소비뇽 블랑 하면 슈타이어마르크를 떠올릴 것',
    ],
  },
];
