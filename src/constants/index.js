export const dayList = ['mon', 'tue', 'wed', 'thu', 'fri'];

export const dummyTimeTable = () => {
  return {
    mon: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
    tue: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
    wed: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
    thu: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
    fri: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
  }
};

export const emptyTime = Array(13).fill(false);
