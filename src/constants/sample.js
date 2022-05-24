import img from "../assets/sample.png";

// DB에서 가져와야 하는 데이터, 임시데이터
export const itemData = Array(30).fill({
  name: '보드게임 - 화투',
  img,
  timeTable: {
    mon: [true, true, false, false, false, false, false, false, false, false, false, false, false],
    tue: [false, false, false, false, false, false, false, false, false, false, false, false, false],
    wed: [false, false, false, false, false, false, false, false, false, false, false, false, false],
    thu: [false, false, false, false, true, false, false, false, false, false, false, false, false],
    fri: [false, false, false, false, false, false, false, false, false, false, true, false, false],
  }
});

// 아이템 선택 안했을때, 비어있는 시간표 데이터
export const dummyTimeTable = {
  mon: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
  tue: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
  wed: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
  thu: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
  fri: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
};

export const time = Array(13).fill(10);
