import React from "react";
import cx from "clsx";
import { styled } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Button } from "@mui/material";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    width: 400,
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
  width: "100%",
  height: "60vh",
  padding: 0,
  boxShadow: "none",
  borderRadius: 30,
  background: "linear-gradient(to right, #A6A6A6, #FFFF)",
});
const StyledCardMedia = styled(CardMedia)(({ theme }) =>
  useWideCardMediaStyles(theme)
);

const StyledCardContent = styled(CardContent)(({ theme }) =>
  makeStyles((styles) => styles.content)(theme)
);

const StyledButton = styled(Button)(({ theme }) =>
  makeStyles((styles) => styles.cta)(theme)
);

export const SilverCard = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const n = 6;

  return (
    <StyledCard className={cx(styles.root, shadowStyles.root)}>
      <StyledCardMedia
        component="img"
        className="w-full h-1/2"
        image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"
      />
      <StyledCardContent className={styles.content}>
        {[...Array(n)].map((e, i) => (
          <span key={i}></span>
        ))}
        <TextInfoContent
          classes={textCardContentStyles}
          heading={"STANDARD ROOM"}
        />
      </StyledCardContent>
    </StyledCard>
  );
});
