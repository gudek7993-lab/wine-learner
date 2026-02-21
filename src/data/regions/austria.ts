import { Region } from '../types';

export const austriaRegions: Region[] = [
  {
    id: 'austria',
    nameKo: '오스트리아',
    nameEn: 'Austria',
    parentId: null,
    children: [],
    level: 'country',
    climate: { type: ['대륙성'], description: '대륙성 기후', influencingFactors: [] },
    soils: [{ type: ['다양'], description: '다양한 토양' }],
    grapes: [
      { grapeId: 'gruner-veltliner', role: 'primary', notes: '오스트리아의 상징' },
      { grapeId: 'riesling', role: 'secondary' },
    ],
    classifications: [{ name: 'DAC', description: 'Districtus Austriae Controllatus' }],
    wineStyles: [
      { name: '그뤼너 벨트리너', description: '흰후추, 허브, 시트러스' },
      { name: '바하우 등급', description: 'Steinfeder < Federspiel < Smaragd' },
    ],
    keyFacts: ['그뤼너 벨트리너', '바하우, 캄프탈, 크렘스탈', '블라우프랑키쉬(적)'],
    examTips: [],
  },
];
