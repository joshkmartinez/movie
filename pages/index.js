import React, { useState } from "react";
import { Box, Flex, Text } from "rebass";
import { Label, Input } from "@rebass/forms";
export default () => {
  const [ID, setID] = useState();

  let handleChange = (e) => {
    setID(e.target.value);
  };

  return (
    <Box width={1}>
      <Flex justifyContent="center">
        <Box m={1}>
          <Label htmlFor="IMDB ID">IMDB ID</Label>
          <Input
            value={ID}
            onChange={(e) => handleChange(e)}
            id="IMDB ID"
            name="IMDB ID"
          />
        </Box>
      </Flex>
      <Flex justifyContent="center">
        {ID ? (
          <iframe
            frameBorder="0"
            width="1000"
            height="500"
            allowscriptaccess="always"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
            src={
              "https://streamvideo.link/getvideo?key=ukVah3Z9U6A7cYfC&video_id=" +
              ID
            }
          ></iframe>
        ) : (
          <Text m={3}>Enter an IMDB ID</Text>
        )}
      </Flex>
    </Box>
  );
};
