const string = "Привет! Как дела? Меня зовут Денис.";

const vovels = ["а" , "у" , "о" , "ы" , "и" , "э" , "я" , "ю" , "ё" , "е"];

const getVowels = string => {
    let extractedVowels = "";

for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i].toLowerCase();

    if (vovels.includes(currentLetter)) {
    extractedVowels += currentLetter;
    }
}

    return extractedVowels;
}

console.log(getVowels(string));

