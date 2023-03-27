import { Box } from "@mui/material";
import { REACT_APP_API_URL } from "helpers/constants";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`${REACT_APP_API_URL}assets/${image}`}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
      />
    </Box>
  );
};

export default UserImage;
