import DefaultLayout from "@/assets/common/default-layout";
import SerializingList from "@/components/serializing/serializing-list";
import SerializingTop from "@/components/serializing/serializing-top";

export default function Serializing() {
	return (
		<>
			<DefaultLayout>
				<SerializingTop />
				<SerializingList />
			</DefaultLayout>
		</>
	)
}