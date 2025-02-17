import DefaultLayout from "@/assets/common/default-layout";
import NewList from "@/components/new/new-list";
import NewTop from "@/components/new/new-top";
import { Suspense } from "react";

export default async function Rank() {
	return (
    <>
      <Suspense>
        <DefaultLayout>
          <NewTop />
					<NewList />
        </DefaultLayout>
      </Suspense>
    </>
  );
}