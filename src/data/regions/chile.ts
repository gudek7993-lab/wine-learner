import { Region } from '../types';

export const chileRegions: Region[] = [
  {
    id: 'chile',
    nameKo: '칠레',
    nameEn: 'Chile',
    parentId: null,
    children: [],
    level: 'country',
    climate: { type: ['지중해성'], description: '안데스 산맥(동)과 태평양(서) 사이. 필록세라 없음', influencingFactors: ['훔볼트 한류', '안데스 산맥'] },
    soils: [{ type: ['다양'], description: '다양한 토양' }],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '마이포' },
      { grapeId: 'carmenere', role: 'primary', notes: '칠레의 상징 품종' },
      { grapeId: 'sauvignon-blanc', role: 'secondary', notes: '카사블랑카' },
    ],
    classifications: [],
    wineStyles: [
      { name: '카르메네르', description: '피망, 허브, 매실. 완전 성숙이 중요' },
      { name: '마이포 카베르네', description: '풍부하고 과일 풍미' },
      { name: '카사블랑카 화이트', description: '서늘한 해안, 신선함' },
    ],
    keyFacts: ['마이포, 카사블랑카, 콜차과', '카르메네르가 상징'],
    examTips: [],
  },
];
