import React from "react";
import CouponCarousel from "../Common/Carousel";
import { FaAnglesRight } from "react-icons/fa6";

// coupon
export const CouponCard: React.FC = () => {
  interface CouponList {
    id?: number;
    ship?: string;
    priceOrder?: string;
    price?: string;
    code?: string;
    date?: string;
  }
  const couponList: CouponList[] = [
    {
      id: 1,
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      price: "300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {
      id: 2,
      ship: "Giảm thêm 100k",
      priceOrder: "Đơn hàng từ 2 triệu",
      price: "100k",
      code: "SCOFIELD100K",
      date: "HSD: 10/12/2022",
    },
    {
      id: 3,
      ship: "Giảm thêm 15%",
      priceOrder: "Đơn hàng từ 5 triệu",
      price: "15%",
      code: "SCOFIELD15",
      date: "HSD: 10/12/2022",
    },
    {
      id: 4,
      ship: "Giảm thêm 30%",
      priceOrder: "Đơn hàng từ 15 triệu",
      price: "30%",
      code: "SCOFIELD30",
      date: "HSD: 10/12/2022",
    },
  ];
  return (
    <div className="md:grid md:grid-cols-4 gap-1 md:gap-3 pt-6 flex overflow-x-auto pb-2">
      {couponList.map((coupon) => (
        <div
          key={coupon.id}
          data-code={coupon.code}
          className="min-w-[280px] md:min-w-0 w-full shadow-lg flex items-stretch bg-white border-l-10 border-l-red-600 rounded-5px flex-shrink-0"
        >
          <div className="w-1/3 min-w-[80px] p-1 border-r-[1px] border-dashed border-[#ccc] flex justify-center items-center">
            <span className="text-2xl text-red-600 font-bold">
              {coupon.price}
            </span>
          </div>
          <div className="w-2/3 p-2 flex flex-col justify-between">
            <div>
              <span className="text-[15px] font-semibold leading-tight block">
                {coupon.ship}
              </span>
              <small className="block text-gray-600 text-[12px]">
                {coupon.priceOrder}
              </small>
            </div>
            <div className="w-full flex items-center justify-between mt-2">
              <div className="flex-1 min-w-0">
                <span className="text-[11px] block">
                  mã:{" "}
                  <strong className="text-[11px] font-bold">
                    {coupon.code}
                  </strong>
                </span>
                <span className="block text-[11px] text-gray-500">
                  {coupon.date}
                </span>
              </div>
              <div className="ml-2">
                <button className="px-3 py-1 bg-black hover:bg-red-600 text-white rounded-[50px] text-[10px] cursor-pointer flex-shrink-0 whitespace-nowrap">
                  sao chép
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CouponTable: React.FC = () => {
  interface ProductDiscountList {
    id?: number;
    title: string;
    priceProduct: string;
    discountProduct: string;
    imgA: string;
    imgB: string;
  }
  const productDiscountList: ProductDiscountList[] = [
    {
      id: 1,
      title: " Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001 ",
      priceProduct: "7,929,900₫",
      discountProduct: "8,900,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876731/shoe1a_pj9stt.png",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876732/shoe1b_rtpmwz.webp",
    },
    {
      id: 2,
      title: "  Giày Nike Air Jordan 1 Mid GS 'White Shadow' 554725-073  ",
      priceProduct: "7,573,500₫",
      discountProduct: "8,500,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876731/shoe2a_t85m61.webp",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876734/shoe2b_bzamfq.png",
    },
    {
      id: 3,
      title: "  Giày Nike Jordan 1 Retro Golf 'Starfish' DD9315-800  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876733/shoe3a_drpxsn.webp",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876737/shoe3b_fdqojy.png",
    },
    {
      id: 4,
      title: "  Giày Nike Jordan 1 High OG 'Denim' DM9036-104  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876732/shoe4a_rb0b31.webp",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876732/shoe4b_q7rsz5.png",
    },
    {
      id: 5,
      title: "  Giày Nike Air Jordan 1 Retro High OG 'Volt' 555088-702  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876734/shoe5a_ctdruv.webp",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876733/shoe5b_xi6c2a.png",
    },
    {
      id: 6,
      title: "  Giày Nike Jordan 1 Mid 'Light Smoke Grey' 554725-078  ",
      priceProduct: "5,524,200₫",
      discountProduct: "6,200,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876733/shoe6a_edwarv.webp",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876734/shoe6b_uvyiw8.webp",
    },
    {
      id: 7,
      title: " Giày Nike Wmns Air Jordan 1 Mid 'Shadow' BQ6472-007 ",
      priceProduct: "5,256,900₫",
      discountProduct: "5,900,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876740/shoe7a_umcsyd.png",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876740/shoe7b_yixw9d.png",
    },
    {
      id: 8,
      title: "Giày Nike Wmns Air Jordan 1 Mid 'Particle Grey' DO7139-002  ",
      priceProduct: "5,256,900₫",
      discountProduct: "5,900,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876741/shoe8a_xyijxv.png",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876739/shoe8b_r7wpcj.png",
    },
    {
      id: 9,
      title: " Giày Nike Wmns Air Jordan 1 Low 'Siren Red' DC0774-060",
      priceProduct: "5,256,900₫",
      discountProduct: "5,900,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876739/shoe9a_tqcd2t.png",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876739/shoe9b_rky2mk.png",
    },
    {
      id: 10,
      title: " Giày Nike Wmns Air Jordan 1 Low 'Red Blue' DC0774-604  ",
      priceProduct: "5,256,900₫",
      discountProduct: "5,900,000₫",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876745/shoe10a_givh0g.png",
      imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876747/shoe10b_yoxnqx.png",
    },
  ];

  return (
    <div className="mt-6 p-4 rounded-xl bg-red-600">
      <div className="flex items-center">
        <img
          width={20}
          height={20}
          src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753873888/flash-sale_fvktlm.png"
          alt="flash-sale"
        />
        <h1 className="text-white ml-1">SẢN PHẨM KHUYẾN MÃI</h1>

        <div className="flex ml-10">
          <div className="min-w-11 h-11 bg-white rounded-5px px-2 py-1.5 ml-3">
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              00
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              Ngày
            </span>
          </div>
          <div className="min-w-11 h-11 bg-white rounded-5px px-2 py-1.5 ml-3">
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              00
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              Giờ
            </span>
          </div>
          <div className="min-w-11 h-11 bg-white rounded-5px px-2 py-1.5 ml-3">
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              00
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              Phút
            </span>
          </div>
          <div className="min-w-11 h-11 bg-white rounded-5px px-2 py-1.5 ml-3">
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              00
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              Giây
            </span>
          </div>
        </div>
      </div>

      {/* các hàng giày khuyến mãi */}
      <div className="mt-3">
        <CouponCarousel perViewDesktop={5} perViewMobile={2} autoSlide={false}>
          {productDiscountList.map((productDiscount) => {
            return (
              <div
                key={productDiscount.id}
                className="bg-white h-full mx-3 p-2 rounded-5px cursor-pointer "
              >
                <div className="relative overflow-hidden">
                  <img
                    width={260}
                    height={260}
                    src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876861/frameMain.png_scqpda.webp"
                    alt="frameMain"
                    className="relative z-10 "
                  />

                  <img
                    src={productDiscount.imgA}
                    alt={productDiscount.title.slice(
                      1,
                      productDiscount.title.length - 44
                    )}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 "
                  />
                </div>

                <h3 className="text-[14px] font-medium line-clamp-2 mt-2">
                  {productDiscount.title}
                </h3>

                <div className="mt-2">
                  <span className="text-[13px] font-medium  text-red-600">
                    {productDiscount.priceProduct}
                  </span>
                  <span className="text-[13px] font-medium ml-3 line-through text-gray-500">
                    {productDiscount.discountProduct}
                  </span>
                </div>
              </div>
            );
          })}
        </CouponCarousel>
      </div>

      <div className="md:mt-9 mt-3 flex items-center justify-center">
        <button className="outline-none flex items-center bg-white hover:bg-black hover:text-white text-black transition duration-300 ease-in-out px-5 py-2.5 cursor-pointer rounded-5px">
          <span className=" ">Xem tất cả</span>
          <FaAnglesRight className=" ml-3" />
        </button>
      </div>
    </div>
  );
};
export const Coupon: React.FC = () => {
  return (
    <>
      <div className="mt-6 mx-2">
        <h1 className="text-2xl font-semibold pl-2 border-l-3 border-black uppercase">
          Khuyến mãi dành cho bạn
        </h1>

        <CouponCard />

        <CouponTable />
      </div>
    </>
  );
};

export const FeaturedProducts: React.FC = () => {
  return (
    <>
      <Coupon />
    </>
  );
};
