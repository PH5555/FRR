import img from "../assets/sample.png";

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

export const dummyTimeTable = {
  mon: Array(13).fill(false),
  tue: Array(13).fill(false),
  wed: Array(13).fill(false),
  thu: Array(13).fill(false),
  fri: Array(13).fill(false),
};

export const time = Array(13).fill(10);
