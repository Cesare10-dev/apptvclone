import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";

const VideoCarousel = () => {
  return (
    <div className="bg-background">
      <div className="overflow-clip">
        <div className="flex gap-5 left-1/2 -translate-x-1/2 mb-5">
          <div className="w-[60vw] shrink-0 rounded-2xl overflow-clip">
            <img
              className="h-full w-full object-cover"
              src={movies[0].poster}
              alt={movies[0].name}
            />
          </div>
          <div className="w-[60vw] shrink-0 rounded-2xl overflow-clip">
            <img
              className="h-full w-full object-cover"
              src={movies[1].poster}
              alt={movies[1].name}
            />
          </div>
          <div className="w-[60vw] shrink-0 rounded-2xl overflow-clip">
            <img
              className="h-full w-full object-cover"
              src={movies[2].poster}
              alt={movies[2].name}
            />
          </div>
        </div>
      </div>

      <SmallVideoCarousel movies={randomMoviesSet1} />
      <SmallVideoCarousel movies={randomMoviesSet2} />
    </div>
  );
};

export default VideoCarousel;

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex gap-3 overflow-clip">
      {movies.map((movie, index) => (
        <div className="w-[23vw] shrink-0" key={`${movie.name}-${index}`}>
          <img
            className="h-full w-full object-cover rounded-xl"
            src={movie.poster}
            alt={movie.name}
          />
        </div>
      ))}
    </div>
  );
};
