import DefaultLayout from "@/assets/common/default-layout";
import SerializingList from "@/components/serializing/serializing-list";
import SerializingTop from "@/components/serializing/serializing-top";
import { Suspense } from "react";

export default async function Serializing() {
	return (
    <>
      <Suspense>
        <DefaultLayout>
          <SerializingTop all={true} />
          <SerializingList all={true} />
        </DefaultLayout>
      </Suspense>
    </>
  );
}