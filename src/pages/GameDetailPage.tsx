import { Button, Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading marginY={5} textAlign="center">
        {game.name}
      </Heading>

      <ExpandableText>{game.description_raw}</ExpandableText>
      {/* <Button>Load More</Button> */}
    </>
  );
};

export default GameDetailPage;
