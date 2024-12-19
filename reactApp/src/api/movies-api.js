export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8a26b924f91184707ff94cc6538ee943&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };