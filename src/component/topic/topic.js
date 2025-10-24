const topic = document.createElement("div");

export function Topic() {
	topic.innerHTML = `
  <div
			class="bg-white shadow-xl py-10 px-10 m-5 flex flex-col gap-10 rounded-xl"
		>
			<h1 class="font-bold text-3xl">سرفصل های دوره React</h1>
			<ul class="list-disc px-10">
				<li>مقدمه و نصب محیط توسعه</li>
				<li>JSX و Componentها</li>
				<li>State و Props</li>
				<li>Lifecycle Methods</li>
				<li>... و Hooks: useState, useEffect, useContext</li>
				<li>مدیریت State با Context و Redux</li>
				<li>Router React و مسیر یابی</li>
				<li>پروژه نهایی و Deploy</li>
			</ul>
		</div>
  
  `;
	return topic;
}
