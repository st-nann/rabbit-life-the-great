import { Menu } from "@/types/menu"

const RABBIT_LIFE_STORAGE = process.env.NEXT_PUBLIC_RABBIT_LIFE_STORAGE as string
export const menu: Menu[] = [
  {
    id: 1,
    text: "ผลิตภัณฑ์",
    action: "dropdown",
    groups: [
      {
        text: "ประกันคุ้มครองชีวิต",
        icon: `${RABBIT_LIFE_STORAGE}/productfiles/homepage_share/images/home/Protect-icon.png?fbclid=IwZXh0bgNhZW0CMTAAAR2GciXIQrBBCyDU2-5imT2s3PCahI19x_aLKYx1mVZpxZ9lR9WcR8w3C7I_aem_Af6_WiqvgzRCCm6PRNR4zz6XvyLuspAirpiTcqF20nnkTQozy2558RoWzGpm9TEpssApFipg-buMJ4ebqoTJn3m4`,
        color: "yellow-500",
        url: "/th/products/life-insurance",
      },
      {
        text: "ประกันสุขภาพ",
        icon: `${RABBIT_LIFE_STORAGE}/productfiles/homepage_share/images/home/Health-icon.png?fbclid=IwZXh0bgNhZW0CMTAAAR1B_P3Y1NaDeRcFbWYCs6AZ_ZavRyJ7fVWTN8UDjalT1dduZ3wkgQlSEh8_aem_Af6HWksqyhHV-OKp5EHun6P4Aw6cAeGQUTqoTuCiOWNKjlBQGxGtauff5y6WDLPDm6lH7ca97z4ndfcwZn3xnNxJ`,
        color: "sky-500",
        url: "/th/products/health-protect",
      },
      {
        text: "ประกันอุบัติเหตุ",
        icon: `${RABBIT_LIFE_STORAGE}/productfiles/homepage_share/images/home/Accident-icon.png?fbclid=IwZXh0bgNhZW0CMTAAAR0_WDutKsoDvO55JM---TFhwJqoyc0qEjO2r2RZtuEGlSqD6XWJ-_dCWSA_aem_Af6bbMRb5EIitcnDpjcvxvmJVlOn_zZgynVwp9anh5oERG8ThmIAvXVl3u68XWPbAdWAgbx9bS2BciXzExzta-Db`,
        color: "rose-400",
        url: "/th/products/accident-protection",
      },
      {
        text: "ประกันลดหย่อนภาษี",
        icon: `${RABBIT_LIFE_STORAGE}/productfiles/homepage_share/images/home/Tax-icon.png?fbclid=IwZXh0bgNhZW0CMTAAAR0fQGrFtjjGCo9nVHW5YrIqt8YfcOasuEGfmI4Xvmh0vVQ1sdPBQFUVpwA_aem_Af7O-MK9Wy64-_lswtRjj1-ztNVYv60Iql4W46eJHFuFHhEy6oVpempj96FxF_g_RFRD6KoC-RJgMSxStvop2FEv`,
        color: "pink-300",
        url: "/th/products/tax-deduction",
      },
      {
        text: "ประกันบำนาญ",
        icon: `${RABBIT_LIFE_STORAGE}/productfiles/homepage_share/images/home/Bumnan-icon.png?fbclid=IwZXh0bgNhZW0CMTAAAR0YbN864RD5ZULRCLo9BdVUBmbPXnFPjORtvsrn8BVDxCfAEkMOOI0wG88_aem_Af5dHrn9Yi-FQoPEagc_PatgjCG9vEiOk9MXE5oP7tlCjypcGzx6gKgVd4oPlx0klwOv8Xk6H5AaBWobYqW7KTt_`,
        color: "blue-500",
        url: "/th/products/pension",
      },
    ]
  },
  {
    id: 2,
    text: "เกี่ยวกับเรา",
    action: "link",
    url: "/th/about",
  },
  {
    id: 3,
    text: "ติดต่อเรา",
    action: "scroll",
  }
]