import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
//import GenresListSkeletons from "./GenresListSkeletons";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenreId?: number;
}

const GenresList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletonGenres = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {/* {isLoading &&
          skeletonGenres.map((skeletonGenre) => (
            <GenresListSkeletons key={skeletonGenre} />
          ))} */}

        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                color={genre.id === selectedGenreId ? "green" : "normal"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
