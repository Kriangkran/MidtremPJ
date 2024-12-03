/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        BgBlue: "#EDF7FA",
        Ctext: "#21243D",
        Ci2: "#FF6464",
        txBlue: "#00A8CC",
        BgBlue2: "#142850",
        txcl: "#8695A4",
        txclb: "#21243D",
        lcl:"#E0E0E0"
      },
      fontFamily: {
        heebo: "Heebo"
      },
      fontSize: {
        menu: "2.75rem",
        title: "1.375rem",
        title_posts: "1.625rem",
      },
      borderRadius: {
        smm: "0.25rem",
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.custom-header': {
          '@apply flex justify-end px-4 pt-2 h-[50px] lg:pt-7 lg:pr-14': {},
        },
        '.custom-text': {
          '@apply col-span-12 flex items-center px-8 order-2 pt-[34px] lg:col-span-8 lg:items-start flex-col lg:order-1 lg:pt-[158px] lg:pl-[148px]': {},
        },
        '.custom-button': {
          '@apply bg-Ci2 rounded-sm font-heebo font-medium px-4 py-2 text-xl inline-block text-white w-52 h-12': {},
        },
        '.custom-image': {
          '@apply col-span-12 flex justify-center pt-[33px] order-1 lg:col-span-4 lg:justify-end lg:order-2 lg:pt-[140px] lg:pr-[148px]': {},
        },
        '.custom-image-rounded': {
          '@apply rounded-full w-[243px] h-[243px]': {},
        },
        '.custom-text2': {
          '@apply col-span-12 flex items-center px-8 pb-[59px] order-2 pt-[34px] lg:col-span-8 lg:items-start flex-col lg:order-1 lg:pt-[60px] lg:pr-[148px] lg:pb-[71px]': {},
        },
        '.custom-image2': {
          '@apply col-span-12 flex justify-center pt-[50px] lg:col-span-4 lg:justify-start lg:pt-[55px] lg:pl-[148px]': {},
        },
        '.custom-title': {
          '@apply col-span-12 text-center py-4 h-[60px] lg:col-span-10 lg:text-left flex-col lg:pt-[15px] lg:pl-[148px] lg:pb-[22px]': {},
        },
        '.custom-view': {
          '@apply hidden lg:col-span-2 lg:block lg:pt-[15px] lg:pr-[148px] lg:pb-[22px] lg:text-right': {},
        },
        '.text-name': {
          '@apply text-3xl font-heebo font-bold text-Ctext lg:text-menu pb-5': {},
        },
        '.text-info': {
          '@apply text-base text-Ctext font-heebo leading-relaxed pt-5 pb-10 lg:pt-5 lg:pb-10': {},
        },
        '.custom-featured-image': {
          '@apply col-span-12 px-[18px] flex justify-center lg:justify-start lg:col-span-4 lg:pl-[148px] lg:pr-0': {},
        },
        '.custom-featured-text': {
          '@apply col-span-12 px-[18px] pt-[18px] lg:col-span-8 lg:pr-[148px] lg:pl-0': {},
        },
        '.custom-Recent-left': {
          '@apply col-span-12 px-3 flex items-center lg:pb-8 lg:col-span-6 lg:pl-[148px] lg:pr-0': {},
        },
        '.custom-Recent-right': {
          '@apply col-span-12 px-3 pb-9 flex items-center lg:pb-8 lg:col-span-6 lg:pr-[148px] lg:pl-0': {},
        },
        '.custom-footer-icon': {
          '@apply col-span-12 flex justify-center space-x-[35px] px-[72px] pt-[128px] lg:px-[148px] lg:pt-[134px]': {},
        },
        '.custom-footer-text': {
          '@apply col-span-12 text-txclb text-center text-sm pt-[26px] pb-[54px] font-heebo px-[76px] lg:pt-[26px] lg:px-[148px]': {},
        },
      })
    },],
}

