import { Image, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gamePk: number;
}
const Screenshots = ({ gamePk }: Props) => {
  const { data, isLoading, error } = useScreenshots(gamePk);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
        {data?.results.map((photo) => (
          <Image key={photo.id} src={photo.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Screenshots;
