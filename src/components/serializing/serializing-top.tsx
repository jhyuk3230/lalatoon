import SerializingAdultBtn from "./serializing-adult-btn";
import SerializingAllBtn from "./serializing-all-btn";

export default async function SerializingTop() {
	return (
    <>
      <section className="max-w-[768px] mx-auto mb-5 pt-[50px]">
				<article className="px-5 flex justify-between items-center">
        	<h2 className="text-[24px] font-medium text-black leading-[30px]">연재중</h2>
					<ul className="flex justify-end items-center gap-[10px]">
						<li>
							<SerializingAdultBtn />
						</li>
						<li className="rounded-[50px] flex justify-end items-center bg-red-100">
							<SerializingAllBtn />
						</li>
					</ul>
				</article>
      </section>
    </>
  );
}