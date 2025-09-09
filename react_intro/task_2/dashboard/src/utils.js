const getFullYear = () => {
    return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
const getLatestNotification = () => {
    return (<span><strong>Urgent requirement</strong> - complete by EOD</span>)
}

export { getFooterCopy, getFullYear, getLatestNotification };
