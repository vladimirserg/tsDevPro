(() => {
    const emailPattern = /\w+\.?\w+\.?\w+@\w+\.\w{1,4}(\.\w{1,2})?/g;
    const phonePattern = /(\+\d{1,3}\s)?\(?\d{3}\)?[-\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}/g;
    const twitterNamePattern = /@\w{1,15}/g;
    const urlPattern = /(http[s]?:\/\/)?(w{3}\.)?\w+\.\w{1,4}(\.\w{1,4})?/gi;
    const nameSurnamePattern = /[A-Z]\w+\s[A-Z]\w+(\s[A-Z]\w+)?/g;
})();