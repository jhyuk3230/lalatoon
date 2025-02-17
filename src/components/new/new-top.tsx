import RankAdultBtn from "./new-adult-btn";

export default async function RankTop() {
	return (
    <>
      <section className="max-w-[768px] mx-auto mb-5 pt-[50px]">
				<article className="px-5 flex justify-between items-center">
        	<h2 className="text-[24px] font-medium text-black leading-[30px]">신작</h2>
					<ul className="flex justify-end items-center gap-[10px]">
						<li>
							<RankAdultBtn />
						</li>
					</ul>
				</article>
      </section>
    </>
  );
}