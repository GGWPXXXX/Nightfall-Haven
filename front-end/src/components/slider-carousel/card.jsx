import React from "react";
import cx from "clsx";
import { styled } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent } from "@mui/material";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    margin: "auto",
    boxShadow: "none",
    borderRadius: 30,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

const StyledCard = styled(Card)({
  width: "70%",
  height: "auto",
  padding: 0,
  boxShadow: "none",
  borderRadius: 30,
});

const StyledCardMedia = styled(CardMedia)(({ theme }) =>
  useWideCardMediaStyles(theme)
);

const StyledCardContent = styled(CardContent)(({ theme }) =>
  makeStyles((styles) => styles.content)(theme)
);

export const HotelCard = React.memo(function NewsCard({
  background,
  roomType,
  roomPictureUrl,
}) {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const n = 6;

  return (
    <StyledCard
      className={cx(styles.root, shadowStyles.root)}
      style={{
        background:
          background === "gold"
            ? "linear-gradient(to right, #DDB005, #EBD2A3)"
            : "linear-gradient(to right, #A6A6A6, #FFFF)",
      }}
    >
      <StyledCardMedia
        component="img"
        style={{ objectFit: "cover" }}
        classes={mediaStyles}
        alt={roomType}
        image={roomPictureUrl}
      />

      <StyledCardContent className={styles.content}>
        {[...Array(n)].map((e, i) => (
          <span key={i}></span>
        ))}
        <TextInfoContent classes={textCardContentStyles} heading={roomType} />
      </StyledCardContent>
    </StyledCard>
  );
});
