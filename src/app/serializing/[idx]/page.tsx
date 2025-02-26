import DefaultLayout from "@/assets/common/default-layout";
import SerializingList from "@/components/serializing/serializing-list";
import SerializingListSkeleton from "@/components/serializing/serializing-list.skeleton";
import SerializingTop from "@/components/serializing/serializing-top";
import { Suspense } from "react";

export default async function Serializing() {
	return (
    <>
      <DefaultLayout>
        <SerializingTop />
        <Suspense fallback={<SerializingListSkeleton />}>
          <SerializingList />
        </Suspense>
      </DefaultLayout>
    </>
  );
}