import btnDiv from "../../utils/button";

export function Hero() {
	const hero = document.createElement("div");
	hero.innerHTML = `
			<div class="m-5 grid grid-cols-5 items-center">
					<div class="col-span-3 flex flex-col gap-5">
						<h1 class="text-5xl font-bold">یادگیری React از صفر تا پیشرفته</h1>
						<p>
							با Learnora، پروژه محور React را یاد بگیرید و مهارتهای حرفهای کسب
							کنید.
						</p>
						<div class="flex gap-5">
							${btnDiv}
							<button class="border border-[#6b62ff] px-5 py-2 text-[#6b62ff] rounded-xl">مشاهده سرفصل ها</button>
						</div>
					</div>
					<form
						class="bg-white shadow-xl py-10 px-3 rounded-xl flex flex-col gap-3 justify-start items-start col-span-2"
					>
						<h3>ثبت نام رایگان</h3>
						<input
							type="email"
							placeholder="ایمیل شما"
							class="border border-[#00000044] rounded-xs placeholder:px-1 w-[50%]"
						/>
						<div
							class="bg-[#6b62ff] text-white text-center w-full rounded-xl p-1"
						>
							<button>شروع کنید</button>
						</div>
					</form>
			</div>`;
	return hero;
}
