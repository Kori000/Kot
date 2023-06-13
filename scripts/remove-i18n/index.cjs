const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('确认要执行 remove-i18n 🍉 吗？(y/n) ', (answer) => {
  if (answer.toLowerCase() === 'y') {
    // 执行 remove-i18n 的操作
    require('./remove-i18n.cjs');
    require('./replace.cjs');
  } else if (answer.toLowerCase() === 'n') {
    console.log('取消执行 remove-i18n');
  } else {
    console.log('输入y or n 😅')
  }

  rl.close();
});



