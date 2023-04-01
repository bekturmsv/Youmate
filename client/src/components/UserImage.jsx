import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`${process.env.REACT_APP_API_URL}/assets/${image}`}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        crossOrigin="anonymous"
      />
    </Box>
  );
};

export default UserImage;
