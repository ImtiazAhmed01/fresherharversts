export const categoryDataFetch = async () => {
    let res = await fetch('http://localhost:3001/api/v1/category');
    let data = await res.json();
    return data;
};
