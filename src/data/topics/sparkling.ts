export const methods = [
  {
    name: "전통 방식 (Traditional Method)",
    nameEn: "Méthode Traditionnelle",
    steps: "베이스 와인 → 리쾨르 드 티라주 추가 → 병 내 2차 발효 → 앙금 숙성 → 리들링 → 데고르주망 → 리쾨르 데크스페디시옹",
    characteristics: "가장 복합적. 빵, 비스킷, 브리오슈 풍미(자가분해). 미세한 기포",
    wines: ["샴페인", "카바", "크레망", "프란차코르타"],
  },
  {
    name: "탱크 방식 (Tank/Charmat Method)",
    nameEn: "Metodo Martinotti",
    steps: "베이스 와인 → 대형 가압 탱크에서 2차 발효 → 여과 → 병입",
    characteristics: "과일 풍미 보존. 신선하고 꽃향. 비용 효율적. 짧은 숙성",
    wines: ["프로세코", "아스티", "젝트(일부)"],
  },
  {
    name: "트랜스퍼 방식 (Transfer Method)",
    steps: "병 내 2차 발효 후 → 가압 탱크로 옮겨 여과 → 새 병에 병입",
    characteristics: "전통 방식과 유사하나 리들링 생략. 비용 절감",
    wines: ["일부 호주, 뉴질랜드 스파클링"],
  },
  {
    name: "아스티 방식 (Asti Method)",
    steps: "포도즙에서 1회 발효만 (가압 탱크) → 원하는 알코올·당도에서 중단",
    characteristics: "매우 아로마틱하고 달콤, 낮은 알코올. 아스티는 약 7~9.5%, 모스카토 다스티는 약 4.5~6.5%. 모스카토 비앙코 품종",
    wines: ["아스티 DOCG", "모스카토 다스티"],
  },
];

export const champagneStyles = [
  { name: "Non-Vintage (NV)", desc: "여러 빈티지 블렌딩. 하우스 스타일 일관성. 출시 전 최소 15개월 숙성, 그중 앙금 숙성 12개월" },
  { name: "Vintage", desc: "단일 빈티지. 우수한 해에만 생산. 출시 전 최소 3년 숙성" },
  { name: "Blanc de Blancs", desc: "청포도로만 만든 샴페인(실제로는 대부분 샤르도네). 우아하고 시트러스 풍미, 섬세한 스타일" },
  { name: "Blanc de Noirs", desc: "피노 누아 and/or 피노 뮈니에 100%. 풍부하고 구조감" },
  { name: "Rosé", desc: "블렌딩 방식(적포도주 소량 혼합) 또는 세니에 방식" },
  { name: "Prestige Cuvée", desc: "최고급 블렌딩. Dom Pérignon, Krug, Cristal 등" },
];

export const dosageTable = [
  { style: "Brut Nature", sugar: "0~3 g/L" },
  { style: "Extra Brut", sugar: "0~6 g/L" },
  { style: "Brut", sugar: "0~12 g/L" },
  { style: "Extra Dry", sugar: "12~17 g/L" },
  { style: "Dry/Sec", sugar: "17~32 g/L" },
  { style: "Demi-Sec", sugar: "32~50 g/L" },
  { style: "Doux", sugar: "50 g/L+" },
];

export const otherSparkling = [
  { name: "카바 (Cava)", meta: "스페인, 전통 방식", desc: "마카베오, 사렐로, 파레야다. 최소 9개월 앙금 숙성. 가성비가 뛰어납니다." },
  { name: "크레망 (Crémant)", meta: "프랑스 (샹파뉴 외), 전통 방식", desc: "알자스, 루아르, 부르고뉴 등. 각 지역 품종을 사용합니다." },
  { name: "프란차코르타 (Franciacorta)", outOfScope: true, meta: "이탈리아 롬바르디아, 전통 방식", desc: "샤르도네, 피노 누아, 피노 비앙코. 이탈리아 최고급 스파클링입니다." },
  { name: "프로세코 (Prosecco)", meta: "이탈리아 베네토, 탱크 방식", desc: "글레라 품종. 가볍고 과일향과 꽃향. Conegliano Valdobbiadene DOCG가 최상위입니다." },
];
