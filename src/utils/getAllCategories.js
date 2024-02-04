
export const getAllCategories = async () => {
    const res = await fetch("https://the-dragon-news-server-six-lovat.vercel.app/categories");

    return res.json();
}