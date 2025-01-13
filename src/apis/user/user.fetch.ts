import { UserData } from "@/types/common.type";

export async function UserFetch(userData: UserData) {
  try {
		const response = await fetch('/api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		})

		const result = await response.json();
		return result;

  } catch (error) {
    console.error(error);
  }
}