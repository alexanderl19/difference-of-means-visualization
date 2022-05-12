import { styled } from "stitches.config";

const TextArea = styled("textarea", {
  resize: "vertical",
  width: "100%",
  padding: "$2",
  borderRadius: "$2",
  borderWidth: 1,
  borderColor: "$sand7",
  backgroundColor: "$sand3",
  "&:hover": {
    backgroundColor: "$",
  },

  variants: {
    height: {
      tall: {
        height: "$9",
      },
      short: {
        height: "$7",
      },
    },
  },

  defaultVariants: {
    height: "tall",
  },
});

export default TextArea;
