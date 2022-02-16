import { getAll } from "../api/posts";

const newContent = {
    async print() {
        const { data } = await getAll();
        return /* html */ `
            <div class="content pt-[50px]">
                <h2 class="fonts text-center">ĐỒNG HỒ NAM</h2>
                ${data.map((post) => `
                    <div class="content-top grid grid-cols-4 pt-[50px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <div class="text">
                                <del>20,217,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 1-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <div class="text">
                                <del>5,600,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 2-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 3-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 3-->
                    </div>
                    <!-- content-top-->
                    <div class="content-top-new grid grid-cols-4 pt-[30px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>3,042,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 4-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>7,680,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 5-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <!-- <del>7,680,000đ</del> -->
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 7-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>1,863,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 8-->
                    </div>
                    <!-- content-top-new-->
                `).join("")}
                <div class="content-banner pt-[50px]">
                    <img src="./img/banner-dong-ho-nam-citizen_1534163540.jpg" alt="" class="w-[100%]">
                </div>
                <!-- content-banner-->
                <div class="content-new-heght pt-[50px]">
                    <h2 class="fonts text-center">ĐỒNG HỒ NỮ</h2>
                    <div class="content-top grid grid-cols-4 pt-[50px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="./img/9.jpg" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">ĐỒNG HỒ NỮ</p>
                            <h4 class="text-base"><a href="" class="no-underline text-stone-900 hover:text-amber-700">ĐỒNG
                                    HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a></h4>
                            <div class="text">
                                <!-- <del>20,217,000đ</del> -->
                                <strong>17,640,000đ</strong>
                            </div>
                        </div>
                        <!-- content-top-product 9-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="./img/10.jpg" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">ĐỒNG HỒ NỮ</p>
                            <h4 class="text-base"><a href="" class="no-underline text-stone-900 hover:text-amber-700">ĐỒNG
                                    HỒ CITIZEN EX1410-88A NỮ ECO-DRIVE DÂY INOX</a></h4>
                            <div class="text">
                                <del>6,800,000đ</del>
                                <strong>6,120,000đ</strong>
                            </div>
                        </div>
                        <!-- content-top-product 10-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="./img/11.jpg" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">ĐỒNG HỒ NỮ</p>
                            <h4 class="text-base"><a href="" class="no-underline text-stone-900 hover:text-amber-700">ĐỒNG
                                    HỒ OGIVAL OG385-032LW-T NỮ PIN DÂY INOX</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <strong>9,384,000đ</strong>
                            </div>
                        </div>
                        <!-- content-top-product 11-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="./img/12.jpg" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">ĐỒNG HỒ NỮ</p>
                            <h4 class="text-base"><a href="" class="no-underline text-stone-900 hover:text-amber-700">ĐỒNG
                                    HỒ CANDINO C4433/3 NỮ PIN DÂY INOX</a></h4>
                            <div class="text">
                                <del>4,440,000đ</del>
                                <strong>3,996,000đ</strong>
                            </div>
                        </div>
                        <!-- content-top-product 12-->
                    </div>
                    <!-- content-top 2-->
                    <div class="content-top-new grid grid-cols-4 pt-[30px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="./img/13.jpg" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">ĐỒNG HỒ NỮ</p>
                            <h4 class="text-base"><a href="" class="no-underline text-stone-900 hover:text-amber-700">ĐỒNG
                                    HỒ SKAGEN 885SSLB NỮ PIN DÂY DA</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <!-- <del>3,042,000đ</del> -->
                                <strong>5,900,000đ</strong>
                            </div>
                        </div>
                        <!-- content-top-product 13-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="./img/14.jpg" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">ĐỒNG HỒ NỮ</p>
                            <h4 class="text-base"><a href="" class="no-underline text-stone-900 hover:text-amber-700">ĐỒNG
                                    HỒ DANIEL WELLINGTON DW00500001 NỮ PIN DÂY INOX</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>4,700,000đ</del>
                                <strong>4,230,000đ</strong>
                            </div>
                        </div>
                        <!-- content-top-product 14-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="./img/15.jpg" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">ĐỒNG HỒ NỮ</p>
                            <h4 class="text-base"><a href="" class="no-underline text-stone-900 hover:text-amber-700">ĐỒNG
                                    HỒ CASIO GA-100DE-2ADR NỮ PIN DÂY NHỰA</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <!-- <del>7,680,000đ</del> -->
                                <strong>4,393,000đ</strong>
                            </div>
                        </div>
                        <!-- content-top-product 15-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="./img/16.jpg" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">ĐỒNG HỒ NỮ</p>
                            <h4 class="text-base"><a href="" class="no-underline text-stone-900 hover:text-amber-700">ĐỒNG
                                    HỒ CASIO LA670WL-1BDF NỮ PIN DÂY DA</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>851,000đ</del>
                                <strong>766,000đ</strong>
                            </div>
                        </div>
                        <!-- content-top-product 8-->
                    </div>
                    <!-- content-top-new-->
                </div>
                <!-- content-new-heght-->
                <div class="content-bottom pt-[50px]">
                    <h2 class="fonts text-center">THÔNG TIN HỮU ÍCH</h2>
                    <div class="content-bottom-informatine grid grid-cols-3 text-center pt-[40px]">
                        <div class="content-informatine">
                            <div class="informatine-img overflow-hidden">
                                <img src="./img/banner.jpg" width="370px"
                                    class="h-[200px] m-auto hover:scale-110 duration-700">
                            </div>
                            <div class="informatine-text">
                                <h4 class="text-lg pt-[10px]"><a href=""
                                        class="no-underline text-stone-900 hover:text-stone-800">Duis
                                        luctus elit nisi, et
                                        cursus magna...</a></h4>
                                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur, massa non viverra[...]
                                </p>
                            </div>
                        </div>
                        <!-- content-informatine1-->
                        <div class="content-informatine">
                            <div class="informatine-img overflow-hidden">
                                <img src="./img/banner2.jpg" width="370px"
                                    class="h-[200px] m-auto hover:scale-110 duration-700">
                            </div>
                            <div class="informatine-text">
                                <h4 class="text-lg pt-[10px]"><a href=""
                                        class="no-underline text-stone-900 hover:text-stone-800">Mauris tristique pretium
                                        tempus...</a></h4>
                                <p>Donec tempus eu ligula sed blandit. Vivamus iaculis rutrum[...]</p>
                            </div>
                        </div>
                        <!-- content-informatine2-->
                        <div class="content-informatine">
                            <div class="informatine-img overflow-hidden">
                                <img src="./img/banner3.jpg" width="370px"
                                    class="h-[200px] m-auto hover:scale-110 duration-700">
                            </div>
                            <div class="informatine-text">
                                <h4 class="text-lg pt-[10px]"><a href=""
                                        class="no-underline text-stone-900 hover:text-stone-800">Aliquam placerat nisl nec
                                        imperdiet...</a></h4>
                                <p>n rutrum tempus purus, ut euismod dui facilisis ac. Fusce[...]</p>
                            </div>
                        </div>
                        <!-- content-informatine3-->
                    </div>
                    <!--content-bottom-informatine -->
                </div>
                <!-- content-bottom-->
            </div>
            <!-- content-->
        `;
    },
};

export default newContent;