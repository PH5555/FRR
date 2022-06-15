// 아이템 선택 안했을때, 비어있는 시간표 데이터
export const dummyTimeTable = {
  mon: { reserved: Array(13).fill(false), selected: Array(13).fill(false) },
  tue: { reserved: Array(13).fill(false), selected: Array(13).fill(false) },
  wed: { reserved: Array(13).fill(false), selected: Array(13).fill(false) },
  thu: { reserved: Array(13).fill(false), selected: Array(13).fill(false) },
  fri: { reserved: Array(13).fill(false), selected: Array(13).fill(false) },
};

export const time = Array(13).fill(10);
