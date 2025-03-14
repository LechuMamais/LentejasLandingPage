import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

function About() {
  return (
    <Grid
      id={"about"}
      as={"section"}
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(2, 1fr)"
      h={"2250px"}
    >
      <GridItem
        p={"48px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={8}
        bg={"bgCustomGreen"}
      >
        <Text fontSize={"20px"} fontWeight={"bold"} color={"primary"}>
          SOMOS
        </Text>
        <Text fontSize={"102px"} fontWeight={"bold"} color={"primary"}>
          SOSTENIBLES
        </Text>
        <Text fontSize={"18px"} color={"primary"}>
          Trabajamos directamente con agricultores locales, que utilizan métodos
          respetuosos con el medio ambiente, para ofrecer productos naturales de
          calidad, sin aditivos ni conservantes artificiales, garantizando
          frescura y sabor para tus comidas.
        </Text>
      </GridItem>
      <GridItem overflow={"hidden"}>
        <Image src="/images/campolentejas.jpg"></Image>
      </GridItem>
      <GridItem overflow={"hidden"}>
        <Image src="/images/lentejas1.jpg"></Image>
      </GridItem>
      <GridItem
        p={"48px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={8}
        bg={"bgCustomGreen"}
      >
        <Text fontSize={"20px"} fontWeight={"bold"} color={"primary"}>
          SOMOS
        </Text>
        <Text fontSize={"102px"} fontWeight={"bold"} color={"primary"}>
          CALIDAD
        </Text>
        <Text fontSize={"18px"} color={"primary"}>
          Nos obsesionan los detalles.
        </Text>
        <Text fontSize={"18px"} color={"primary"}>
          Por eso nos aseguramos que cada grano, cada semilla, cumpla con
          estrictos controles de calidad, para que todas tus comidas estén al
          nivel que te mereces.
        </Text>
      </GridItem>
      <GridItem
        colSpan={2}
        p={"200px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={8}
      >
        <Text fontSize={"102px"} color={"primary"} fontWeight={"bold"}>
          SOMOS
        </Text>
        <Text fontSize={"18px"} color={"primary"}>
          Una empresa familiar fundada en 2018 con el objetivo de llevar lo
          mejor del campo a tu mesa.
        </Text>{" "}
        <Text fontSize={"18px"} color={"primary"}>
          Producir y comercializar productos de primera calidad es nuestro ADN.
        </Text>{" "}
        <Text fontSize={"18px"} color={"primary"}>
          Nutrirte nuestro fin
        </Text>
      </GridItem>
    </Grid>
  );
}
export default About;
