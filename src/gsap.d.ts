// Ambient overrides for GSAP sub-path imports.
// The installed gsap@3.14.2 package ships some .d.ts files with
// internal type errors (e.g. Observer.d.ts). Declaring them here
// prevents TypeScript from picking up the broken declarations.
declare module "gsap/Observer" {
  export const Observer: any;
}
declare module "gsap/Draggable" {
  export const Draggable: any;
}
declare module "gsap/DrawSVGPlugin" {
  export const DrawSVGPlugin: any;
}
declare module "gsap/Flip" {
  export const Flip: any;
}
declare module "gsap/GSDevTools" {
  export const GSDevTools: any;
}
declare module "gsap/MotionPathHelper" {
  export const MotionPathHelper: any;
}
declare module "gsap/MotionPathPlugin" {
  export const MotionPathPlugin: any;
}
declare module "gsap/Physics2DPlugin" {
  export const Physics2DPlugin: any;
}
declare module "gsap/PixiPlugin" {
  export const PixiPlugin: any;
}
declare module "gsap/ScrambleTextPlugin" {
  export const ScrambleTextPlugin: any;
}
declare module "gsap/TextPlugin" {
  export const TextPlugin: any;
}
declare module "gsap/ScrollToPlugin" {
  export const ScrollToPlugin: any;
}
declare module "gsap/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: any, vars?: any);
    revert(): void;
  }
}
declare module "gsap/CustomEase" {
  export const CustomEase: any;
}
declare module "gsap/CustomBounce" {
  export const CustomBounce: any;
}
declare module "gsap/CustomWiggle" {
  export const CustomWiggle: any;
}
declare module "gsap/EasePack" {
  export const RoughEase: any;
  export const ExpoScaleEase: any;
  export const SlowMo: any;
}
