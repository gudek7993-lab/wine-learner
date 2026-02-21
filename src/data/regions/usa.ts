import { Region } from '../types';

export const usaRegions: Region[] = [
  {
    id: 'usa',
    nameKo: '미국',
    nameEn: 'USA',
    parentId: null,
    children: [],
    level: 'country',
    climate: { type: ['다양'], description: '지중해성(캘리포니아) ~ 서늘한 해양성(오레곤)', influencingFactors: [] },
    soils: [{ type: ['다양'], description: '지역별로 다양' }],
    grapes: [
      { grapeId: 'cabernet-sauvignon', role: 'primary', notes: '나파 밸리' },
      { grapeId: 'pinot-noir', role: 'primary', notes: '오레곤, 소노마' },
      { grapeId: 'chardonnay', role: 'primary' },
    ],
    classifications: [],
    wineStyles: [
      { name: '나파 카베르네', description: '풍부하고 농축된, 높은 알코올' },
      { name: '오레곤 피노 누아', description: '부르고뉴 스타일, 우아함' },
      { name: '소노마 다양성', description: 'Russian River 피노, Dry Creek 진판델' },
    ],
    keyFacts: ['나파, 소노마, 오레곤(윌라멧 밸리), 워싱턴(콜롬비아 밸리)'],
    examTips: [],
  },
];
