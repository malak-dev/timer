var myArgs = process.argv.slice(2);
for (let time of myArgs) {
  if (time < 0) {
    return 0;
  } else if (isNaN(time)) {
    return 0;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000)

  }
}
