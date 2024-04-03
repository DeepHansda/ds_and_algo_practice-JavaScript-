let data = [60, 30, 10, 15, 67, 40];

const insert_before = (data, value) => {
  length = data.length;
  for (i = length - 1; i >= 0; i--) {
    console.log(data[i]);
    data[i + 1] = data[i];
    if (i <= 0) {
      data[i] = value;
    }
  }
  console.log(data);
};

value = 14;
insert_before(data, value);
