const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === '\u0062') {
    process.stdout.write('\x07');
  } else if ((key === '\u0031' || key === '\u0032' || key === '\u0033' || key === '\u0034' || key === '\u0035' || key === '\u0036' || key === '\u0037' || key === '\u0038' || key === '\u0039')) {
    process.stdout.write(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);

  } else if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }

});