const getFullYear = () => {
    return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
const getLatestNotification = () => {
    return 'Urgent requirement - complete by EOD';
}

export { getFooterCopy, getFullYear, getLatestNotification };
