import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

const Cards = ({ title, id, style, userId, image }) => {
  return (
    <Card style={style}>
      <CardContent sx={{ px: 0, py: 0, position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: "300px",
          }}
        >
          <img src={image} alt="movie poster" style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box sx={{ px: 2, pt: 2 }}>
          <Typography sx={{ display: "flex", justifyContent: "end", fontSize: "18px", mb: 1 }}>
            <EmojiEmotionsOutlinedIcon style={{ marginRight: "5px" }} />
            83/ <Typography sx={{ fontSize: "13px" }}> 100 </Typography>
          </Typography>

          <Typography variant="h5" component="h2">
            {id}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontSize: "18px",
              color: "#000",
              marginBottom: "3px",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontSize: "18px",
              color: "#5e5e5e",
            }}
          >
            {userId}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cards;
