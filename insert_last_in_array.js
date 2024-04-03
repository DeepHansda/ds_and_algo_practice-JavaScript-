let data = [60, 30, 10, 15, 67, 40];

const insert_in_last = (data, value) => {
  length = data.length;
  for (i = 0; i <= length; i++) {
    console.log(length,i)
    if (i >= length) {
      data[i] = value;
      console.log(data);
    }
  }
};

value = 22;
insert_in_last(data, value);
