const languages = [
  { language: "JavaScipt" },
  { language: "JavaScipt" },
  { language: "TypeScipt" },
  { language: "TypeScipt" },
  { language: "Django" },
];

const ans = {};

languages.forEach((ele) => {
  let val = ele.language;
  if (ans[val] == undefined) {
    ans[val] = 1;
  } else {
    ans[val] = ans[val] + 1;
  }
});

console.log(ans);
