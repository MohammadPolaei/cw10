export function Reviews() {
   const reviews = document.createElement("div");
   reviews.innerHTML = `
        <div class="flex flex-col gap-10 mb-10 p-5">
			<p class="text-2xl font-bold">نظرات دانشجویان</p>
			<div class="flex gap-10 p-5">
				<div class="w-1/2 flex shadow-xl rounded-xl">
					<img src="./public/assets/image1.png" class="w-22 h-22">
					<div class="flex flex-col gap-2">
						<p class="text-lg">این دوره عالی بود و پروژه ها به من کمک کردند تا سریع مهارت کسب کنم.</p>
						<p class="font-bold text-xl">-علی رضا</p>
					</div>
				</div>
				<div class="w-1/2 flex shadow-xl rounded-xl p-5">
					<img src="./public/assets/image2.png">
					<div class="flex flex-col gap-2">
						<p class="text-lg">منتورینگ حرفه ای و پاسخ سریع به سئوالات واقعا ارزشمند بود.</p>
						<p class="font-bold text-xl">-سارا محمدی</p>
					</div>
				</div>
			</div>
		</div>`;
    return reviews;
}