import DefaultLayout from "@/assets/common/default-layout";
import RankList from "@/components/rank/rank-list";
import RankTop from "@/components/rank/rank-top";
import { Suspense } from "react";

export default async function Rank() {
	return (
    <>
      <Suspense>
        <DefaultLayout>
          <RankTop />
					<RankList />
        </DefaultLayout>
      </Suspense>
    </>
  );
}