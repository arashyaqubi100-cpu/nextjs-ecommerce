export const marketingPageStyles = {
  container:"mt-20 md:mt-44 lg:mt-44",

  slider:"w-full aspect-[3/1] lg:aspect-[4/1]",
  storyList: "flex my-10 gap-10 w-[70%] mx-auto justify-center cursor-pointer [@media(max-width:1100px)]:hidden",
  storyItem: "flex flex-col gap-2 text-center items-center text-xs border-1-black",
  storyBorderStyle:"h-18 w-18 flex justify-center items-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full",
  storyBackgroundStyle:"w-17 h-17 bg-white flex justify-center items-center rounded-full",
  storyImageStyle:"relative w-16 h-16",
  moreButtonWrapper: "flex flex-col gap-2 text-center cursor-pointer",
  moreButtonIcon: "rounded-full bg-gray-100 w-16 h-16 flex justify-center items-center",

  swiperWrapper: "flex mx-auto py-2 mt-2 lg:mt-10 px-2 w-[90%] gap-2 justify-start bg-red-400 rounded-2xl items-center overflow-x-scroll",
  swiperItem: "flex h-60 lg:h-70 w-[90%] cursor-pointer rounded-2xl gap-2 justify-center flex-col items-center m-2 bg-white",
  discountBadge: "bg-red-500 rounded-full text-sm px-1 text-white",
  beforePrice: "text-gray-300 line-through mr-23",

  firstBannerItem: "cursor-pointer rounded-xl aspect-[4/3]",
  bannerItem: "cursor-pointer aspect-[3/1]",

  categorySection: "flex flex-col text-center w-[85%] mx-auto justify-center items-center gap-10 mt-10",
  categoryList: `w-[100%] grid grid-cols-5 grid-rows-2 gap-8
    sm:grid-cols-10 grid-rows-2
    xs:grid-cols-2 grid-rows-2 `,
  categoryItem: `flex cursor-pointer flex-col justify-center items-center`,
  discountedProductsWrapper: "flex flex-col [@media(max-width:1100px)]:hidden w-[90%] border-1 border-gray-400 rounded-xl mx-auto my-10 justify-center items-center",
  discountedProductItem: "w-[16%] h-50 flex flex-col items-center justify-center p-2",
  priceContainer: "flex justify-between w-full p-2",
  discountBadgeSmall: "bg-red-500 rounded-full text-sm p-1 text-white",
  beforePriceSmall: "text-gray-300 line-through mr-[65%]",

  modalStyle:"w-240 h-[80%] bg-white overflow-y-auto",

  digikalaServiceList: "grid grid-cols-6 my-10 gap-10 cursor-pointer",
  digikalaServiceItem: "flex text-xs flex-col gap-2 text-center w-14",
  digikalaServiceItemInner: "border cursor-pointer border-gray-400 w-110 bg-white rounded-lg justify-between flex items-center px-2 py-4",
  
  BannerFourChild:"w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  BannerTwoChild:"w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",

  fixedButton: "[@media(max-width:1100px)]:hidden fixed w-40 h-13 rounded-full bg-green-600 left-10 bottom-10 z-10 cursor-pointer flex items-center p-2 justify-center gap-2 text-white",
};
