"use server";

// const headers = {
//   Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
// };

export const getPhotos = async () => {
  const url = new URL("https://picsum.photos/v2/list");

  // url.searchParams.set("page", "9");
  // url.searchParams.set("order_by", "popular");

  return await fetch(url, {
    next: {
      revalidate: 86400,
    },
  });
};

export const getPhoto = async (id: string) => {
  return await fetch(`https://picsum.photos/id/${id}/info`, {
    next: {
      revalidate: 86400,
    },
  });
};
