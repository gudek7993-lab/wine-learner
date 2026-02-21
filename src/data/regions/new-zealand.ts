import { Region } from '../types';

export const newZealandRegions: Region[] = [
  {
    id: 'new-zealand',
    nameKo: '뉴질랜드',
    nameEn: 'New Zealand',
    parentId: null,
    children: [],
    level: 'country',
    climate: { type: ['해양성'], description: '서늘한 해양성. 센트럴 오타고만 대륙성', influencingFactors: [] },
    soils: [{ type: ['다양'], description: '다양한 토양' }],
    grapes: [
      { grapeId: 'sauvignon-blanc', role: 'primary', notes: '말보로가 세계적 명성' },
      { grapeId: 'pinot-noir', role: 'primary', notes: '센트럴 오타고' },
    ],
    classifications: [],
    wineStyles: [
      { name: '말보로 소비뇽 블랑', description: '강렬한 tropical fruit, 패션프루트, 풀향' },
      { name: '센트럴 오타고 피노 누아', description: '우아하고 과일 풍미 풍부' },
    ],
    keyFacts: ['말보로, 센트럴 오타고, 호크스 베이, 마틴보로'],
    examTips: [],
  },
];
