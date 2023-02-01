import { Box, Button, Paper, Stack } from "@mui/material";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import menuConfig from "../../configs/menu.configs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundColor: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent={"space-between"}
          direction={{ xs: "column", md: "row" }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <Box>
            {menuConfig.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "inherit" }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
