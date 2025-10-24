import btnDiv from "../../utils/button";

const header = document.getElementById("header");
header.innerHTML = `
			<div class="flex flex-row-reverse items-center gap-5">
				<span class="font-bold text-xl">Learnora</span>
				<span
					class="bg-[#736aff] px-5 py-3.5 rounded-xl text-white font-bold text-[18px]"
					>L</span
				>
			</div>
			<nav class="flex gap-5">
				<ul class="flex gap-5 items-center">
					<li>ویژگی</li>
					<li>سرفصل ها</li>
					<li>قیمت ها</li>
					<li>نظرات</li>
				</ul>
				<div id="btn">
        ${btnDiv}
				</div>
			</nav>
`;
