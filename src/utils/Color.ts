const Pallet = {
  default: 'rgb(248, 248, 248)', // #F8F8F8
  grayscale: 'rgb(196, 196, 196)', // #C4C4C4
  accent: {
    purple: 'rgb(195, 82, 249)', // #C352F9
    pink: 'rgb(255, 0, 255)', // #FF00FF
    default: 'rgb(31, 31, 31)', // #1F1F1F
    grayscale: 'rgb(133, 122, 122)', // #857A7A
    link: 'rgb(82, 0, 198)', // #5200C6
    sky: 'rgb(28, 200, 242)', // #1cc8f2
  },
}

export const addAlpha = (color: string, alpha: number): string => {
  return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`)
}
export default Pallet
