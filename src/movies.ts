export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "/posters/img3.jpg", name: "img3" },
  { poster: "/posters/img4.jpg", name: "img4" },
  { poster: "/posters/img3.jpg", name: "img3" },
  { poster: "/posters/img4.jpg", name: "img4" },
  { poster: "/posters/img3.jpg", name: "img3" },
  { poster: "/posters/img4.jpg", name: "img4" },
  { poster: "/posters/img3.jpg", name: "img3" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
