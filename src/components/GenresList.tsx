import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenresListSkeletons from "./GenresListSkeletons";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletonGenres = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletonGenres.map((skeletonGenre) => (
          <GenresListSkeletons key={skeletonGenre} />
        ))}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontFamily="sans-serif" fontSize="lg">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
