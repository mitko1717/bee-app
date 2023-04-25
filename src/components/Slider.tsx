import { Slider, SliderThumb, styled } from "@mui/material";

export const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#665726',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {

      height: 27,
      width: 27,
      display: "flex",
      flexDirection: "column",
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 1,
        width: 9,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
        marginTop: 1,
        marginBottom: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));
  
  interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}
  
export function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }