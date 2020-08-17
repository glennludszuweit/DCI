for (let i = 0; i < 10; i++) {
  console.log('outer loop at ' + i);
  for (let j = 0; j < 3; j++) {
    console.log('     inner loop at ' + j);
  }
}

for (let i = 0; i < 10; i++) {
  console.log('-------------------------');
  for (let j = 0; j < 3; j++) {
    const sum = i + j;
    console.log('combined ' + sum);
  }
}

const productLine = 'DBP';
for (let batch = 0; batch <= 100; batch++) {
  for (let item = 0; item <= 100; item++) {
    console.log(
      productLine +
        '-' +
        batch.toString().padStart(3, 0) +
        '-' +
        item.toString().padStart(3, 0)
    );
  }
}
