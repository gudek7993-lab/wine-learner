import { Region } from '../types';

export const australiaRegions: Region[] = [
  {
    id: 'australia',
    nameKo: '호주',
    nameEn: 'Australia',
    parentId: null,
    children: [],
    level: 'country',
    climate: { type: ['따뜻함~뜨거움'], description: '광대한 영토, 다양한 기후대', influencingFactors: [] },
    soils: [{ type: ['다양'], description: '지역별로 다양' }],
    grapes: [
      { grapeId: 'syrah-shiraz', role: 'primary', notes: '시라즈가 상징적' },
      { grapeId: 'cabernet-sauvignon', role: 'primary' },
      { grapeId: 'chardonnay', role: 'primary' },
    ],
    classifications: [],
    wineStyles: [
      { name: '바로사 시라즈', description: 'Old vine. 풍부하고 농축된, 초콜릿·리코리스' },
      { name: '쿠나와라 카베르네', description: 'Terra rossa 토양' },
      { name: '마가렛 리버', description: '보르도 블렌드, 해양성' },
    ],
    keyFacts: ['바로사, 에덴 밸리, 클레어 밸리, 쿠나와라, 마가렛 리버, 헌터 밸리, 야라 밸리'],
    examTips: [],
  },
];
