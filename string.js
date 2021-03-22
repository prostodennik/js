const path = "/users/download/index.html"

const isHtml = path => {
    const requeirdExt = ".html";
    const pathExt = path.slice(-5);

    return pathExt == requeirdExt
    // if(pathExt == requeirdExt) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(isHtml(path))