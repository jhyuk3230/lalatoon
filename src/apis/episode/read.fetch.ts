export async function ReadFetch(workId: string, episodeId: string, userIdCookie: string, price: number) {
  try {
    const userId = userIdCookie;
    const response = await fetch("/api/episode/read", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ workId, episodeId, userId, price }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}