// check when url contains "ApplicantHome"
async function getUserInfo() {
    if (window.location.href.includes("ApplicantHome") || window.location.href.includes("applicanthome")) {
        console.log('Page is loaded');
    }
    else{
        console.log('Page is not loaded');
        return;
    }
}