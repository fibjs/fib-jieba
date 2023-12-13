const path = require("path");

const {
    load,
    cut
} = require("..");

const sentence =
    "我是拖拉机学院手扶拖拉机专业的。不用多久，我就会升职加薪，当上CEO，走上人生巅峰。";

load({
    userDict: path.resolve(__dirname, "./__fixtures__/userdict.utf8"),
});

console.log(cut(sentence));
