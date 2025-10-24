
export function ContactUs() {
	const contactus = document.createElement("div");
	contactus.innerHTML=`<div class="grid gap-2 h-100 w-300 mr-10">
      <div class="font-bold mt-10">تماس با ما</div>
      <div class="flex flex-col gap-3">
      <div class="border-2 border-gray-400  rounded-xl">
        <input class="w-full h-8 " type="text" placeholder="نام شما">
      </div>
      <div class="border-2  border-gray-400 rounded-xl">
        <input class="w-full h-8"  type="email" placeholder="ایمیل شما">
      </div>
      <div class="border-2 border-gray-400 rounded-xl">
        <input class="w-full h-20" type="text" placeholder="پیام شما">
      </div>
      </div>
      <div>
        <button class="bg-[#6c63ff] text-amber-50 w-20 h-10 rounded-2xl">ارسال</button>
      </div>
    </div>`
       return contactus;
}