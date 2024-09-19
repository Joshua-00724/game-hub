import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React from "react";

const GenresListSkeletons = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <SkeletonCircle size="32px" borderRadius={8} />
          <Skeleton height="20px" width="150px" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenresListSkeletons;
