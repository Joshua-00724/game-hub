import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";
import { Link, useNavigate } from "react-router-dom";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // const navigate = useNavigate();
  // const selectedGame = () => navigate(`/games/${platform.slug}`);

  return (
    <Card height="100%" display="flex" flexDirection="column">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emojis rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
