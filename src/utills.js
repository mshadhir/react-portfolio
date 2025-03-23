// export const getImageUrl = (path) => {
//     return `/assets/${path}`;
// };

export const getImageUrl = (path) => `${import.meta.env.BASE_URL}assets/${path}`;
