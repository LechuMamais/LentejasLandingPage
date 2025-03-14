import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: "#000000",
                secondary: "#FFFFFF",
                bgCustom: "#FFFDFD",
                bgCustomGreen: "#F1F0EC",
                bgFooter: "#000000",
                bgButton: "#D9D9D9",
                bgButton_hover: "#A9A9A9",
                bgHeader: "rgba(0, 0, 0, 0.3)",
                yellowStar: '#FBBC05'
            },
            /*boxShadows: {
                smallShadow: "0px 0px 12px 0px rgba(0,0,0,0.5)",
                md: "0px 0px 24px 0px rgba(0,0,0,0.5)",
                lg: "0 0 16px 16px black"
            }*/
        },
    },
    /*fonts: {
       body: "Arial, sans-serif",
       heading: `'kalnia', Arial,`
    },
    components: {
       Button: {
           baseStyle: {
               fontWeight: "bold",
           },
           variants: {
               solid: {
                   bg: "brand.500",
                   color: "white",
                   _hover: {
                       bg: "brand.600",
                   },
               },
               outline: {
                   borderColor: "brand.500",
                   color: "brand.500",
                   _hover: {
                       bg: "brand.50",
                   },
               },
           },
       },
   },*/
})

export const system = createSystem(defaultBaseConfig, customConfig)
