export const isEmpty = (value) => {
    if (value == null) return true; // Check for null or undefined
    if (typeof value === 'object') return Object.keys(value).length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'string') return value.trim() === '';
    return false;
  };

 export const convertToTitleCase = (str) => {
    return str.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}