import { style, globalFontFace } from "@vanilla-extract/css";

const robotoSlab = "Roboto Slab"
const notoSans = "Noto Sans";

globalFontFace(robotoSlab, {
  src: `url(https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2RjV9Su1cai.woff2) format('woff2')`,
  fontWeight: 400
});

globalFontFace(notoSans, {
  src: `url(https://fonts.gstatic.com/s/notosans/v34/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format('woff2')`
});

export const fontSlab = style({
  fontFamily: robotoSlab,
})

export const fontNoto = style({
  fontFamily: notoSans,
})
