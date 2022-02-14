const header = {
    print() {
        return /* html */ `
                <div class="header">
                    <div class="menu bg-neutral-900 flex justify-between fixed p-[5px] w-[100%] z-[3] h-[70px]">
                        <div class="logo pt-[10px] pl-[50px]">
                            <a href="/"><img src="./img/logo-mona-watches-white.png" width="130"></a>
                        </div>
                        <!-- logo-->
                        <nav>
                            <ul>
                                <li class="inline-block p-[6px] pt-[15px]"><a href="/gioithieu"
                                        class="no-underline text-slate-50 hover:text-orange-500">GIỚI THIỆU</a></li>
                                <li class="inline-block p-[6px] pt-[15px]"><a href=""
                                        class="no-underline text-slate-50 hover:text-orange-500">ĐỒNG HỒ NAM</a></li>
                                <li class="inline-block p-[6px] pt-[15px]"><a href=""
                                        class="no-underline text-slate-50 hover:text-orange-500">ĐỒNG HỒ NỮ</a></li>
                                <li class="inline-block p-[6px] pt-[15px]"><a href=""
                                        class="no-underline text-slate-50 hover:text-orange-500">ĐỒNG HỒ ĐÔI</a></li>
                                <li class="inline-block p-[6px] pt-[15px]"><a href=""
                                        class="no-underline text-slate-50 hover:text-orange-500">PHỤ
                                        KIỆN</a></li>
                                <li class="inline-block p-[6px] pt-[15px]"><a href=""
                                        class="no-underline text-slate-50 hover:text-orange-500">LIÊN HỆ</a></li>
                            </ul>
                        </nav>
                        <div class="icon pt-[5px]">
                            <i class="fas fa-search text-slate-50 hover:text-orange-500 p-[10px]"></i>
                            <a href="" class="no-underline ">
                                <i class="fas fa-user text-slate-50 hover:text-orange-500 p-[10px]"></i>
                            </a>
                            <i class="fas fa-cart-plus text-slate-50 hover:text-orange-500 p-[10px]"></i>
                        </div>
                        <!-- icon-->
                    </div>
                    <!-- menu-->
                
                </div>
                <!-- header-->
        `;
    },
};

export default header;