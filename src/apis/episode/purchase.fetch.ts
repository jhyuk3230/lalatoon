export async function PurchaseFetch(state: boolean) {
	try {
    const response = await fetch("/api/episode/purchase", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ state }),
    });
		
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}