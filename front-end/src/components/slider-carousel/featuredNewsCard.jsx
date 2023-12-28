import React from 'react';
import cx from 'clsx';
import { styled } from '@mui/system';
import {makeStyles} from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Button } from '@mui/material';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    width: 400,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 30,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

const StyledFeaturedNewsCard = styled('div')({
  // your custom styles for StyledFeaturedNewsCard
});

const StyledCard = styled(Card)({
  maxWidth: 304,
  width: 400,
  margin: 'auto',
  boxShadow: 'none',
  borderRadius: 30,
});

const StyledCardMedia = styled(CardMedia)(
  ({ theme }) => useWideCardMediaStyles(theme)
);

const StyledCardContent = styled(CardContent)(
  ({ theme }) => makeStyles(styles => styles.content)(theme)
);

const StyledButton = styled(Button)(
  ({ theme }) => makeStyles(styles => styles.cta)(theme)
);

export const  FeaturedNewsCard = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const n = 6;

  return (
    <StyledCard className={cx(styles.root, shadowStyles.root)}>
      <StyledCardMedia
        component="img"
        alt="News Image"
        height="140"
        image="https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
      />
      <StyledCardContent className={styles.content}>
        {[...Array(n)].map((e, i) => (
          <span key={i}></span>
        ))}
        <TextInfoContent
          classes={textCardContentStyles}
          heading={'What happened in Thailand?'}
          body={
            'Kayaks crowd Three Sisters Springs, where people and manatees maintain controversial coexistence.'
          }
        />
        <StyledButton color="primary" fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </StyledButton>
      </StyledCardContent>
    </StyledCard>
  );
});
