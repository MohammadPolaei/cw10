export function ProductCard() {
  const productCard = document.createElement('div');
  productCard.innerHTML = `
		<div class="m-5 flex gap-4 items-center justify-center">
			<div class="bg-white rounded-xl w-full h-1/2 p-5 shadow-xl flex flex-col items-center gap-5">
				<h3 class=" p-10  w-5 h-5 font-bold flex items-center justify-center">
					Team
				</h3>
				<h4 class="  text-indigo-500 text-2xl font-bold"> هﺎﻣ/€149</h4>
				<div>
					<ul>
                        <li>دسترسی گروهی </li>
                         <li> پشتیبانی اختصاصی  </li>
                        <li> آمار و گزارش تیمی </li>
                     </ul>
				</div>   
            </div> 
            <div class="bg-white rounded-xl w-full h-1/2 p-5 shadow-xl flex flex-col items-center gap-5">
				<h3 class=" p-10 font-bold w-5 h-5 flex items-center justify-center">
					Pro
				</h3>
				<h4 class=" text-indigo-500 text-2xl font-bold"> هﺎﻣ/€149</h4>
				<div>
					<ul>
                        <li>دسترسی گروهی </li>
                         <li> پشتیبانی اختصاصی  </li>
                        <li> آمار و گزارش تیمی </li>
                     </ul>
				</div>  
				
            </div>  
            <div class="bg-white rounded-xl w-full h-1/2 p-5 shadow-xl flex flex-col items-center gap-5">
				<h3 class=" p-10 font-bold w-5 h-5 flex items-center justify-center">
					Free
				</h3>
				<h4 class=" text-indigo-500 text-2xl font-bold"> هﺎﻣ/€149</h4>
				<div>
					<ul>
                        <li>دسترسی گروهی </li>
                         <li> پشتیبانی اختصاصی  </li>
                        <li> آمار و گزارش تیمی </li>
                     </ul>
				</div>   
            </div> 
		</div>`;
  return productCard;
}
