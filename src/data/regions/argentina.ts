import { Region } from '../types';

export const argentinaRegions: Region[] = [
  {
    id: 'argentina',
    nameKo: '아르헨티나',
    nameEn: 'Argentina',
    parentId: null,
    children: [],
    level: 'country',
    climate: { type: ['대륙성'], description: '안데스 산맥 기슭의 높은 고도(600~1,500m). 건조, 큰 일교차', influencingFactors: ['고도', '안데스 산맥'] },
    soils: [{ type: ['사질', '충적토'], description: '안데스 충적토' }],
    grapes: [
      { grapeId: 'malbec', role: 'primary', notes: '아르헨티나의 대표 품종' },
      { grapeId: 'torrontes', role: 'secondary', notes: '아로마틱 백포도' },
    ],
    classifications: [],
    wineStyles: [
      { name: '멘도사 말벡', description: '짙은 색, 매실, 블랙베리, 보라꽃, 벨벳 타닌' },
      { name: '우코 밸리 말벡', description: '고도 1,000m+. 더 섬세하고 신선' },
      { name: '토론테스', description: '장미, 라이치 향. 드라이. 살타 고산지(1,700m+)' },
    ],
    keyFacts: ['멘도사(중심)', '우코 밸리(고급)', '살타(토론테스)'],
    examTips: [],
  },
];
