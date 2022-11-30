import { Typography, Card, CardMedia, CardContent, Stack } from "@mui/material";
import React from "react";

const CakeSction = () => {
  const cakes = [
    {
      name: "Red Valvet",
      image:
        "https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    },
    {
      name: "Chocolate",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
    },
    {
      name: "Rose",
      image:
        "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Butter Scotch",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    },
    {
      name: "Strawbery",
      image:
        "https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlydGhkYXklMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Mix Fruit",
      image:
        "https://images.unsplash.com/photo-1486428128344-5413e434ad35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Pine Apple",
      image:
        "https://images.unsplash.com/photo-1529687659817-6e17fab7ab36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <>
      <Typography variant="h4" mt={6} mb={6}>
        Cakes -
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ flexWrap: "wrap" }}
      >
        {cakes.map((cake) => {
          return (
            <Card sx={{ maxWidth: "300px", mb: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={cake.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h5">{cake.name}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default CakeSction;
