import { Region } from '../types';

export const southAfricaRegions: Region[] = [
  {
    id: 'south-africa',
    nameKo: '남아프리카 공화국',
    nameEn: 'South Africa',
    parentId: null,
    children: [],
    level: 'country',
    climate: { type: ['해양성', '지중해성'], description: '벵겔라 한류와 케이프 닥터(건조한 남동풍)의 영향', influencingFactors: ['벵겔라 한류', '케이프 닥터'] },
    soils: [{ type: ['다양'], description: '화강암, 사암, 점토 등' }],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '스텔렌보쉬' },
      { grapeId: 'pinotage', role: 'primary', notes: '남아공 고유 품종' },
      { grapeId: 'chenin-blanc', role: 'primary', notes: '스워틀랜드 old vine' },
      { grapeId: 'sauvignon-blanc', role: 'secondary', notes: '콘스탄시아' },
    ],
    classifications: [],
    wineStyles: [
      { name: '스텔렌보쉬 레드', description: '최고의 적포도주 산지. 카베르네, 보르도 블렌딩' },
      { name: '피노타지', description: 'Pinot Noir × Cinsaut. 매실, 바나나, 연기. 논쟁적이나 품질 향상 중' },
      { name: '콘스탄시아', description: '서늘한 해안. 소비뇽 블랑. 역사적 디저트 와인(Vin de Constance)' },
      { name: '스워틀랜드', description: 'Old vine 슈냉 블랑, Rhône 스타일. 드라이 파밍' },
    ],
    keyFacts: ['스텔렌보쉬, 콘스탄시아, 스워틀랜드, 워커 베이'],
    examTips: [],
  },
];
