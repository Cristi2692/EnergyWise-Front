import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)({
    fontSize: '0.8rem',
    fontWeight:"bold",
    color: '#006775',
    padding: "5px",
    textDecoration: 'none',
    transition: 'none !important',
    borderRadius: "5px",
    '&:hover': {
      color: '#FFCF60',
    },
  });