export async function FavoriteFetch(favoriteState: boolean, favoriteId: string, userIdCookie: string) {
	try {
		const userId = userIdCookie;
    const response = await fetch("/api/episode", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favoriteState, favoriteId, userId }),
    });

		const result = await response.json();
		return result;

  } catch (error) {
    console.log(error);
  }
}