import React, { useState } from "react";
import { Box, Flex, Text } from "rebass";
import { Label, Input } from "@rebass/forms";
const index = () => {
  const [ID, setID] = useState();
  const [season, setSeason] = useState();
  const [episode, setEpisode] = useState();

  let handleChangeID = (e) => {
    setID(e.target.value);
  };

  let handleChangeSeason = (e) => {
    setSeason(e.target.value);
  };
  let handleChangeEpisode = (e) => {
    setEpisode(e.target.value);
  };

  let isTV = () => {
    console.log("here: ");
    if (season & episode) {
      return "1";
    }
    return "0";
  };

  return (
    <Box width={1}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      ></link>{" "}
      <Text textAlign="center">
        <b>The use of an adblocker is highly recommended.</b>
      </Text>
      <Flex justifyContent="center">
        <Box m={1}>
          <Label htmlFor="IMDB ID">IMDB ID</Label>
          <Input
            value={ID}
            onChange={(e) => handleChangeID(e)}
            id="IMDB ID"
            name="IMDB ID"
          />
        </Box>
        <Box m={1}>
          <Label htmlFor="IMDB ID">
            Leave these fields empty if you are watching a movie.
          </Label>
          <Flex>
            <Flex mr={1}>
              Season Number:
              <Input
                value={season}
                onChange={(e) => handleChangeSeason(e)}
                id="Season #"
                name="Season #"
              />
            </Flex>
            <Flex>
              Episode Number:
              <Input
                value={episode}
                onChange={(e) => handleChangeEpisode(e)}
                id="Episode #"
                name="Episode #"
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        {ID ? (
          <Box>
            <iframe
              frameBorder="0"
              width="1000"
              height="500"
              allowscriptaccess="always"
              allowfullscreen="true"
              sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
              src={
                "https://streamvideo.link/getvideo?key=ukVah3Z9U6A7cYfC&video_id=" +
                ID +
                "&tv=" +
                isTV() +
                "&e=" +
                episode +
                "&s=" +
                season
              }
            ></iframe>
            <Text textAlign="center">
              <Text>
                If you get a sandbox embed error, change the server in the top
                right.
              </Text>
              All content is provided by non-affiliated third parties.
            </Text>
          </Box>
        ) : (
          <Text m={3}>Enter an IMDB ID</Text>
        )}
      </Flex>
    </Box>
  );
};

export default index;
