const padDateTime = x => {
  try {
    return +x < 9 ? x.toString().padStart(2, 0) : x.toString();
  } catch (error) {
    console.log(error);
  }
};

export const MyDate = { padDateTime };
