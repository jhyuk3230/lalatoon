import DefaultLayout from "@/assets/common/default-layout";
import SerializingList from "@/components/serializing/serializing-list";
import SerializingTop from "@/components/serializing/serializing-top";
import { ListItem } from "@/types/list.type ";
import { cookies } from "next/headers";

export default async function Serializing() {
	return (
    <>
      <DefaultLayout>
        <SerializingTop />
        <SerializingList />
      </DefaultLayout>
    </>
  );
}