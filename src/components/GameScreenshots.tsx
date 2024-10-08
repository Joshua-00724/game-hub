import { Image, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
const Screenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

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
